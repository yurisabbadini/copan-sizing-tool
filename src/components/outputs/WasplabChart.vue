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

    const loadingPlatesData: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    primaryProtocols.value.forEach(protocol => {
      const maxPlates = Math.ceil(3600 / (settings.value.plates.streakingPatterns.find((x) => x.pattern == protocol.waspData.streakingPattern)?.timeInSeconds || 0));
      for(let i = 0; i < protocol.volumes.length; i++) {
        const plates = ((line?.protocols.find((x) => x.id == protocol.id)?.wasp1Plates || 0) + (line?.protocols.find((x) => x.id == protocol.id)?.wasp2Plates || 0)) * ((protocol.volumes[i] || 0) / 100);
        loadingPlatesData[i] += plates;
        if(loadingPlatesData[i] > maxPlates) {
          let next = i+1;
          if(next > loadingPlatesData.length - 1) {
            next = 0;
          }
          loadingPlatesData[next] += loadingPlatesData[i] - maxPlates;
          loadingPlatesData[i] = maxPlates;
        }
      }
    });

    const unloadingPositiveData: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    const loadingData: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    const recordingData: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    const unloadingNegativeData: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    primaryProtocols.value.forEach(protocol => {
      const positiveRate = (100 - protocol.negativityRate) / 100;
      const negativeRate = (protocol.negativityRate) / 100;

      const offsetHoursCO2 = Math.max(...(protocol.wasplabData.co2.readHours.split(",").map((x => Number(x))) || []));
      const offsetHoursO2 = Math.max(...(protocol.wasplabData.air.readHours.split(",").map((x => Number(x))) || []));

      for(let i = 0; i < protocol.volumes.length; i++) { 
        const tempDate = new Date(Date.UTC(2017, 0, 1, i-1, 0, 0, 0)); // just a Sunday
        
        const endDateCO2 = new Date(tempDate.getTime() + offsetHoursCO2 * 60 * 60 * 1000);
        const endHourCO2 = endDateCO2.getHours();
        
        const endDateO2 = new Date(tempDate.getTime() + offsetHoursO2 * 60 * 60 * 1000);
        const endHourO2 = endDateO2.getHours();

        let unloadingTime = settings.value.incubator.unloadingSinglePlatesPerHour;
        if((line?.numberOfCO2Incubator || 0) + (line?.numberOfO2Incubator || 0)) {
          unloadingTime = settings.value.incubator.unloadingMultiplePlatesPerHour;
        }
        unloadingTime = unloadingTime * (protocol.volumes[i] || 0) / 100;
        const loadingTime = settings.value.incubator.loadingPlatesPerHour;
        const recordingTime = settings.value.incubator.recordingPlatesPerHour * (protocol.volumes[i] || 0) / 100;

        let indexCO2 = endHourCO2;
        if(indexCO2 > unloadingPositiveData.length - 1) {
          indexCO2 = indexCO2 - unloadingPositiveData.length - 1;
        }
        
        let indexO2 = endHourO2;
        if(indexO2 > unloadingPositiveData.length - 1) {
          indexO2 = indexO2 - unloadingPositiveData.length - 1;
        }

        //unloading CO2
        const co2Unloading = unloadingTime == 0 ? 0 : (line?.protocols.find((x) => x.id == protocol.id)?.co2Unloading || 0) * (positiveRate) / (unloadingTime / 3600) / (line?.numberOfCO2Incubator || 0);
        unloadingPositiveData[indexCO2] += co2Unloading;

        //unloading O2
        const o2Unloading = unloadingTime == 0 ? 0 : (line?.protocols.find((x) => x.id == protocol.id)?.co2Unloading || 0) * (positiveRate) / (unloadingTime / 3600) / (line?.numberOfO2Incubator || 0);
        unloadingPositiveData[indexO2] += o2Unloading;

        //loading CO2
        const co2Loading = loadingPlatesData[i] / (loadingTime / 3600);
        loadingData[i] += co2Loading;

        //loading O2
        const o2Loading = loadingPlatesData[i] / (loadingTime / 3600);
        loadingData[i] += o2Loading;

        //recording CO2
        const co2Recording = recordingTime == 0 ? 0 : (line?.protocols.find((x) => x.id == protocol.id)?.co2Recording || 0) / (recordingTime / 3600) / (line?.numberOfCO2Incubator || 0);
        recordingData[indexCO2] += co2Recording;

        //recording O2
        const o2Recording = recordingTime == 0 ? 0 : (line?.protocols.find((x) => x.id == protocol.id)?.o2Recording || 0) / (recordingTime / 3600) / (line?.numberOfO2Incubator || 0);
        recordingData[indexO2] += o2Recording;

        //unloading N CO2
        const co2UnloadingN = unloadingTime == 0 ? 0 : (line?.protocols.find((x) => x.id == protocol.id)?.co2Unloading || 0) * (negativeRate) / (unloadingTime / 3600) / (line?.numberOfCO2Incubator || 0);
        unloadingNegativeData[indexCO2] += co2UnloadingN;

        //unloading O2
        const o2UnloadingN = unloadingTime == 0 ? 0 : (line?.protocols.find((x) => x.id == protocol.id)?.o2Unloading || 0) * (negativeRate) / (unloadingTime / 3600) / (line?.numberOfO2Incubator || 0);
        unloadingNegativeData[indexO2] += o2UnloadingN;
      }

      // for(let i = 0; i < protocol.volumes.length; i++) {
      //   if(unloadingPositiveData[i] > 3600) {
      //     let next = i + 1;
      //     if(next > unloadingPositiveData.length - 1) {
      //       next = 0;
      //     }
      //     unloadingPositiveData[next] += unloadingPositiveData[i] - 3600;
      //     unloadingPositiveData[i] = 3600;
      //   }

      //   if(loadingPositiveData[i] > 3600) {
      //     let next = i + 1;
      //     if(next > loadingPositiveData.length - 1) {
      //       next = 0;
      //     }
      //     loadingPositiveData[next] += loadingPositiveData[i] - 3600;
      //     loadingPositiveData[i] = 3600;
      //   }
      // }
    });
    
    const series = [
      /*{
        name: 'Unloading positive plates',
        data: unloadingPositiveData.map((x) => Number((x / 3600 * 100).toFixed(2))),
        color: "#022A55"
      }, */
      {
        name: 'Loading',
        data: loadingData.map((x) => Number((x / 3600 * 100).toFixed(2))),
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
