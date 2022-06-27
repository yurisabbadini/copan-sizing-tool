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
  name: 'WaspChart',
  props: {
    lineId: {
        type: Object as PropType<string>,
        required: true
    },
    wasp: {
        type: Object as PropType<number>,
        required: true
    }
  },
  setup(props) {
    const {
      primaryProtocols,
      lines,
      settings
    } = appStorage();

    const line = lines.value.find((x) => x.id == props.lineId)

    const chartData: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    primaryProtocols.value.forEach(protocol => {
      for(let i = 0; i < protocol.volumes.length; i++) {
        let plates = line?.protocols.find((x) => x.id == protocol.id)?.wasp1Plates || 0;
        if(props.wasp == 2) {
          plates = line?.protocols.find((x) => x.id == protocol.id)?.wasp2Plates || 0;
        }
        const platesTime = plates * (protocol.volumes[i] || 0) / 100 * (settings.value.plates.streakingPatterns.find((x) => x.pattern == protocol.waspData.streakingPattern)?.timeInSeconds || 0);

        let slides = line?.protocols.find((x) => x.id == protocol.id)?.wasp1Slides || 0;
        if(props.wasp == 2) {
          plates = line?.protocols.find((x) => x.id == protocol.id)?.wasp2Slides || 0;
        }
        let slideTimeSettings = settings.value.slides.streakingPatterns.find((x) => x.pattern == "slide_and_other")?.timeInSeconds || 0;
        if (protocol.waspData.platesPerSample == 0) {
            slideTimeSettings = settings.value.slides.streakingPatterns.find((x) => x.pattern == "slide_only")?.timeInSeconds || 0;
        }
        const slidesTime = slides * (protocol.volumes[i] || 0) / 100 * slideTimeSettings;

        let broths = line?.protocols.find((x) => x.id == protocol.id)?.wasp1Broths || 0;
        if(props.wasp == 2) {
          plates = line?.protocols.find((x) => x.id == protocol.id)?.wasp2Broths || 0;
        }
        const brothsTime = broths * (protocol.volumes[i] || 0) / 100 * settings.value.broths.timeInSeconds;

        chartData[i] += platesTime + slidesTime + brothsTime;
        if(chartData[i] > 3600) {
          let next = i+1;
          if(next > chartData.length - 1) {
            next = 0;
          }
          chartData[next] += chartData[i] - 3600;
          chartData[i] = 3600;
        }
      }
    });

    const series = [
        {
          name: "occupancy rate",
          data: chartData.map((x) => Number((x / 3600 * 100).toFixed(2))),
        },
      ];

    const chartCategories: string[] = [];
    for(let i=1; i < 25; i++) {
      chartCategories.push(`${(i-1).toString().padStart(2, '0')}-${(i).toString().padStart(2, '0')}`)
    }

    const chartOptions = {
        chart: {
          id: "vuechart-dailydata"
        },
        xaxis: {
          categories: chartCategories
        },
        yaxis: {
          max: 100
        },
        colors: [
          function () {
              return "#022A55";
            }
        ]
      };

    return {
      chartOptions,
      series
    }
  },
});
</script>
