<template>
  <q-card class="q-pa-sm q-mt-sm">
    <q-item-label class="q-mb-sm" overline>Daily volumes</q-item-label>
    <q-table
    dense
    :rows="primaryProtocols"
    :columns="tableColumns"
    row-key="id"
    hide-bottom :pagination="{ rowsPerPage: 0}" separator="cell"
    >
    <template v-slot:body="props">
        <q-tr :props="props">
        <q-td key="name" :props="props">
            {{ props.row.name }}
            <q-badge :color="totalVolumes.find((x) => x.id == props.row.id)?.totalVolume != 100 ? 'negative' : 'positive'">
              {{ totalVolumes.find((x) => x.id == props.row.id)?.totalVolume || 0 }}
            </q-badge>
        </q-td>
        <q-td v-for="(column, index) in tableColumns.filter((x) => x.name != 'name')" :key="column.name" :props="props">
            {{ props.row.volumes[index] }}
            <q-popup-edit v-model="props.row.volumes[index]" auto-save v-slot="scope">
            <q-input v-model="scope.value" dense autofocus @keyup.enter="scope.set" :label="props.row.name + ' - ' + column.label" />
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
  name: 'DailyVolumes',
  props: ["data"],
  setup() {
    const tableColumns: TableColumn<PrimaryProtocol>[] = [
        { 
          name: "name",
          label: 'Name',
          align: 'left',
          field: (row: PrimaryProtocol) => row.name,
        },
    ];
    for(let i=1; i < 25; i++) {
      tableColumns.push({
        name:  `${i-1}${i}`,
        label: `${(i-1).toString().padStart(2, '0')}-${(i).toString().padStart(2, '0')}`,
        align: 'left',
        field: (row: PrimaryProtocol) => row.volumes[i-1].toString(),
      })
    }

    const {
      primaryProtocols
    } = appStorage();

    return {
      tableColumns,
      primaryProtocols
    }
  },
  computed: {
    totalVolumes() {
      type TotalVolumes = {
        id: string;
        totalVolume: number;
      }
      const res: TotalVolumes[] = [];
      this.primaryProtocols.forEach(protocol => {
        res.push({
          id: protocol.id,
          totalVolume: protocol.volumes.length > 0 ? protocol.volumes.reduce((a: number,b: number) => Number(a)+Number(b)) : 0
        })
      });
      return res;
    }
  },
});
</script>
