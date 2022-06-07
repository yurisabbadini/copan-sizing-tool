<template>
<div class="row">
  <div class="col-4">
    <q-card class="q-pa-sm q-mt-sm">
      <q-item-label class="q-mb-sm" overline>Outputs</q-item-label>
      <q-table
        dense
        :rows="outputRows"
        :columns="outputColumns"
        row-key="label"
        :pagination="{ rowsPerPage: 0}"
        hide-bottom
      />
    </q-card>
  </div>
</div>
<div class="row">
  <div class="col-4">
    <q-card class="q-pa-sm q-mt-md">
      <q-item-label class="q-mb-sm" overline>WASPLAB 1</q-item-label>
      <q-table
        dense
        :rows="waspRows"
        :columns="waspColumns"
        row-key="label"
        :pagination="{ rowsPerPage: 0}"
        hide-bottom
      >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="label" :props="props">
            {{ props.row.label }}
          </q-td>
          <q-td key="slide" :props="props">
            <q-checkbox dense v-model="props.row.slide"/>
          </q-td>
          <q-td key="broth" :props="props">
            <q-checkbox dense v-model="props.row.broth"/>
          </q-td>
        </q-tr>
      </template>
      </q-table>
    </q-card>
    
    <DailyChart class="q-mt-md q-ml-md" :daily-data="dailyData" :show-title="false"/>
  </div>
  <div class="col-4">
    <q-card class="q-pa-sm q-mt-md q-ml-md">
      <q-item-label class="q-mb-sm" overline>&nbsp;</q-item-label>
      <q-table
        dense
        :rows="incubatorRows"
        :columns="incubatorColumns"
        row-key="label"
        :pagination="{ rowsPerPage: 0}"
        hide-bottom
      />
    </q-card>
    <DailyChart class="q-mt-md q-ml-md" :daily-data="dailyData" :show-title="false"/>
  </div>
</div>
</template>

<script lang="ts">
import { TableColumn } from '@/types';
import { defineComponent } from 'vue';

import DailyChart from '@/components/DailyChart.vue'
import appStorage from '@/store';

export default defineComponent({
  name: 'OutputView',
  components: {
    DailyChart
  },
  setup() {
    const {
      dailyData
    } = appStorage();

    type OutputRow = {
      label: string;
      value: number;
    };
    const outputColumns: TableColumn<OutputRow>[] = [
        {
            name: 'label',
            required: true,
            label: '',
            align: 'left',
            field: (row: OutputRow) => row.label,
            sortable: false
        },
        {
            name: 'value',
            required: true,
            label: '',
            align: 'left',
            field: (row: OutputRow) => row.value,
            sortable: false
        }
    ];

    const outputRows: OutputRow[] = [
      {
        label: "Number of WASPLAB",
        value: 2
      },
      {
        label: "Number of WASP-FLO",
        value: 1
      },
      {
        label: "Number of COLIBI'",
        value: 1
      },
      {
        label: "Manual streaking station",
        value: 2
      },
      {
        label: "Reading station",
        value: 3
      }
    ]

    type WaspRow = {
      label: string;
      slide: boolean;
      broth: boolean;
    }
    type IncubatorRow = {
      label: string;
      number: number;
      type: string;
    }

    const waspColumns: TableColumn<WaspRow>[] = [
        {
            name: 'label',
            required: true,
            label: 'WASP',
            align: 'left',
            field: (row: WaspRow) => row.label,
            sortable: false
        },
        {
            name: 'slide',
            required: true,
            label: 'Slide',
            align: 'left',
            field: (row: WaspRow) => row.slide,
            sortable: false
        },
        {
            name: 'broth',
            required: true,
            label: 'Broth',
            align: 'left',
            field: (row: WaspRow) => row.broth,
            sortable: false
        }
    ];
    const waspRows: WaspRow[] = [
      {
        label: "WASP 1",
        slide: true,
        broth: false
      },
      {
        label: "WASP 2",
        slide: false,
        broth: true
      },
    ];

    const incubatorColumns: TableColumn<IncubatorRow>[] = [
        {
            name: 'label',
            required: true,
            label: 'Incubator',
            align: 'left',
            field: (row: IncubatorRow) => row.label,
            sortable: false
        },
        {
            name: 'number',
            required: true,
            label: 'Number',
            align: 'left',
            field: (row: IncubatorRow) => row.number,
            sortable: false
        },
        {
            name: 'type',
            required: true,
            label: 'Type',
            align: 'left',
            field: (row: IncubatorRow) => row.type,
            sortable: false
        }
    ];

    const incubatorRows: IncubatorRow[] = [
      {
        label: "O2",
        number: 1,
        type: "single"
      },
      {
        label: "CO2",
        number: 1,
        type: "double"
      },
    ];

    return {
      outputColumns,
      outputRows,
      waspColumns,
      waspRows,
      incubatorColumns,
      incubatorRows,
      dailyData
    }
  }
});
</script>
