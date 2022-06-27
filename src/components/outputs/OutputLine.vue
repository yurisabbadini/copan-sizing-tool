<template>
  <q-card class="q-pa-sm q-mt-sm">
    <q-item-label class="q-mb-sm" overline>{{ title }}</q-item-label>
    <q-table :columns="tableColumns" :rows="line" row-key="id" dense hide-bottom :pagination="{ rowsPerPage: 0}" separator="cell">
      <template v-slot:body="props">
      <q-tr :props="props">
          <q-td key="numberOfWasp" :props="props">
            {{ props.row.numberOfWasp }}
          </q-td>
          <q-td key="numberOfO2Incubator" :props="props">
            {{ props.row.numberOfO2Incubator }}
          </q-td>
          <q-td key="numberOfCO2Incubator" :props="props">
            {{ props.row.numberOfCO2Incubator }}
          </q-td>
          <q-td key="collaborativeStation" :props="props">
            <q-checkbox readonly dense v-model="props.row.collaborativeStation" disable />
          </q-td>
          <q-td key="radian" :props="props">
            <q-checkbox readonly dense v-model="props.row.radian" disable />
          </q-td>
          <q-td key="phenomatrix" :props="props">
            <q-checkbox readonly dense v-model="props.row.phenomatrix" disable />
          </q-td>
          <q-td key="waspOccupancyRate" :props="props">
            {{ props.row.waspOccupancyRate.toFixed(2) }} %
          </q-td>
          <q-td key="wasplabOccupancyRate" :props="props">
            {{ isFinite(props.row.wasplabOccupancyRate) ? props.row.wasplabOccupancyRate.toFixed(2) + " %" : "N/A" }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-card>
</template>

<style>
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import appStorage from '@/store';
import { LineConfig, TableColumn } from '@/types';

export default defineComponent({
  name: 'ConfigLines',
  props: ["title", "lineId"],
  setup(props) {
    const tableColumns: TableColumn<LineConfig>[] = [
      { 
        name: "numberOfWasp",
        label: 'WASP',
        align: 'left',
        field: (row: LineConfig) => row.numberOfWasp,
      },
      { 
        name: "numberOfO2Incubator",
        label: 'Air incubator',
        align: 'left',
        field: (row: LineConfig) => row.numberOfO2Incubator,
      },
      { 
        name: "numberOfCO2Incubator",
        label: 'CO2 incubator',
        align: 'left',
        field: (row: LineConfig) => row.numberOfCO2Incubator,
      },
      { 
        name: "collaborativeStation",
        label: 'Collaborative station',
        align: 'left',
        field: (row: LineConfig) => row.collaborativeStation,
      },
      { 
        name: "radian",
        label: 'Radian',
        align: 'left',
        field: (row: LineConfig) => row.radian,
      },
      { 
        name: "phenomatrix",
        label: 'Phenomatrix',
        align: 'left',
        field: (row: LineConfig) => row.phenomatrix,
      },
      { 
        name: "waspOccupancyRate",
        label: 'WASP Occupancy rate',
        align: 'left',
        field: (row: LineConfig) => row.waspOccupancyRate,
      },
      { 
        name: "wasplabOccupancyRate",
        label: 'WASPLAB Occupancy rate',
        align: 'left',
        field: (row: LineConfig) => row.wasplabOccupancyRate
      }
    ];

    const {
      lines
    } = appStorage();

    const line = lines.value.filter((x) => x.id == props.lineId)
    return {
      tableColumns,
      line
    }
  }
});
</script>
