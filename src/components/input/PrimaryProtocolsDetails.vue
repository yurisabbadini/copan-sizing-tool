<template>
  <q-card class="q-pa-sm q-mt-sm">
    <q-item-label class="q-mb-sm" overline>Protocols in-depth</q-item-label>
    <q-table :columns="tableColumns"  :rows="primaryProtocols" row-key="name" dense>
      <template v-slot:body="props">
      <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
            <q-popup-edit v-model="props.row.name" auto-save v-slot="scope">
              <q-input v-model="scope.value" dense autofocus @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
          <q-td key="negativityRate" :props="props">
            {{ props.row.negativityRate }}
            <q-popup-edit v-model.number="props.row.negativityRate" auto-save v-slot="scope">
              <q-input v-model.number="scope.value" dense autofocus @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
          <q-td key="hasID" :props="props">
            <q-checkbox dense v-model="props.row.hasID"/>
          </q-td>
          <q-td key="hasAST" :props="props">
            <q-checkbox dense v-model="props.row.hasAST"/>
          </q-td>
          <q-td key="hasASTID" :props="props">
            <q-checkbox dense v-model="props.row.hasASTID"/>
          </q-td>
          <q-td key="purityPlatesPercentage" :props="props">
            {{ props.row.purityPlatesPercentage }}
            <q-popup-edit v-model.number="props.row.purityPlatesPercentage" auto-save v-slot="scope">
              <q-input v-model.number="scope.value" dense autofocus @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
          <q-td key="subculturePercentage" :props="props">
            {{ props.row.subculturePercentage }}
            <q-popup-edit v-model.number="props.row.subculturePercentage" auto-save v-slot="scope">
              <q-input v-model.number="scope.value" dense autofocus @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
          <q-td key="brothsPercentage" :props="props">
            {{ props.row.brothsPercentage }}
            <q-popup-edit v-model.number="props.row.brothsPercentage" auto-save v-slot="scope">
              <q-input v-model.number="scope.value" dense autofocus @keyup.enter="scope.set" />
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
import appStorage from '@/store';
import { PrimaryProtocol, TableColumn } from '@/types';

export default defineComponent({
  name: 'PrimaryProtocolsDetails',
  setup() {
    const tableColumns: TableColumn<PrimaryProtocol>[] = [
      { 
        name: "name",
        label: 'Name',
        align: 'left',
        field: (row: PrimaryProtocol) => row.name,
      },
      { 
        name: "negativityRate",
        label: 'Negativity rate',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.negativityRate,
      },
      { 
        name: "hasID",
        label: 'ID',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.hasID,
      },
      { 
        name: "hasAST",
        label: 'AST',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.hasAST,
      },
      { 
        name: "hasASTID",
        label: 'ID & AST',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.hasASTID,
      },
      { 
        name: "purityPlatesPercentage",
        label: 'Purity Plates %',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.purityPlatesPercentage,
      },
      { 
        name: "subculturePercentage",
        label: 'Subculture %',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.subculturePercentage,
      },
      { 
        name: "brothsPercentage",
        label: 'Broths %',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.brothsPercentage,
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
