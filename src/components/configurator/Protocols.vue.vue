<template>
  <q-card class="q-pa-sm q-mt-sm">
    <q-item-label class="q-mb-sm" overline>{{ title }}</q-item-label>
    <q-table :columns="line?.numberOfWasp == 1 ? tableColumns1 : tableColumns2"  :rows="line?.protocols" row-key="id" dense hide-bottom :pagination="{ rowsPerPage: 0}">
      <template v-slot:body="props">
      <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="samples" :props="props">
            {{ props.row.samples }} %
            <q-popup-edit v-model.number="props.row.samples" auto-save v-slot="scope">
              <q-input v-model.number="scope.value" dense autofocus @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
          <q-td key="wasp1Percentage" :props="props">
            {{ props.row.wasp1Percentage }} %
            <q-popup-edit v-model.number="props.row.wasp1Percentage" auto-save v-slot="scope">
              <q-input v-model.number="scope.value" dense autofocus @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
          <q-td key="wasp1Plates" :props="props">
            {{ props.row.wasp1Plates }}
          </q-td>
          <q-td key="wasp1Slides" :props="props">
            {{ props.row.wasp1Slides }}
          </q-td>
          <q-td key="wasp1Broths" :props="props">
            {{ props.row.wasp1Broths }}
          </q-td>
          <q-td key="wasp2Percentage" :props="props">
            {{ props.row.wasp2Percentage }} %
            <q-popup-edit v-model.number="props.row.wasp2Percentage" auto-save v-slot="scope">
              <q-input v-model.number="scope.value" dense autofocus @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
          <q-td key="wasp2Plates" :props="props">
            {{ props.row.wasp2Plates }}
          </q-td>
          <q-td key="wasp2Slides" :props="props">
            {{ props.row.wasp2Slides }}
          </q-td>
          <q-td key="wasp2Broths" :props="props">
            {{ props.row.wasp2Broths }}
          </q-td>
          <q-td key="o2Loading" :props="props">
            {{ props.row.o2Loading }}
          </q-td>
          <q-td key="co2Loading" :props="props">
            {{ props.row.co2Loading }}
          </q-td>
          <q-td key="o2Recording" :props="props">
            {{ props.row.o2Recording }}
          </q-td>
          <q-td key="co2Recording" :props="props">
            {{ props.row.co2Recording }}
          </q-td>
          <q-td key="co2Unloading" :props="props">
            {{ props.row.co2Unloading }}
          </q-td>
          <q-td key="co2Unloading" :props="props">
            {{ props.row.co2Unloading }}
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
      dailyData,
      weightedDayTimes
    } = appStorage();

    const peakDay = dailyData.value.find((x) => x.isPeakDay);
    const weightedPeakDayTimes = weightedDayTimes.value.filter((x) => x.dayOfWeek == peakDay?.dayOfWeek);
    console.log(weightedPeakDayTimes)
    const line = lines.value.find((x) => x.id == props.lineId);
    if(line) {
      line.protocols = [];
      primaryProtocols.value.forEach(element => {
        const wasp1Percentage = line.numberOfWasp == 1 ? 100 : 50;
        console.log(weightedPeakDayTimes.find((x) => x.type == "plates")?.samples)
        line.protocols.push({
          name: element.name,
          samples: Number((100 / lines.value.length).toFixed(2)),
          wasp1Percentage: wasp1Percentage,
          wasp2Percentage: line.numberOfWasp == 1 ? 0 : 50,
          co2Loading: 0,
          co2Recording: 0,
          co2Unloading: 0,
          o2Loading: 0,
          o2Recording: 0,
          o2Unloading: 0,
          wasp1Broths: 0,
          wasp1Plates: weightedPeakDayTimes.find((x) => x.type == "plates")?.samples || 0 * wasp1Percentage / 100,
          wasp1Slides: 0,
          wasp2Broths: 0,
          wasp2Plates: 0,
          wasp2Slides: 0
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
        name: "wasp1Plates",
        label: 'Plates (1)',
        align: 'left',
        field: (row: LineConfigProtocol) => row.wasp1Plates,
      },
      { 
        name: "wasp1Slides",
        label: 'Slides (1)',
        align: 'left',
        field: (row: LineConfigProtocol) => row.wasp1Slides,
      },
      { 
        name: "wasp1Broths",
        label: 'Broths (1)',
        align: 'left',
        field: (row: LineConfigProtocol) => row.wasp1Broths,
      },
      { 
        name: "o2Loading",
        label: 'Air loading',
        align: 'left',
        field: (row: LineConfigProtocol) => row.o2Loading,
      },
      { 
        name: "co2Loading",
        label: 'CO2 loading',
        align: 'left',
        field: (row: LineConfigProtocol) => row.co2Loading,
      },
      { 
        name: "o2Recording",
        label: 'Air recording',
        align: 'left',
        field: (row: LineConfigProtocol) => row.o2Recording,
      },
      { 
        name: "co2Recording",
        label: 'CO2 recording',
        align: 'left',
        field: (row: LineConfigProtocol) => row.co2Recording,
      },
      { 
        name: "o2Unloading",
        label: 'CO2 unloading',
        align: 'left',
        field: (row: LineConfigProtocol) => row.o2Unloading,
      },
      { 
        name: "co2Unloading",
        label: 'CO2 unloading',
        align: 'left',
        field: (row: LineConfigProtocol) => row.o2Unloading,
      }
    ];

    const tableColumns2: TableColumn<LineConfigProtocol>[] = [];
    for(const tc of tableColumns1) {
      tableColumns2.push(tc);
    }
    tableColumns2.splice(6, 0, { 
      name: "wasp2Percentage",
      label: 'WASP 2',
      align: 'left',
      field: (row: LineConfigProtocol) => row.wasp2Percentage,
    });
    tableColumns2.splice(7, 0, { 
      name: "wasp2Plates",
      label: 'Plates (2)',
      align: 'left',
      field: (row: LineConfigProtocol) => row.wasp2Plates,
    });
    tableColumns2.splice(8, 0, { 
      name: "wasp2Slides",
      label: 'Slides (2)',
      align: 'left',
      field: (row: LineConfigProtocol) => row.wasp2Slides,
    });
    tableColumns2.splice(9, 0, { 
      name: "wasp2Broths",
      label: 'Broths (2)',
      align: 'left',
      field: (row: LineConfigProtocol) => row.wasp2Broths,
    });
   
    return {
      tableColumns1,
      tableColumns2,
      lines,
      line,
      weightedPeakDayTimes
    }
  },
  watch: {
    lines: {
      handler: function () {
        this.line?.protocols.forEach((p) =>  {
          p.samples = Number((100 / this.lines.length).toFixed(2));
          p.wasp1Percentage = this.line?.numberOfWasp == 1 ? 100 : 50;
          p.wasp2Percentage = this.line?.numberOfWasp == 1 ? 0 : 50;
        })
      },
      deep: true
    }
  }
});
</script>
