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
    const numberOfIncubators = (line?.numberOfCO2Incubator || 0) + (line?.numberOfO2Incubator || 0);

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

        const radianPlates = Math.ceil(plates * (protocol.radianPercentage / 100)); 
        const radianTime = line?.radian ? radianPlates * (protocol.volumes[i] || 0) / 100 * settings.value.radian.timeInSeconds : 0;

        waspTimesData[i] += platesTime + slidesTime + brothsTime + radianTime;
        if(waspTimesData[i] > 3600 * (line?.numberOfWasp || 1)) {
          let next = i+1;
          if(next > waspTimesData.length - 1) {
            next = 0;
          }
          waspTimesData[next] += waspTimesData[i] - (3600 * (line?.numberOfWasp || 1));
          waspTimesData[i] = 3600 * (line?.numberOfWasp || 1);
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
    const loadingPlatesPerProtocol: 
    {
      protocol: PrimaryProtocol,
      plates: number[],
    }[] = [];

    for(let i = 0; i < waspTimesData.length; i++) {
      platesFromWasp[i] = Math.ceil(waspTimesData[i] * factor / plateAvgTime);
    }

    primaryProtocols.value.forEach(protocol => {
      loadingPlatesPerProtocol.push({
        protocol: protocol,
        plates: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      });
      for(let i = 0; i < platesFromWasp.length; i++) {
        const totalPlates = platesPerProtocolVolumes.map((x) => x.plates).reduce((a,b) => a+b);
        const protocolPlates = (platesPerProtocolVolumes.find((x) => x.protocol?.id == protocol.id)?.plates || 0);
        const protocolFactor = protocolPlates == 0 ? 0 : protocolPlates / totalPlates;
        loadingPlatesPerProtocol[loadingPlatesPerProtocol.length - 1].plates[i] = Math.ceil(platesFromWasp[i] * protocolFactor);
      }
    });

    const unloadingAirPlatesPerProtocol: 
    {
      protocol: PrimaryProtocol,
      positivePlates: number[],
      negativePlates: number[],
    }[] = [];
    const unloadingCO2PlatesPerProtocol: 
    {
      protocol: PrimaryProtocol,
      positivePlates: number[],
      negativePlates: number[],
    }[] = [];

    const recordingAirPlatesPerProtocol: 
    {
      protocol: PrimaryProtocol,
      plates: number[],
    }[] = [];
    const recordingCO2PlatesPerProtocol: 
    {
      protocol: PrimaryProtocol,
      plates: number[],
    }[] = [];

    primaryProtocols.value.forEach(protocol => {
      const airFactor = protocol.wasplabData.air.platesPerSample / (protocol.wasplabData.air.platesPerSample + protocol.wasplabData.co2.platesPerSample);
      const co2Factor = protocol.wasplabData.co2.platesPerSample / (protocol.wasplabData.air.platesPerSample + protocol.wasplabData.co2.platesPerSample);
      const loadingPlates = loadingPlatesPerProtocol.find((x) => x.protocol.id == protocol.id);
      const protocolAirReadingTimes = protocol.wasplabData.air.readHours?.split(",").map((x => Number(x))) || [];
      const maxAirReadingTimes = Math.max(...protocolAirReadingTimes);
      const protocolCO2ReadingTimes = protocol.wasplabData.co2.readHours.split(",").map((x => Number(x))) || [];
      const maxCO2ReadingTimes = Math.max(...protocolCO2ReadingTimes);
      unloadingAirPlatesPerProtocol.push({
        protocol: protocol,
        positivePlates: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        negativePlates: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      });
      unloadingCO2PlatesPerProtocol.push({
        protocol: protocol,
        positivePlates: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        negativePlates: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      });
      recordingAirPlatesPerProtocol.push({
        protocol: protocol,
        plates: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      });
      recordingCO2PlatesPerProtocol.push({
        protocol: protocol,
        plates: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      });
      if(loadingPlates) {
        for(let i = 0; i < loadingPlates.plates.length; i++) {
          const tempDate = new Date(Date.UTC(2017, 0, 1, i, 0, 0, 0)); // just a Sunday
          const airEndDate = new Date(tempDate.getTime() + (maxAirReadingTimes - 1) * 60 * 60 * 1000);
          unloadingAirPlatesPerProtocol[unloadingAirPlatesPerProtocol.length - 1].positivePlates[airEndDate.getHours()] = Math.ceil(loadingPlates.plates[i] * airFactor * (1 - protocol.negativityRate / 100));
          unloadingAirPlatesPerProtocol[unloadingAirPlatesPerProtocol.length - 1].negativePlates[airEndDate.getHours()] = Math.ceil(loadingPlates.plates[i] * airFactor * (protocol.negativityRate / 100));

          protocolAirReadingTimes.forEach(rt => {
            const airEndDate = new Date(tempDate.getTime() + (rt - 1) * 60 * 60 * 1000);
            recordingAirPlatesPerProtocol[recordingAirPlatesPerProtocol.length - 1].plates[airEndDate.getHours()] += Math.ceil(loadingPlates.plates[i] * airFactor);
          });
          
          const co2EndDate = new Date(tempDate.getTime() + (maxCO2ReadingTimes - 1) * 60 * 60 * 1000);
          unloadingCO2PlatesPerProtocol[unloadingCO2PlatesPerProtocol.length - 1].positivePlates[co2EndDate.getHours()] = Math.ceil(loadingPlates.plates[i] * co2Factor * (1 - protocol.negativityRate / 100));
          unloadingCO2PlatesPerProtocol[unloadingCO2PlatesPerProtocol.length - 1].negativePlates[co2EndDate.getHours()] = Math.ceil(loadingPlates.plates[i] * co2Factor * (protocol.negativityRate / 100));

          protocolCO2ReadingTimes.forEach(rt => {
            const co2EndDate = new Date(tempDate.getTime() + (rt - 1) * 60 * 60 * 1000);
            recordingCO2PlatesPerProtocol[recordingCO2PlatesPerProtocol.length - 1].plates[co2EndDate.getHours()] += Math.ceil(loadingPlates.plates[i] * co2Factor);
          });
        }
      }
    });

    const unloadingPositive = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    unloadingAirPlatesPerProtocol.forEach(element => {
      for(let i = 0;  i < unloadingPositive.length; i++) {
        unloadingPositive[i] += element.positivePlates[i];
      }
    });
    unloadingCO2PlatesPerProtocol.forEach(element => {
      for(let i = 0;  i < unloadingPositive.length; i++) {
        unloadingPositive[i] += element.positivePlates[i];
      }
    });

    const unloadingNegative = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    unloadingAirPlatesPerProtocol.forEach(element => {
      for(let i = 0;  i < unloadingPositive.length; i++) {
        unloadingNegative[i] += element.negativePlates[i];
      }
    });
    unloadingCO2PlatesPerProtocol.forEach(element => {
      for(let i = 0;  i < unloadingPositive.length; i++) {
        unloadingNegative[i] += element.negativePlates[i];
      }
    });

    const recordingPlates = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    recordingAirPlatesPerProtocol.forEach(element => {
      for(let i = 0;  i < recordingPlates.length; i++) {
        recordingPlates[i] += element.plates[i];
      }
    });
    recordingCO2PlatesPerProtocol.forEach(element => {
      for(let i = 0;  i < recordingPlates.length; i++) {
        recordingPlates[i] += element.plates[i];
      }
    });

    const loadingChartData: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    const unloadingPositiveChartData: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    const unloadingNegativeChartData: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    const recordingChartData: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    for(let i = 0; i < waspTimesData.length; i++) {
      loadingChartData[i] = Number(Math.ceil(waspTimesData[i] * factor / plateAvgTime) / settings.value.incubator.loadingPlatesPerHour);
      loadingChartData[i] = Number((loadingChartData[i] * 100).toFixed(2));

      unloadingPositiveChartData[i] = Number((unloadingPositive[i] / (numberOfIncubators >= 1 ? settings.value.incubator.unloadingMultiplePlatesPerHour : settings.value.incubator.unloadingSinglePlatesPerHour)));
      unloadingPositiveChartData[i] = Number((unloadingPositiveChartData[i] * 100).toFixed(2));

      unloadingNegativeChartData[i] = Number((unloadingNegative[i] / (numberOfIncubators >= 1 ? settings.value.incubator.unloadingMultiplePlatesPerHour : settings.value.incubator.unloadingSinglePlatesPerHour)));
      unloadingNegativeChartData[i] = Number((unloadingNegativeChartData[i] * 100).toFixed(2));

      recordingChartData[i] = Number((recordingPlates[i] / settings.value.incubator.recordingPlatesPerHour));
      recordingChartData[i] = Number((recordingChartData[i] * 100).toFixed(2));
    }

    for(let i = 0; i < unloadingPositiveChartData.length - 1; i++) {
      const tempDate = new Date(Date.UTC(2017, 0, 1, i, 0, 0, 0)); // just a Sunday
      const nextDate = new Date(tempDate.getTime() + 1 * 60 * 60 * 1000);
      let next = nextDate.getHours() - 1;
      if(unloadingPositiveChartData[i] >= 100) {
        unloadingPositiveChartData[next] += unloadingPositiveChartData[i] - 100;
        unloadingPositiveChartData[i] = 100;
        loadingChartData[next] += loadingChartData[i];
        loadingChartData[i] = 0;
        recordingChartData[next] += recordingChartData[i];
        recordingChartData[i] = 0;
        unloadingNegativeChartData[next] += unloadingNegativeChartData[i];
        unloadingNegativeChartData[i] = 0
      } 
      if(unloadingPositiveChartData[i] + loadingChartData[i] >= 100) {
        unloadingPositiveChartData[next] += 0;
        loadingChartData[next] += loadingChartData[i] - (100 - unloadingPositiveChartData[i]);
        loadingChartData[i] = 100 - unloadingPositiveChartData[i];
        recordingChartData[next] += recordingChartData[i];
        recordingChartData[i] = 0;
        unloadingNegativeChartData[next] += unloadingNegativeChartData[i];
        unloadingNegativeChartData[i] = 0;
      } 
      if(unloadingPositiveChartData[i] + loadingChartData[i] + recordingChartData[i] >= 100) {
        unloadingPositiveChartData[next] += 0;
        loadingChartData[next] += 0;
        recordingChartData[next] += recordingChartData[i] - (100 - (unloadingPositiveChartData[i] + loadingChartData[i]));
        recordingChartData[i] = 100 - (unloadingPositiveChartData[i] + loadingChartData[i]);
        unloadingNegativeChartData[next] += unloadingNegativeChartData[i];
        unloadingNegativeChartData[i] = 0;
      } 
      if(unloadingPositiveChartData[i] + loadingChartData[i] + recordingChartData[i] + unloadingNegativeChartData[i] >= 100) {
        unloadingPositiveChartData[next] += 0;
        loadingChartData[next] += 0;
        recordingChartData[next] += 0;
        unloadingNegativeChartData[next] += unloadingNegativeChartData[i] - (100 - (unloadingPositiveChartData[i] + loadingChartData[i] + recordingChartData[i]));
        unloadingNegativeChartData[i] = 100 - (unloadingPositiveChartData[i] + loadingChartData[i] + recordingChartData[i]);
      }
    }

    const series = [
      {
        name: 'Unloading positive plates',
        data: unloadingPositiveChartData.map((x) => Number(x.toFixed(2))),
        color: "#022A55"
      },
      {
        name: 'Loading',
        data: loadingChartData.map((x) => Number(x.toFixed(2))),
        color: "#7794FB"
      }, 
      {
        name: 'Recording',
        data: recordingChartData.map((x) => Number(x.toFixed(2))),
        color: "#bede19"
      }, 
      {
        name: 'Unloading negative plates',
        data: unloadingNegativeChartData.map((x) => Number(x.toFixed(2))),
        color: "#A9A9A9"
      }
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
          max: 100
        },
      };

    return {
      chartOptions,
      series
    }
  },
});
</script>
