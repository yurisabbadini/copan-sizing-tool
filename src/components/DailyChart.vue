<template>
  <q-card class="q-pa-sm q-mt-sm"
      v-if="dailyData.length > 0">
    <q-item-label v-if="showTitle" class="q-mb-sm" overline>Daily volumes</q-item-label>
    <apexchart
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </q-card>
</template>

<style>
</style>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { getWeekDays } from '@/engine';
import { DailyData } from '@/types';

export default defineComponent({
  name: 'DailyChart',
  props: {
    dailyData: {
        type: Object as PropType<DailyData[]>,
        required: true
    },
    showTitle: {
        type: Object as PropType<boolean>,
        required: false
    }
  },
  setup() {
    const weekDays = getWeekDays("en-US");
    weekDays.push(weekDays[0]);
    weekDays.splice(0, 1);

    const chartOptions = {
        chart: {
          id: "vuechart-dailydata",
        },
        xaxis: {
          categories: weekDays
        },
        yaxis: {
          max: 100
        },
        colors: [
          function ({ value }: { value: string}) {
              if (value == "100.00") {
                return "#022A55";
              } else {
                return "#7794FB";
              }
            }
        ]
      };

    return {
      weekDays,
      chartOptions
    }
  },
  computed: {
    series() {
      const chartData = this.dailyData.map((x) => x.percentage.toFixed(2));
      const series = [
        {
          name: "series-dailydata",
          data: chartData,
        },
      ];
      return series;
    }
  },
});
</script>

<style>
.row-peak-day {
  font-weight: bold;
  background-color: #7794FB !important;;
}
</style>
