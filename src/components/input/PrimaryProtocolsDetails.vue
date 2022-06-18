<template>
  <q-card class="q-pa-sm q-mt-sm">
    <q-item-label class="q-mb-sm" overline>Protocols in-depth</q-item-label>
    <q-table :columns="tableColumns"  :rows="primaryProtocols" row-key="id" dense hide-bottom :pagination="{ rowsPerPage: 0}" separator="cell">
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
          <q-td key="idPercentage" :props="props">
            {{ props.row.idPercentage }}
            <q-popup-edit v-model.number="props.row.idPercentage" auto-save v-slot="scope">
              <q-input v-model.number="scope.value" dense autofocus @keyup.enter="scope.set" @update:model-value="setProtocolIDPercentage({ id: props.row.id, value: Number($event || 0) })" />
            </q-popup-edit>
          </q-td>
          <q-td key="astPercentage" :props="props">
            {{ props.row.astPercentage }}
            <q-popup-edit v-model.number="props.row.astPercentage" auto-save v-slot="scope">
              <q-input v-model.number="scope.value" dense autofocus @keyup.enter="scope.set" @update:model-value="setProtocolASTPercentage({ id: props.row.id, value: Number($event || 0) })" />
            </q-popup-edit>
          </q-td>
          <q-td key="astIdPercentage" :props="props">
            {{ props.row.astIdPercentage }}
            <q-popup-edit v-model.number="props.row.astIdPercentage" auto-save v-slot="scope">
              <q-input v-model.number="scope.value" dense autofocus @keyup.enter="scope.set" @update:model-value="setProtocolASTIDPercentage({ id: props.row.id, value: Number($event || 0) })" />
            </q-popup-edit>
          </q-td>
          <q-td key="radianPercentage" :props="props">
            {{ props.row.radianPercentage }}
            <q-popup-edit v-model.number="props.row.radianPercentage" auto-save v-slot="scope">
              <q-input v-model.number="scope.value" dense autofocus @keyup.enter="scope.set" @update:model-value="setProtocolRadianPercentage({ id: props.row.id, value: Number($event || 0) })" />
            </q-popup-edit>
          </q-td>
          <q-td key="totalPercentage" :props="props">
            <q-badge :color="props.row.totalPercentage != 100 ? 'negative' : 'positive'">
              {{ props.row.totalPercentage }}
            </q-badge>
          </q-td>
          <q-td key="hasPurityPlates" :props="props">
            <q-checkbox dense v-model="props.row.hasPurityPlates" @update:model-value="setProtocolPurityPlates({ id: props.row.id, value: $event })"/>
          </q-td>
          <q-td key="hasBrothsPercentage" :props="props">
            <q-checkbox dense v-model="props.row.hasBrothsPercentage" @update:model-value="setProtocolBroth({ id: props.row.id, value: $event })"/>
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
        name: "idPercentage",
        label: 'ID %',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.idPercentage,
      },
      { 
        name: "astPercentage",
        label: 'AST %',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.astPercentage,
      },
      { 
        name: "astIdPercentage",
        label: 'ID & AST %',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.astIdPercentage,
      },
      { 
        name: "radianPercentage",
        label: 'Radian %',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.radianPercentage,
      },
      { 
        name: "totalPercentage",
        label: 'Total %',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.totalPercentage,
      },
      { 
        name: "hasPurityPlates",
        label: 'Purity Plates',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.hasPurityPlates,
      },
      { 
        name: "hasBrothsPercentage",
        label: 'Broth',
        align: 'left',
        field: (row: PrimaryProtocol) =>row.hasBrothsPercentage,
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
  watch: {
    primaryProtocols: {
      handler: function (newValue: PrimaryProtocol[]) {
        newValue.forEach(protocol => {
          this.getProtocolTotalPercentage({ id: protocol.id });
          this.getSecondaryProtocolSample({ id: protocol.id });
        });
        
      },
      deep: true
    }
  },
  methods: {
    addSecondaryProtocol(id: string, from: "ID" | "AST" | "ID & AST" | "Purity plates" | "Broth" | "Radian") {
      const protocol = this.primaryProtocols.find((x) => x.id == id);
      if(protocol) {
        let factor = (100 - protocol.negativityRate) / 100;
        if(from != "Purity plates" && from != "Broth") {
          if(from == "ID") {
            factor = protocol.idPercentage / 100;
          } else if(from == "AST") {
            factor = protocol.astPercentage / 100;
          } else if(from == "ID & AST") {
            factor = protocol.astIdPercentage / 100;
          } else if(from == "Radian") {
            factor = protocol.radianPercentage / 100;
          }
        }
        this.secondaryProtocols.push({
          id: protocol.id,
          from: from,
          name: protocol.name,
          plates: 0,
          platesCO2: 0,
          platesO2: 0,
          recordingCO2: 0,
          recordingO2: 0,
          samples: Math.ceil(protocol.samplesPerDayAvg * factor)
        });
      }
    },
    removeSecondaryProtocol(id: string, from: "ID" | "AST" | "ID & AST" | "Purity plates" | "Broth" | "Radian") {
      const protocol = this.primaryProtocols.find((x) => x.id == id);
      if(protocol) {
        const index = this.secondaryProtocols.findIndex((x) => x.id == protocol.id && x.from == from);
        this.secondaryProtocols.splice(index, 1);
      }
    },
    getProtocolTotalPercentage(params: { id: string }) {
      const protocolIndex = this.primaryProtocols.findIndex((x) => x.id == params.id);
      if(protocolIndex >= 0) {
        this.primaryProtocols[protocolIndex].totalPercentage = 
          this.primaryProtocols[protocolIndex].idPercentage + this.primaryProtocols[protocolIndex].astIdPercentage + this.primaryProtocols[protocolIndex].astPercentage + this.primaryProtocols[protocolIndex].radianPercentage + this.primaryProtocols[protocolIndex].negativityRate;
      }
    },
    getSecondaryProtocolSample(params: { id: string }) {
      const protocolIndex = this.primaryProtocols.findIndex((x) => x.id == params.id);
      if(protocolIndex >= 0) {
        const secondaryProtocols = this.secondaryProtocols.filter((x) => x.id == params.id);
        secondaryProtocols.forEach(protocol => {
          let factor = (100 - this.primaryProtocols[protocolIndex].negativityRate) / 100;
          if(protocol.from != "Purity plates" && protocol.from != "Broth") {
            if(protocol.from == "ID") {
              factor = this.primaryProtocols[protocolIndex].idPercentage / 100;
            } else if(protocol.from == "AST") {
              factor = this.primaryProtocols[protocolIndex].astPercentage / 100;
            } else if(protocol.from == "ID & AST") {
              factor = this.primaryProtocols[protocolIndex].astIdPercentage / 100;
            } else if(protocol.from == "Radian") {
              factor = this.primaryProtocols[protocolIndex].radianPercentage / 100;
            }
          }
          protocol.samples = Math.ceil(this.primaryProtocols[protocolIndex].samplesPerDayAvg * factor)
        });
      }
    },
    setProtocolIDPercentage(params: { id: string, value: number }) {
      if(params.value > 0) {
        const secondaryProtocolIndex = this.secondaryProtocols.findIndex((x) => x.from == "ID" && x.id == params.id);
        if(secondaryProtocolIndex < 0) {
          this.addSecondaryProtocol(params.id, "ID");
        }
      } else {
        this.removeSecondaryProtocol(params.id, "ID");
      }
    },
    setProtocolASTPercentage(params: { id: string, value: number }) {
      if(params.value > 0) {
        const secondaryProtocolIndex = this.secondaryProtocols.findIndex((x) => x.from == "AST" && x.id == params.id);
        if(secondaryProtocolIndex < 0) {
          this.addSecondaryProtocol(params.id, "AST");
        }
      } else {
        this.removeSecondaryProtocol(params.id, "AST");
      }
    },
    setProtocolASTIDPercentage(params: { id: string, value: number }) {
      if(params.value > 0) {
        const secondaryProtocolIndex = this.secondaryProtocols.findIndex((x) => x.from == "ID & AST" && x.id == params.id);
        if(secondaryProtocolIndex < 0) {
          this.addSecondaryProtocol(params.id, "ID & AST");
        }
      } else {
        this.removeSecondaryProtocol(params.id, "ID & AST");
      }
    },
    setProtocolRadianPercentage(params: { id: string, value: number }) {
      if(params.value > 0) {
        const secondaryProtocolIndex = this.secondaryProtocols.findIndex((x) => x.from == "Radian" && x.id == params.id);
        if(secondaryProtocolIndex < 0) {
          this.addSecondaryProtocol(params.id, "Radian");
        }
      } else {
        this.removeSecondaryProtocol(params.id, "Radian");
      }
    },
    setProtocolPurityPlates(params: { id: string, value: boolean }) {
      if(params.value) {
        const secondaryProtocolIndex = this.secondaryProtocols.findIndex((x) => x.from == "Purity plates" && x.id == params.id);
        if(secondaryProtocolIndex < 0) {
          this.addSecondaryProtocol(params.id, "Purity plates");
        }
      } else {
        this.removeSecondaryProtocol(params.id, "Purity plates");
      }
    },
    setProtocolBroth(params: { id: string, value: boolean }) {
      if(params.value) {
        const secondaryProtocolIndex = this.secondaryProtocols.findIndex((x) => x.from == "Broth" && x.id == params.id);
        if(secondaryProtocolIndex < 0) {
          this.addSecondaryProtocol(params.id, "Broth");
        }
      } else {
        this.removeSecondaryProtocol(params.id, "Broth");
      }
    }
  }
});
</script>
