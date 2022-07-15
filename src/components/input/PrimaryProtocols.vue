<template>
  <q-card class="q-pa-sm q-mt-sm">
    <q-item-label class="q-mb-sm" overline>Primary protocols</q-item-label>
    <q-table :columns="tableColumns"  :rows="primaryProtocols" row-key="id" dense hide-bottom :pagination="{ rowsPerPage: 0}" separator="cell">
      <template v-slot:body="props">
      <q-tr :props="props">
          <q-td key="name" :props="props">
            <q-input square dark bg-color="input" 
                dense
                filled
                type="text"
                v-model="props.row.name"
                lazy-rules
                :rules="[
                val => val !== null && val !== '' || 'Please type a valid value'
                ]"
            />
          </q-td>
          <q-td key="wasp" :props="props">
            <q-checkbox style="margin-top: -18px" color="input"  dense v-model="props.row.hasWasp"/>
          </q-td>
          <q-td key="waspLab" :props="props">
            <q-checkbox style="margin-top: -18px" color="input"  dense v-model="props.row.hasWasplab"/>
          </q-td>
          <q-td key="pictureT0" :props="props">
            <q-checkbox style="margin-top: -18px" color="input"  dense v-model="props.row.pictureT0"/>
          </q-td>
          <q-td key="samplesPerDayAvg" :props="props">
            <q-input square dark bg-color="input" 
                dense
                filled 
                type="text"
                v-model.number="props.row.samplesPerDayAvg"
                lazy-rules
                :rules="[
                val => val !== null && val !== '' || 'Please type a valid value'
                ]"
            />
          </q-td>
          <q-td key="waspData_streakingPattern" :props="props">
            <q-select square filled dark bg-color="input" color="white" style="margin-top: -18px" 
              dense
              v-model="props.row.waspData.streakingPattern"
              :options="['1','2','3','4']"
            ></q-select>
          </q-td>
          <q-td key="waspData_platesPerSample" :props="props">
            <q-input square dark bg-color="input" 
                dense
                filled 
                type="number"
                v-model.number="props.row.waspData.platesPerSample"
                lazy-rules
                :rules="[
                val => val !== null && val !== '' || 'Please type a valid value'
                ]"
            >
              <template v-slot:prepend>
                <q-badge :color="(props.row.wasplabData.air.platesPerSample + props.row.wasplabData.co2.platesPerSample) != props.row.waspData.platesPerSample ? 'negative' : 'positive'">
                {{ (props.row.wasplabData.air.platesPerSample + props.row.wasplabData.co2.platesPerSample) }}
                </q-badge> /
              </template>
            </q-input>
            
          </q-td>
          <q-td key="waspData_slidesPerSample" :props="props">
            <q-input square dark bg-color="input" 
                dense
                filled 
                type="number"
                v-model.number="props.row.waspData.slidesPerSample"
                lazy-rules
                :rules="[
                val => val !== null && val !== '' || 'Please type a valid value'
                ]"
            />
          </q-td>
          <q-td key="waspData_brothsPerSample" :props="props">
            <q-input square dark bg-color="input" 
                dense
                filled 
                type="number"
                v-model.number="props.row.waspData.brothsPerSample"
                lazy-rules
                :rules="[
                val => val !== null && val !== '' || 'Please type a valid value'
                ]"
            />
          </q-td>
          <q-td key="wasplabData_air_platesPerSample" :props="props">
            <q-input square dark bg-color="input" 
                dense
                filled 
                type="number"
                v-model.number="props.row.wasplabData.air.platesPerSample"
                lazy-rules
                :rules="[
                val => val !== null && val !== '' || 'Please type a valid value'
                ]"
            />
          </q-td>
          <q-td key="wasplabData_air_readHours" :props="props">
            <q-input square dark bg-color="input" 
                dense
                filled 
                type="text"
                v-model="props.row.wasplabData.air.readHours"
                lazy-rules
                :rules="[
                val => val !== null && val !== '' || 'Please type a valid value'
                ]"
            />
          </q-td>
          <q-td key="wasplabData_co2_platesPerSample" :props="props">
            <q-input square dark bg-color="input" 
                dense
                filled 
                type="number"
                v-model.number="props.row.wasplabData.co2.platesPerSample"
                lazy-rules
                :rules="[
                val => val !== null && val !== '' || 'Please type a valid value'
                ]"
            />
          </q-td>
          <q-td key="wasplabData_co2_readHours" :props="props">
            <q-input square dark bg-color="input" 
                dense
                filled 
                type="text"
                v-model="props.row.wasplabData.co2.readHours"
                lazy-rules
                :rules="[
                val => val !== null && val !== '' || 'Please type a valid value'
                ]"
            />
          </q-td>
          <q-td key="actions" :props="props">
            <q-btn flat round color="red" icon="remove_circleoutline" size="xs" @click="removeProtocol(props.row.id)"/>
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <q-btn class="margin-top: -18px" label="Add" type="button" color="secondary" size="sm" @click="addProtocol"/>
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
        style: "width: 160px"
      },
      { 
        name: "wasp",
        label: 'WASP',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.hasWasp,
        style: "width: 10px"
      },
      { 
        name: "waspLab",
        label: 'WASPLAB',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.hasWasplab,
        style: "width: 10px"
      },
      { 
        name: "pictureT0",
        label: 'Picture t0',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.pictureT0,
        style: "width: 10px"
      },
      { 
        name: "samplesPerDayAvg",
        label: 'Samples per day',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.samplesPerDayAvg,
        style: "width: 10px"
      },
      { 
        name: "waspData_streakingPattern",
        label: 'WASP streaking pattern',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.waspData.streakingPattern,
        style: "width: 10px"
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
        style: "width: 10px"
      },
      {
        name: "waspData_brothsPerSample",
        label: 'WASP broths',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.waspData.brothsPerSample,
        style: "width: 10px"
      },
      {
        name: "wasplabData_air_platesPerSample",
        label: 'WASPLAB air plates',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.wasplabData.air.platesPerSample,
        style: "width: 10px"
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
        style: "width: 10px"
      },
      {
        name: "wasplabData_co2_readHours",
        label: 'WASPLAB CO2 read hours',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.wasplabData.co2.readHours,
      },
      { 
        name: "actions",
        label: '',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.id,
        style: "width: 10px"
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
        hasBrothsPercentage: false,
        astPercentage: 0,
        astIdPercentage: 0,
        idPercentage: 0,
        radianPercentage: 0,
        totalPercentage: 0,
        negativityRate: 0,
        hasPurityPlates: false
      });
    },
    removeProtocol(id: string) {
      const indexToRemove = this.primaryProtocols.findIndex((x) => x.id == id);
      if(indexToRemove > -1) {
        this.primaryProtocols.splice(indexToRemove, 1);
      }
    }
  }
});
</script>
