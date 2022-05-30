<template>
  <q-card class="q-pa-sm q-mt-sm">
    <q-item-label class="q-mb-sm" overline>Lines</q-item-label>
    <q-table :columns="tableColumns"  :rows="primaryProtocols" row-key="name" dense>
      <template v-slot:body="props">
      <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
            <q-popup-edit v-model="props.row.name" auto-save v-slot="scope">
              <q-input v-model="scope.value" dense autofocus @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
          <q-td key="wasp" :props="props">
            <q-checkbox dense v-model="props.row.hasWasp"/>
          </q-td>
          <q-td key="waspLab" :props="props">
            <q-checkbox dense v-model="props.row.hasWasplab"/>
          </q-td>
          <q-td key="pictureT0" :props="props">
            <q-checkbox dense v-model="props.row.pictureT0"/>
          </q-td>
          <q-td key="samplesPerDayAvg" :props="props">
            {{ props.row.samplesPerDayAvg }}
            <q-popup-edit v-model.number="props.row.samplesPerDayAvg" auto-save v-slot="scope">
              <q-input v-model.number="scope.value" dense autofocus @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
          <q-td key="waspData_streakingPattern" :props="props">
            <q-select
              dense
              v-model="props.row.waspData.streakingPattern"
              :options="['1','2','3','4']"
            ></q-select>
          </q-td>
          <q-td key="waspData_platesPerSample" :props="props">
            {{ props.row.waspData.platesPerSample }}
            <q-popup-edit v-model.number="props.row.waspData.platesPerSample" auto-save v-slot="scope">
              <q-input v-model.number="scope.value" dense autofocus @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
          <q-td key="waspData_slidesPerSample" :props="props">
            {{ props.row.waspData.slidesPerSample }}
            <q-popup-edit v-model.number="props.row.waspData.slidesPerSample" auto-save v-slot="scope">
              <q-input v-model.number="scope.value" dense autofocus @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
          <q-td key="waspData_brothsPerSample" :props="props">
            {{ props.row.waspData.brothsPerSample }}
            <q-popup-edit v-model.number="props.row.waspData.brothsPerSample" auto-save v-slot="scope">
              <q-input v-model.number="scope.value" dense autofocus @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
          <q-td key="wasplabData_air_platesPerSample" :props="props">
            {{ props.row.wasplabData.air.platesPerSample }}
            <q-popup-edit v-model.number="props.row.wasplabData.air.platesPerSample" auto-save v-slot="scope">
              <q-input v-model.number="scope.value" dense autofocus @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
          <q-td key="wasplabData_air_readHours" :props="props">
            {{ props.row.wasplabData.air.readHours }}
            <q-popup-edit v-model="props.row.wasplabData.air.readHours" auto-save v-slot="scope">
              <q-input v-model="scope.value" dense autofocus @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
          <q-td key="wasplabData_co2_platesPerSample" :props="props">
            {{ props.row.wasplabData.co2.platesPerSample }}
            <q-popup-edit v-model.number="props.row.wasplabData.co2.platesPerSample" auto-save v-slot="scope">
              <q-input v-model.number="scope.value" dense autofocus @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
          <q-td key="wasplabData_co2_readHours" :props="props">
            {{ props.row.wasplabData.co2.readHours }}
            <q-popup-edit v-model="props.row.wasplabData.co2.readHours" auto-save v-slot="scope">
              <q-input v-model="scope.value" dense autofocus @keyup.enter="scope.set" />
            </q-popup-edit>
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
import { v4 as uuid } from 'uuid';
import appStorage from '@/store';
import { PrimaryProtocol, TableColumn } from '@/types';

export default defineComponent({
  name: 'PrimaryProtocols',
  setup() {
    const tableColumns: TableColumn<PrimaryProtocol>[] = [
      { 
        name: "name",
        label: 'Name',
        align: 'left',
        field: (row: PrimaryProtocol) => row.name,
      },
      { 
        name: "wasp",
        label: 'WASP',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.hasWasp,
      },
      { 
        name: "waspLab",
        label: 'WASPLAB',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.hasWasplab,
      },
      { 
        name: "pictureT0",
        label: 'Picture t0',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.pictureT0,
      },
      { 
        name: "samplesPerDayAvg",
        label: 'Samples per day',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.samplesPerDayAvg,
      },
      { 
        name: "waspData_streakingPattern",
        label: 'WASP streaking pattern',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.waspData.streakingPattern,
      },
      {
        name: "waspData_platesPerSample",
        label: 'WASP plates',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.waspData.platesPerSample,
      },
      {
        name: "waspData_slidesPerSample",
        label: 'WASP slides',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.waspData.slidesPerSample,
      },
      {
        name: "waspData_brothsPerSample",
        label: 'WASP broths',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.waspData.brothsPerSample,
      },
      {
        name: "wasplabData_air_platesPerSample",
        label: 'WASPLAB air plates',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.wasplabData.air.platesPerSample,
      },
      {
        name: "wasplabData_air_readHours",
        label: 'WASPLAB air read hours',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.wasplabData.air.readHours,
      },
      {
        name: "wasplabData_co2_platesPerSample",
        label: 'WASPLAB CO2 plates',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.wasplabData.co2.platesPerSample,
      },
      {
        name: "wasplabData_co2_readHours",
        label: 'WASPLAB CO2 read hours',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.wasplabData.co2.readHours,
      },
    ];

    const {
      primaryProtocols
    } = appStorage();

    return {
      tableColumns,
      primaryProtocols
    }
  },
  methods: {
    addProtocol() {
      const volumes: number[] = [];
      for(let i=0; i < 24; i++) {
        volumes.push(0);
      }
      this.primaryProtocols.push({
        id: uuid(),
        name: "protocol name",
        hasWasp: false,
        hasWasplab: false,
        pictureT0: false,
        samplesPerDayAvg: 0,
        waspData: {
          streakingPattern: "1",
          platesPerSample: 0,
          slidesPerSample: 0,
          brothsPerSample: 0
        },
        wasplabData: {
          air: {
            platesPerSample: 0,
            readHours: "0"
          },
          co2: {
            platesPerSample: 0,
            readHours: "0"
          }
        },
        volumes: volumes,
        brothsPercentage: 0,
        hasAST: false,
        hasASTID: false,
        hasID: false,
        negativityRate: 0,
        purityPlatesPercentage: 0,
        subculturePercentage: 0,
      });
    },
    removeProtocol(name: string) {
      const indexToRemove = this.primaryProtocols.findIndex((x) => x.name == name);
      if(indexToRemove > -1) {
        this.primaryProtocols.splice(indexToRemove, 1);
      }
    }
  }
});
</script>
