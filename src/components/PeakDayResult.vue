<template>
  <q-card class="q-pa-sm q-mt-sm">
    <q-item-label class="q-mb-sm" overline>Peak day</q-item-label>
    <template>
        <div class="q-pa-md">
            <q-table
            dense
            :rows="dailyData"
            :columns="tableColumns"
            row-key="dayOfWeek"
            />
        </div>
    </template>
  </q-card>
</template>

<style>
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { DailyData, TableColumn } from '@/types';

export default defineComponent({
  name: 'BrothSettings',
  props: ["dailyData"],
  setup() {
    const tableColumns: TableColumn<DailyData>[] = [
        {
            name: 'dayOfWeek',
            required: true,
            label: 'Day',
            align: 'left',
            field: (row: DailyData) => row.dayOfWeek,
            sortable: false
        },
        {
            name: 'totalSamples',
            required: true,
            label: 'Number of samples',
            align: 'left',
            field: (row: DailyData) => row.totalSamples,
            sortable: false
        },
        {
            name: 'percentage',
            required: true,
            label: 'Total occupancy rate',
            align: 'left',
            field: (row: DailyData) => row.percentage,
            sortable: false
        }
    ]

    return {
        tableColumns
    }
  }
});
</script>
