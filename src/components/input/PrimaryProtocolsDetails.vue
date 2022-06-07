<template>
  <q-card class="q-pa-sm q-mt-sm">
    <q-item-label class="q-mb-sm" overline>Protocols in-depth</q-item-label>
    <q-table :columns="tableColumns"  :rows="primaryProtocols" row-key="id" dense hide-bottom :pagination="{ rowsPerPage: 0}">
      <template v-slot:body="props">
      <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="negativityRate" :props="props">
            {{ props.row.negativityRate }}
            <q-popup-edit v-model.number="props.row.negativityRate" auto-save v-slot="scope">
              <q-input v-model.number="scope.value" dense autofocus @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
          <q-td key="hasID" :props="props">
            <q-checkbox dense v-model="props.row.hasID" @update:model-value="setProtocolID({ id: props.row.id, value: $event })"/>
          </q-td>
          <q-td key="hasAST" :props="props">
            <q-checkbox dense v-model="props.row.hasAST" @update:model-value="setProtocolAST({ id: props.row.id, value: $event })"/>
          </q-td>
          <q-td key="hasASTID" :props="props">
            <q-checkbox dense v-model="props.row.hasASTID" @update:model-value="setProtocolASTID({ id: props.row.id, value: $event })"/>
          </q-td>
          <q-td key="purityPlatesPercentage" :props="props">
            {{ props.row.purityPlatesPercentage }}
            <q-popup-edit v-model.number="props.row.purityPlatesPercentage" auto-save v-slot="scope">
              <q-input v-model.number="scope.value" dense autofocus @keyup.enter="scope.set" @update:model-value="setProtocolPurityPlates({ id: props.row.id, value: Number($event || 0) })" />
            </q-popup-edit>
          </q-td>
          <q-td key="subculturePercentage" :props="props">
            {{ props.row.subculturePercentage }}
            <q-popup-edit v-model.number="props.row.subculturePercentage" auto-save v-slot="scope">
              <q-input v-model.number="scope.value" dense autofocus @keyup.enter="scope.set" @update:model-value="setProtocolSubculture({ id: props.row.id, value: Number($event || 0) })" />
            </q-popup-edit>
          </q-td>
          <q-td key="brothsPercentage" :props="props">
            {{ props.row.brothsPercentage }}
            <q-popup-edit v-model.number="props.row.brothsPercentage" auto-save v-slot="scope">
              <q-input v-model.number="scope.value" dense autofocus @keyup.enter="scope.set" @update:model-value="setProtocolBroths({ id: props.row.id, value: Number($event || 0) })" />
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
      primaryProtocols,
      secondaryProtocols
    } = appStorage();

    return {
      tableColumns,
      primaryProtocols,
      secondaryProtocols
    }
  },
  methods: {
    addSecondaryProtocol(id: string, from: "ID" | "AST" | "ID & AST" | "Purity plates" | "Subculture" | "Broths") {
      const protocol = this.primaryProtocols.find((x) => x.id == id);
      if(protocol) {
        this.secondaryProtocols.push({
          id: protocol.id,
          from: from,
          name: protocol.name,
          plates: 0,
          platesCO2: 0,
          platesO2: 0,
          recordingCO2: 0,
          recordingO2: 0
        });
      }
    },
    removeSecondaryProtocol(id: string, from: "ID" | "AST" | "ID & AST" | "Purity plates" | "Subculture" | "Broths") {
      const protocol = this.primaryProtocols.find((x) => x.id == id);
      if(protocol) {
        const index = this.secondaryProtocols.findIndex((x) => x.id == protocol.id && x.from == from);
        this.secondaryProtocols.splice(index, 1);
      }
    },
    setProtocolID(params: { id: string, value: boolean }) {
      if(params.value == true) {
        this.addSecondaryProtocol(params.id, "ID");
      } else {
        this.removeSecondaryProtocol(params.id, "ID");
      }
    },
    setProtocolAST(params: { id: string, value: boolean }) {
      if(params.value == true) {
        this.addSecondaryProtocol(params.id, "AST");
      } else {
        this.removeSecondaryProtocol(params.id, "AST");
      }
    },
    setProtocolASTID(params: { id: string, value: boolean }) {
      if(params.value == true) {
        this.addSecondaryProtocol(params.id, "ID & AST");
      } else {
        this.removeSecondaryProtocol(params.id, "ID & AST");
      }
    },
    setProtocolPurityPlates(params: { id: string, value: number }) {
      if(params.value > 0) {
        this.addSecondaryProtocol(params.id, "Purity plates");
      } else {
        this.removeSecondaryProtocol(params.id, "Purity plates");
      }
    },
    setProtocolSubculture(params: { id: string, value: number }) {
      if(params.value > 0) {
        this.addSecondaryProtocol(params.id, "Subculture");
      } else {
        this.removeSecondaryProtocol(params.id, "Subculture");
      }
    },
    setProtocolBroths(params: { id: string, value: number }) {
      if(params.value > 0) {
        this.addSecondaryProtocol(params.id, "Broths");
      } else {
        this.removeSecondaryProtocol(params.id, "Broths");
      }
    },
  }
});
</script>
