<template>
  <q-card class="q-pa-sm q-mt-sm"
      v-if="dailyData.length > 0">
    <q-item-label class="q-mb-sm" overline>Peak day</q-item-label>
    <q-table
      dense
      :rows="dailyData"
      :columns="tableColumns"
      row-key="dayOfWeek"
      :pagination="{ rowsPerPage: 0}"
      hide-bottom
    />
  </q-card>
</template>

<style>
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { DailyData, TableColumn } from '@/types';
import appStorage from '@/store';
import { getWeekDays } from '@/engine';

export default defineComponent({
  name: 'PeakDay',
  setup() {
    const {
      dailyData
    } = appStorage();


    const tableColumns: TableColumn<DailyData>[] = [
        {
            name: 'dayOfWeek',
            required: true,
            label: 'Day',
            align: 'left',
            field: (row: DailyData) => row.dayOfWeek,
            format: (val) => {
              const weekDays = getWeekDays("en-US");
              return weekDays[Number(val)];
            },
            classes: (row: DailyData) => {
              if(row.percentage == 100) {
                return "row-peak-day";
              }
              return "";
            },
            sortable: false
        },
        {
            name: 'totalSamples',
            required: true,
            label: 'Number of samples',
            align: 'left',
            field: (row: DailyData) => row.totalSamples,
            classes: (row: DailyData) => {
              if(row.percentage == 100) {
                return "row-peak-day";
              }
              return "";
            },
            sortable: false
        },
        {
            name: 'percentage',
            required: true,
            label: 'Total occupancy rate',
            align: 'left',
            field: (row: DailyData) => row.percentage,
            format: (val) => {
              return `${Number(val).toFixed(2)} %`;
            },
            classes: (row: DailyData) => {
              if(row.percentage == 100) {
                return "row-peak-day";
              }
              return "";
            },
            sortable: false
        }
    ]

    return {
      tableColumns,
      dailyData
    }
  }
});
</script>

<style>
.row-peak-day {
  font-weight: bold;
  background-color: gainsboro !important;;
}
</style>
