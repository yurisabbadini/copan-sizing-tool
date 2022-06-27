<template>
    <q-card class="q-pa-sm q-mt-sm">
      <q-item-label class="q-mb-sm" overline>Total hardware</q-item-label>
      <div class="row q-gutter-sm">
        <div class="col">
            <q-table :columns="outputColumns"  :rows="outputRowsT1" row-key="id" dense flat bordered separator="cell" hide-bottom hide-header :pagination="{ rowsPerPage: 0}" />
        </div>
        <div class="col">
            <q-table :columns="outputColumns"  :rows="outputRowsT2" row-key="id" dense flat bordered separator="cell" hide-bottom hide-header :pagination="{ rowsPerPage: 0}" />
        </div>
        <div class="col">
            <q-table :columns="outputColumns"  :rows="outputRowsT3" row-key="id" dense flat bordered separator="cell" hide-bottom hide-header :pagination="{ rowsPerPage: 0}" />
        </div>
      </div>
    </q-card>
</template>

<script lang="ts">
import { TableColumn } from '@/types';
import appStorage from '@/store';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TotalHardware',
    setup() {
        const {
            lines,
            configuratorAdditionalItems
        } = appStorage();

        type OutputRow = {
            label: string;
            value: number;
        };
        
        const outputColumns: TableColumn<OutputRow>[] = [
            {
                name: 'label',
                required: true,
                label: '',
                align: 'left',
                field: (row: OutputRow) => row.label,
                sortable: false
            },
            {
                name: 'value',
                required: true,
                label: '',
                align: 'left',
                field: (row: OutputRow) => row.value,
                sortable: false
            }
        ];

        const outputRowsT1: OutputRow[] = [
            {
                label: "Number of WASPLAB",
                value: lines.value.length 
            },
            {
                label: "Number of WASP",
                value: lines.value.length > 0 ? lines.value.map((i) => i.numberOfWasp).reduce((a,b) => a + b) : 0
            },
            {
                label: "Number of air incubators",
                value: lines.value.length > 0 ? lines.value.map((i) => i.numberOfO2Incubator).reduce((a,b) => a + b) : 0
            },
            {
                label: "Number of CO2 incubators",
                value: lines.value.length > 0 ? lines.value.map((i) => i.numberOfCO2Incubator).reduce((a,b) => a + b) : 0
            }
        ];

        const outputRowsT2: OutputRow[] = [
            {
                label: "Number of FLO",
                value:  configuratorAdditionalItems.value.flo
            },
            {
                label: "Number of Radian",
                value: lines.value.length > 0 ? lines.value.filter((x) => x.radian == true).length : 0
            },
            {
                label: "Number of Phenomatrix",
                value: lines.value.length > 0 ? lines.value.filter((x) => x.phenomatrix == true).length : 0
            },
            {
                label: "Number of Colibrì",
                value: configuratorAdditionalItems.value.colibri
            },
        ];
        const outputRowsT3: OutputRow[] = [
            {
                label: "Number of Collaborative stations",
                value:  lines.value.length > 0 ? lines.value.filter((x) => x.collaborativeStation == true).length : 0
            },
            {
                label: "Number of Manual stations",
                value:  configuratorAdditionalItems.value.manualStation
            },
            {
                label: "Number of Reading stations",
                value:  configuratorAdditionalItems.value.readingStation
            },
            {
                label: "Number of Picking stations",
                value:  configuratorAdditionalItems.value.pickingStation
            },
        ];

        return {
            outputColumns,
            outputRowsT1,
            outputRowsT2,
            outputRowsT3
        }
    }
});
</script>
