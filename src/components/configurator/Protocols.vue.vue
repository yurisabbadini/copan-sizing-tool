<template>
  <q-card class="q-pa-sm q-mt-sm">
    <q-item-label class="q-mb-sm" overline>{{ title }}</q-item-label>
    <q-table :columns="tableColumns"  :rows="line?.protocols" row-key="id" dense>
      <template v-slot:body="props">
      <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="wasp1Percentage" :props="props">
            {{ props.row.wasp1Percentage }}
            <q-popup-edit v-model.number="props.row.wasp1Percentage" auto-save v-slot="scope">
              <q-input v-model.number="scope.value" dense autofocus @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
          <q-td key="wasp2Percentage" :props="props">
            {{ props.row.wasp2Percentage }}
            <q-popup-edit v-model.number="props.row.wasp2Percentage" auto-save v-slot="scope">
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
//TODO: di default se c'è solo una WASP togliere la colonna WASP 2 e mettere il 100% dei samples su WASP 1 altrimenti lo dividi uniforme su tutte le WASP

import { defineComponent } from 'vue';
import appStorage from '@/store';
import { LineConfigProtocol, TableColumn } from '@/types';

export default defineComponent({
  name: 'LineProtocols',
  props: {
    title: String,
    lineId: String
  },
  setup(props) {
    const {
      lines,
      primaryProtocols,
      secondaryProtocols,
    } = appStorage();

    const line = lines.value.find((x) => x.id == props.lineId);
    if(line) {
      primaryProtocols.value.forEach(element => {
        line.protocols.push({
          co2Incubator1Percentage: 0,
          co2Incubator2Percentage: 0,
          co2Incubator3Percentage: 0,
          name: element.name,
          o2Incubator1Percentage: 0,
          o2Incubator2Percentage: 0,
          o2Incubator3Percentage: 0,
          wasp1Percentage: 0,
          wasp2Percentage: 0
        });
      });
      secondaryProtocols.value.forEach(element => {
        line.protocols.push({
          co2Incubator1Percentage: 0,
          co2Incubator2Percentage: 0,
          co2Incubator3Percentage: 0,
          name: element.name + " " + element.from,
          o2Incubator1Percentage: 0,
          o2Incubator2Percentage: 0,
          o2Incubator3Percentage: 0,
          wasp1Percentage: 0,
          wasp2Percentage: 0
        });
      });
    }
    
    const tableColumns: TableColumn<LineConfigProtocol>[] = [
      { 
        name: "name",
        label: 'Name',
        align: 'left',
        field: (row: LineConfigProtocol) => row.name,
      },
      { 
        name: "wasp1Percentage",
        label: 'WASP 1',
        align: 'left',
        field: (row: LineConfigProtocol) => row.wasp1Percentage,
      },
      { 
        name: "wasp2Percentage",
        label: 'WASP 2',
        align: 'left',
        field: (row: LineConfigProtocol) => row.wasp2Percentage,
      },
      { 
        name: "o2Incubator1Percentage",
        label: 'Air incubator 1',
        align: 'left',
        field: (row: LineConfigProtocol) => row.o2Incubator1Percentage,
      },
      { 
        name: "o2Incubator2Percentage",
        label: 'Air incubator 2',
        align: 'left',
        field: (row: LineConfigProtocol) => row.o2Incubator2Percentage,
      },
      { 
        name: "o2Incubator3Percentage",
        label: 'Air incubator 3',
        align: 'left',
        field: (row: LineConfigProtocol) => row.o2Incubator3Percentage,
      },
      { 
        name: "co2Incubator1Percentage",
        label: 'CO2 incubator 1',
        align: 'left',
        field: (row: LineConfigProtocol) => row.co2Incubator1Percentage,
      },
      { 
        name: "co2Incubator2Percentage",
        label: 'CO2 incubator 2',
        align: 'left',
        field: (row: LineConfigProtocol) => row.co2Incubator2Percentage,
      },
      { 
        name: "co2Incubator3Percentage",
        label: 'CO2 incubator 3',
        align: 'left',
        field: (row: LineConfigProtocol) => row.co2Incubator3Percentage,
      },
    ];
   
    return {
      tableColumns,
      line
    }
  },
  methods: {
    
  }
});
</script>
