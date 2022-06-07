<template>
  <q-card class="q-pa-sm q-mt-sm">
    <q-item-label class="q-mb-sm" overline>Secondary protocols</q-item-label>
    <q-table :columns="tableColumns"  :rows="secondaryProtocols" row-key="id" dense hide-bottom :pagination="{ rowsPerPage: 0}">
      <template v-slot:body="props">
      <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="from" :props="props">
            {{ props.row.from }}
          </q-td>
          <q-td key="plates" :props="props">
            {{ props.row.plates }}
            <q-popup-edit v-model.number="props.row.plates" auto-save v-slot="scope">
              <q-input v-model.number="scope.value" dense autofocus @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
          <q-td key="platesO2" :props="props">
            {{ props.row.platesO2 }}
            <q-popup-edit v-model.number="props.row.platesO2" auto-save v-slot="scope">
              <q-input v-model.number="scope.value" dense autofocus @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
          <q-td key="recordingO2" :props="props">
            {{ props.row.recordingO2 }}
            <q-popup-edit v-model.number="props.row.recordingO2" auto-save v-slot="scope">
              <q-input v-model.number="scope.value" dense autofocus @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
          <q-td key="platesCO2" :props="props">
            {{ props.row.platesCO2 }}
            <q-popup-edit v-model.number="props.row.platesCO2" auto-save v-slot="scope">
              <q-input v-model.number="scope.value" dense autofocus @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
          <q-td key="recordingCO2" :props="props">
            {{ props.row.recordingCO2 }}
            <q-popup-edit v-model.number="props.row.recordingCO2" auto-save v-slot="scope">
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
import { SecondaryProtocol, TableColumn } from '@/types';

export default defineComponent({
  name: 'SecondaryProtocols',
  setup() {
    const tableColumns: TableColumn<SecondaryProtocol>[] = [
      { 
        name: "name",
        label: 'Name',
        align: 'left',
        field: (row: SecondaryProtocol) => row.name,
      },
      { 
        name: "from",
        label: 'From',
        align: 'left',
        field: (row: SecondaryProtocol) => row.from,
      },
      { 
        name: "plates",
        label: 'Plates',
        align: 'left',
        field: (row: SecondaryProtocol) =>row.plates,
      },
      { 
        name: "platesO2",
        label: 'Plates O2',
        align: 'left',
        field: (row: SecondaryProtocol) =>row.platesO2,
      },
      { 
        name: "recordingO2",
        label: 'Recording O2',
        align: 'left',
        field: (row: SecondaryProtocol) =>row.recordingO2,
      },
      { 
        name: "platesCO2",
        label: 'Plates CO2',
        align: 'left',
        field: (row: SecondaryProtocol) =>row.platesCO2,
      },
      { 
        name: "recordingCO2",
        label: 'Recording CO2',
        align: 'left',
        field: (row: SecondaryProtocol) =>row.recordingCO2,
      },
    ];

    const {
      secondaryProtocols
    } = appStorage();

    return {
      tableColumns,
      secondaryProtocols
    }
  }
});
</script>
