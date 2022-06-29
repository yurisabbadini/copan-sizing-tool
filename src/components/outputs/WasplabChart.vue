<template>
  <q-card class="q-pa-sm q-mt-sm">
    <apexchart
      type="bar"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </q-card>
</template>

<style>
</style>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import appStorage from '@/store';
import { PrimaryProtocol } from '@/types';
export default defineComponent({
  name: 'WasplabChart',
  props: {
    lineId: {
        type: Object as PropType<string>,
        required: true
    }
  },
  setup(props) {
    const {
      primaryProtocols,
      lines,
      settings
    } = appStorage();

    const line = lines.value.find((x) => x.id == props.lineId);

    const platesPerProtocolVolumes: {
      plates: number;
      totalPlatesTime: number;
      platesPerHour: number[];
      platesTimePerHour: number[];
      protocol?: PrimaryProtocol;
    }[] = [];

    const waspTimesData: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    primaryProtocols.value.forEach(protocol => {
      for(let i = 0; i < protocol.volumes.length; i++) {
        const plates = (line?.protocols.find((x) => x.id == protocol.id)?.wasp1Plates || 0) + (line?.protocols.find((x) => x.id == protocol.id)?.wasp2Plates || 0);
        const platesTime = plates * (protocol.volumes[i] || 0) / 100 * (settings.value.plates.streakingPatterns.find((x) => x.pattern == protocol.waspData.streakingPattern)?.timeInSeconds || 0);

        let slides = (line?.protocols.find((x) => x.id == protocol.id)?.wasp1Slides || 0) + (line?.protocols.find((x) => x.id == protocol.id)?.wasp2Slides || 0);
        let slideTimeSettings = settings.value.slides.streakingPatterns.find((x) => x.pattern == "slide_and_other")?.timeInSeconds || 0;
        if (protocol.waspData.platesPerSample == 0) {
            slideTimeSettings = settings.value.slides.streakingPatterns.find((x) => x.pattern == "slide_only")?.timeInSeconds || 0;
        }
        const slidesTime = slides * (protocol.volumes[i] || 0) / 100 * slideTimeSettings;

        let broths = (line?.protocols.find((x) => x.id == protocol.id)?.wasp1Broths || 0) + (line?.protocols.find((x) => x.id == protocol.id)?.wasp2Broths || 0);
        const brothsTime = broths * (protocol.volumes[i] || 0) / 100 * settings.value.broths.timeInSeconds;
        waspTimesData[i] += platesTime + slidesTime + brothsTime;
        if(waspTimesData[i] > 3600) {
          let next = i+1;
          if(next > waspTimesData.length - 1) {
            next = 0;
          }
          waspTimesData[next] += waspTimesData[i] - 3600;
          waspTimesData[i] = 3600;
        }
      }
    });


    primaryProtocols.value.forEach(protocol => {
      platesPerProtocolVolumes.push({
        protocol: protocol,
        platesPerHour: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        platesTimePerHour: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        plates: 0,
        totalPlatesTime: 0
      });
      for(let i = 0; i < platesPerProtocolVolumes[platesPerProtocolVolumes.length - 1].platesPerHour.length; i++) {
        const plates = (line?.protocols.find((x) => x.id == protocol.id)?.wasp1Plates || 0) + (line?.protocols.find((x) => x.id == protocol.id)?.wasp2Plates || 0);
        platesPerProtocolVolumes[platesPerProtocolVolumes.length - 1].platesPerHour[i] += Math.ceil(plates * (protocol.volumes[i] || 0) / 100);
        platesPerProtocolVolumes[platesPerProtocolVolumes.length - 1].platesTimePerHour[i] += plates * (protocol.volumes[i] || 0) / 100 * (settings.value.plates.streakingPatterns.find((x) => x.pattern == protocol.waspData.streakingPattern)?.timeInSeconds || 0);
        platesPerProtocolVolumes[platesPerProtocolVolumes.length - 1].plates += Math.ceil(plates * (protocol.volumes[i] || 0) / 100);
        platesPerProtocolVolumes[platesPerProtocolVolumes.length - 1].totalPlatesTime += plates * (protocol.volumes[i] || 0) / 100 * (settings.value.plates.streakingPatterns.find((x) => x.pattern == protocol.waspData.streakingPattern)?.timeInSeconds || 0);
      }
    });
    
    const totalWaspTime = waspTimesData.reduce((a, b) => a+b);
    let totalPlates = 0;
    let totalPlatesTime = 0;
    platesPerProtocolVolumes.forEach(element => {
      totalPlatesTime += element.totalPlatesTime
      totalPlates += element.plates;
    });
    const factor = totalPlatesTime / totalWaspTime;
    const plateAvgTime = totalPlatesTime / totalPlates;
    
    const platesFromWasp: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    const platesFromWaspPerProtocol: 
    {
      protocol: PrimaryProtocol,
      plates: number[],
    }[] = [];
    const loadingChartData: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    for(let i = 0; i < waspTimesData.length; i++) {
      platesFromWasp[i] = Math.ceil(waspTimesData[i] * factor / plateAvgTime);
      loadingChartData[i] = Number((Math.ceil(waspTimesData[i] * factor / plateAvgTime) / settings.value.incubator.loadingPlatesPerHour).toFixed(2));
    }

    primaryProtocols.value.forEach(protocol => {
      platesFromWaspPerProtocol.push({
        protocol: protocol,
        plates: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      });
      for(let i = 0; i < platesFromWasp.length; i++) {
        const totalPlatesInHour = platesPerProtocolVolumes.map((x) => x.platesPerHour[i]).reduce((a,b) => a+b);
        const protocolPlatesInHour = (platesPerProtocolVolumes.find((x) => x.protocol?.id == protocol.id)?.platesPerHour[i] || 0);
        const protocolFactor = protocolPlatesInHour == 0 ? 0 : protocolPlatesInHour / totalPlatesInHour;
        platesFromWaspPerProtocol[platesFromWaspPerProtocol.length - 1].plates[i] = Math.ceil(platesFromWasp[i] * protocol.volumes[i] / 100 * protocolFactor);
      }
    });

    console.log("platesFromWasp", platesFromWasp);
    console.log("platesPerProtocolVolumes", platesPerProtocolVolumes);
    console.log("platesFromWaspPerProtocol", platesFromWaspPerProtocol);

    const series = [
      /*{
        name: 'Unloading positive plates',
        data: unloadingPositiveData.map((x) => Number((x / 3600 * 100).toFixed(2))),
        color: "#022A55"
      }, */
      {
        name: 'Loading',
        data: loadingChartData,
        color: "#7794FB"
      }, 
      /*{
        name: 'Recording',
        data: recordingData.map((x) => Number((x / 3600 * 100).toFixed(2))),
        color: "#bede19"
      }, 
      {
        name: 'Unloading negative plates',
        data: unloadingNegativeData.map((x) => Number((x / 3600 * 100).toFixed(2))),
        color: "#A9A9A9"
      }*/
    ];

    const chartCategories: string[] = [];
    for(let i=1; i < 25; i++) {
      chartCategories.push(`${(i-1).toString().padStart(2, '0')}-${(i).toString().padStart(2, '0')}`)
    }

    const chartOptions = {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
        },
        xaxis: {
          categories: chartCategories
        },
        yaxis: {
          //max: 100
        },
      };

    return {
      chartOptions,
      series
    }
  },
});
</script>
