<template>
  <q-card class="q-pa-sm q-mt-sm">
    <q-item-label class="q-mb-sm" overline>{{ title }}</q-item-label>
    <q-table :columns="line?.numberOfWasp == 1 ? tableColumns1 : tableColumns2"  :rows="line?.protocols" row-key="id" dense>
      <template v-slot:body="props">
      <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="samples" :props="props">
            {{ props.row.samples }}
            <q-popup-edit v-model.number="props.row.samples" auto-save v-slot="scope">
              <q-input v-model.number="scope.value" dense autofocus @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
          <q-td key="wasp1Percentage" :props="props">
            {{ props.row.wasp1Percentage }}
          </q-td>
          <q-td key="wasp2Percentage" :props="props">
            {{ props.row.wasp2Percentage }}
          </q-td>
          <q-td key="o2IncubatorPercentage" :props="props">
            {{ props.row.wasp2Percentage }}
          </q-td>
          <q-td key="co2IncubatorPercentage" :props="props">
            {{ props.row.wasp2Percentage }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-card>
</template>

<style>
</style>

<script lang="ts">
//TODO: di default se c'è solo una WASP togliere la colonna WASP 2 e mettere il 100% dei samples su WASP 1 altrimenti lo dividi uniforme su tutte le WASP che si può cambiare

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
          co2IncubatorPercentage: 0,
          name: element.name,
          o2IncubatorPercentage: 0,
          wasp1Percentage: 0,
          wasp2Percentage: 0,
          samples: 0,
        });
      });
      secondaryProtocols.value.forEach(element => {
        line.protocols.push({
          co2IncubatorPercentage: 0,
          name: element.name + " " + element.from,
          o2IncubatorPercentage: 0,
          wasp1Percentage: 0,
          wasp2Percentage: 0,
          samples: 0,
        });
      });
    }
    
    const tableColumns1: TableColumn<LineConfigProtocol>[] = [
      { 
        name: "name",
        label: 'Name',
        align: 'left',
        field: (row: LineConfigProtocol) => row.name,
      },
      { 
        name: "samples",
        label: 'Samples',
        align: 'left',
        field: (row: LineConfigProtocol) => row.samples,
      },
      { 
        name: "wasp1Percentage",
        label: 'WASP 1',
        align: 'left',
        field: (row: LineConfigProtocol) => row.wasp1Percentage,
      },
      { 
        name: "o2Loading",
        label: 'Plates',
        align: 'left',
        field: (row: LineConfigProtocol) => row.o2IncubatorPercentage,
      },
      { 
        name: "o2Loading",
        label: 'Slides',
        align: 'left',
        field: (row: LineConfigProtocol) => row.o2IncubatorPercentage,
      },
      { 
        name: "o2Loading",
        label: 'Broths',
        align: 'left',
        field: (row: LineConfigProtocol) => row.o2IncubatorPercentage,
      },
      { 
        name: "o2Loading",
        label: 'Air loading',
        align: 'left',
        field: (row: LineConfigProtocol) => row.o2IncubatorPercentage,
      },
      { 
        name: "co2Loading",
        label: 'CO2 loading',
        align: 'left',
        field: (row: LineConfigProtocol) => row.co2IncubatorPercentage,
      },
      { 
        name: "o2Recording",
        label: 'Air recording',
        align: 'left',
        field: (row: LineConfigProtocol) => row.o2IncubatorPercentage,
      },
      { 
        name: "co2Recording",
        label: 'CO2 recording',
        align: 'left',
        field: (row: LineConfigProtocol) => row.co2IncubatorPercentage,
      },
      { 
        name: "o2Unloading",
        label: 'CO2 unloading',
        align: 'left',
        field: (row: LineConfigProtocol) => row.co2IncubatorPercentage,
      },
      { 
        name: "co2Unloading",
        label: 'CO2 unloading',
        align: 'left',
        field: (row: LineConfigProtocol) => row.co2IncubatorPercentage,
      }
    ];

    const tableColumns2: TableColumn<LineConfigProtocol>[] = [
      { 
        name: "name",
        label: 'Name',
        align: 'left',
        field: (row: LineConfigProtocol) => row.name,
      },
      { 
        name: "samples",
        label: 'Samples',
        align: 'left',
        field: (row: LineConfigProtocol) => row.samples,
      },
      { 
        name: "wasp1Percentage",
        label: 'WASP 1',
        align: 'left',
        field: (row: LineConfigProtocol) => row.wasp1Percentage,
      },
      { 
        name: "o2Loading",
        label: 'Plates',
        align: 'left',
        field: (row: LineConfigProtocol) => row.o2IncubatorPercentage,
      },
      { 
        name: "o2Loading",
        label: 'Slides',
        align: 'left',
        field: (row: LineConfigProtocol) => row.o2IncubatorPercentage,
      },
      { 
        name: "o2Loading",
        label: 'Broths',
        align: 'left',
        field: (row: LineConfigProtocol) => row.o2IncubatorPercentage,
      },
      { 
        name: "wasp1Percentage",
        label: 'WASP 2',
        align: 'left',
        field: (row: LineConfigProtocol) => row.wasp1Percentage,
      },
      { 
        name: "o2Loading",
        label: 'Plates',
        align: 'left',
        field: (row: LineConfigProtocol) => row.o2IncubatorPercentage,
      },
      { 
        name: "o2Loading",
        label: 'Slides',
        align: 'left',
        field: (row: LineConfigProtocol) => row.o2IncubatorPercentage,
      },
      { 
        name: "o2Loading",
        label: 'Broths',
        align: 'left',
        field: (row: LineConfigProtocol) => row.o2IncubatorPercentage,
      },
      { 
        name: "o2Loading",
        label: 'Air loading',
        align: 'left',
        field: (row: LineConfigProtocol) => row.o2IncubatorPercentage,
      },
      { 
        name: "co2Loading",
        label: 'CO2 loading',
        align: 'left',
        field: (row: LineConfigProtocol) => row.co2IncubatorPercentage,
      },
      { 
        name: "o2Recording",
        label: 'Air recording',
        align: 'left',
        field: (row: LineConfigProtocol) => row.o2IncubatorPercentage,
      },
      { 
        name: "co2Recording",
        label: 'CO2 recording',
        align: 'left',
        field: (row: LineConfigProtocol) => row.co2IncubatorPercentage,
      },
      { 
        name: "o2Unloading",
        label: 'CO2 unloading',
        align: 'left',
        field: (row: LineConfigProtocol) => row.co2IncubatorPercentage,
      },
      { 
        name: "co2Unloading",
        label: 'CO2 unloading',
        align: 'left',
        field: (row: LineConfigProtocol) => row.co2IncubatorPercentage,
      }
    ];
   
    return {
      tableColumns1,
      tableColumns2,
      line
    }
  },
  methods: {
    
  }
});
</script>
