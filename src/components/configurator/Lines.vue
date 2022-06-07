<template>
  <q-card class="q-pa-sm q-mt-sm">
    <q-item-label class="q-mb-sm" overline>Lines</q-item-label>
    <q-table :columns="tableColumns"  :rows="lines" row-key="id" dense>
      <template v-slot:body="props">
      <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
            <q-popup-edit v-model="props.row.name" auto-save v-slot="scope">
              <q-input v-model="scope.value" dense autofocus @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
          <q-td key="numberOfWasp" :props="props">
            <q-select
              dense
              v-model.number="props.row.numberOfWasp"
              :options="[1, 2]"
            ></q-select>
          </q-td>
          <q-td key="numberOfO2Incubator" :props="props">
            <q-select
              dense
              v-model.number="props.row.numberOfO2Incubator"
              :options="[1, 2, 4]"
            ></q-select>
          </q-td>
          <q-td key="numberOfCO2Incubator" :props="props">
            <q-select
              dense
              v-model.number="props.row.numberOfCO2Incubator"
              :options="[1, 2, 3]"
            ></q-select>
          </q-td>
          <q-td key="collaborativeStation" :props="props">
            <q-checkbox dense v-model="props.row.collaborativeStation"/>
          </q-td>
          <q-td key="radian" :props="props">
            <q-checkbox dense v-model="props.row.radian"/>
          </q-td>
          <q-td key="phenomatrix" :props="props">
            <q-checkbox dense v-model="props.row.phenomatrix"/>
          </q-td>
          <q-td key="actions" :props="props">
            <q-btn flat round color="red" icon="remove_circleoutline" size="xs" @click="removeLine(props.row.id)"/>
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <q-btn class="q-mt-md" label="Add" type="button" color="secondary" @click="addLine"/>
  </q-card>
</template>

<style>
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { v4 as uuid } from 'uuid';
import appStorage from '@/store';
import { LineConfig, TableColumn } from '@/types';

export default defineComponent({
  name: 'ConfigLines',
  setup() {
    const tableColumns: TableColumn<LineConfig>[] = [
      { 
        name: "name",
        label: 'Name',
        align: 'left',
        field: (row: LineConfig) => row.name,
      },
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
        label: 'WASP Occupancy rate', //TODO: tempo in % dei protocolli che sono su questa linea
        align: 'left',
        field: (row: LineConfig) => row.phenomatrix,
      },
      { 
        name: "wasplabOccupancyRate",
        label: 'WASPLAB Occupancy rate', //TODO: tempo in % dei protocolli che sono su questa linea
        align: 'left',
        field: (row: LineConfig) => row.phenomatrix,
      },
      { 
        name: "actions",
        label: '',
        align: 'left',
        field: (row: LineConfig) =>row.id,
      },
    ];

    const {
      lines
    } = appStorage();

    return {
      tableColumns,
      lines
    }
  },
  methods: {
    addLine() {
      this.lines.push({
        id: uuid(),
        collaborativeStation: false,
        name: "wasplab " + (this.lines.length + 1),
        numberOfCO2Incubator: 0,
        numberOfO2Incubator: 0,
        numberOfWasp: 1,
        phenomatrix: false,
        protocols: [],
        radian: false
      });
    },
    removeLine(id: string) {
      const indexToRemove = this.lines.findIndex((x) => x.id == id);
      if(indexToRemove > -1) {
        this.lines.splice(indexToRemove, 1);
      }
    }
  }
});
</script>
