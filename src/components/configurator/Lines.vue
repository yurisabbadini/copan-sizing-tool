<template>
  <q-card class="q-pa-sm q-mt-sm">
    <q-item-label class="q-mb-sm" overline>Lines</q-item-label>
    <q-table :columns="tableColumns"  :rows="lines" row-key="id" dense hide-bottom :pagination="{ rowsPerPage: 0}" separator="cell">
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
          <q-td key="numberOfWasp" :props="props">
            <q-select square filled dark bg-color="input" color="white" style="margin-top: -18px" 
              dense
              v-model.number="props.row.numberOfWasp"
              :options="[1, 2]"
            ></q-select>
          </q-td>
          <q-td key="numberOfO2Incubator" :props="props">
            <q-select square filled dark bg-color="input" color="white"
              dense
              bottom-slots 
              v-model.number="props.row.numberOfO2Incubator"
              :options="getAvailableIncubators(props.row.id)"
            >
              <template v-slot:hint>
                <span style="color: #022a55 !important;">{{ props.row.O2IncubatorIsSingle ? "single" : "double "}}</span>
              </template>
            </q-select>
          </q-td>
          <q-td key="numberOfCO2Incubator" :props="props">
            <q-select square dark bg-color="input" 
              dense
              bottom-slots 
              v-model.number="props.row.numberOfCO2Incubator"
              :options="getAvailableIncubators(props.row.id)"
            >
              <template v-slot:hint>
                <span style="color: #022a55 !important;">{{ props.row.CO2IncubatorIsSingle ? "single" : "double "}}</span>
              </template>
            </q-select>
          </q-td>
          <q-td key="collaborativeStation" :props="props">
            <q-checkbox style="margin-top: -18px" color="input"  dense v-model="props.row.collaborativeStation"/>
          </q-td>
          <q-td key="radian" :props="props">
            <q-checkbox style="margin-top: -18px" color="input"  dense v-model="props.row.radian"/>
          </q-td>
          <q-td key="phenomatrix" :props="props">
            <q-checkbox style="margin-top: -18px" color="input"  dense v-model="props.row.phenomatrix"/>
          </q-td>
          <q-td key="waspOccupancyRate" :props="props">
            <div  style="margin-top: -18px">{{ props.row.waspOccupancyRate.toFixed(2) }} %</div>
          </q-td>
          <q-td key="wasplabOccupancyRate" :props="props">
            <div  style="margin-top: -18px">{{ isFinite(props.row.wasplabOccupancyRate) ? props.row.wasplabOccupancyRate.toFixed(2) + " %" : "N/A" }}</div>
          </q-td>
          <q-td key="actions" :props="props">
            <q-btn flat round color="red" icon="remove_circleoutline" size="xs" @click="removeLine(props.row.id)"/>
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <q-btn class="q-mt-md" label="Add" type="button" color="secondary" size="sm" @click="addLine"/>
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
        field: (row: LineConfig) => row.waspOccupancyRate,
      },
      { 
        name: "wasplabOccupancyRate",
        label: 'WASPLAB Occupancy rate', //TODO: tempo in % dei protocolli che sono su questa linea
        align: 'left',
        field: (row: LineConfig) => row.wasplabOccupancyRate
      },
      { 
        name: "actions",
        label: '',
        align: 'left',
        field: (row: LineConfig) => row.id,
      },
    ];

    const {
      lines,
      dailyData,
      primaryProtocols
    } = appStorage();

    const peakDay = dailyData.value.find((x) => x.isPeakDay);

    return {
      tableColumns,
      lines,
      peakDay,
      primaryProtocols
    }
  },
  methods: {
    addLine() {
      this.lines.push({
        id: uuid(),
        collaborativeStation: false,
        O2IncubatorIsSingle: true,
        CO2IncubatorIsSingle: true,
        name: "wasplab " + (this.lines.length + 1),
        numberOfCO2Incubator: 0,
        numberOfO2Incubator: 0,
        numberOfWasp: 0,
        phenomatrix: false,
        protocols: [],
        radian: false,
        waspOccupancyRate: 0,
        wasplabOccupancyRate: 0
      });
      const line = this.lines[this.lines.length - 1];
      line.protocols = [];
      this.primaryProtocols.forEach(element => {
        line?.protocols.push({
          id: element.id,
          name: element.name,
          samples: 0,
          wasp1Percentage: 0,
          wasp2Percentage: 0,
          co2Loading: 0,
          co2Recording: 0,
          co2Unloading: 0,
          o2Loading: 0,
          o2Recording: 0,
          o2Unloading: 0,
          wasp1Broths: 0,
          wasp1Plates: 0,
          wasp1Slides: 0,
          wasp2Broths: 0,
          wasp2Plates: 0,
          wasp2Slides: 0,
        });
      });
    },
    removeLine(id: string) {
      const indexToRemove = this.lines.findIndex((x) => x.id == id);
      if(indexToRemove > -1) {
        this.lines.splice(indexToRemove, 1);
      }
    },
    getAvailableIncubators(lineId: string) {
      const res: number[] = [0];
      const line = this.lines.find((x) => x.id == lineId);
      if(line) {
        
        for(let i = 1; i <= 3 - (line.numberOfO2Incubator + line.numberOfCO2Incubator); i++) {
          res.push(i);
        }
        return res;
      }
      return [1, 2, 3];
    }
  },
});
</script>
