<template>
  <q-card class="q-pa-sm q-mt-sm">
    <q-item-label class="q-mb-sm" overline>Flow</q-item-label>
    <div class="row q-gutter-xs">
        <div class="col">
        <q-input
            dense
            filled
            type="number"
            v-model.number="data.platesPerHour"
            label="Plates/hour"
            hint="plates/hour"
            lazy-rules
            :rules="[
            val => val !== null && val !== '' || 'Please type a valid numeric value'
            ]"
        />
        </div>
    </div>
  </q-card>
</template>

<style>
</style>

<script lang="ts">
import { defineComponent } from 'vue';

import { FlowSettings } from '@/types';

export default defineComponent({
  name: 'FlowSettings',
  emits: ["dataChanged"],
  data() {
    return {
      data: {
        platesPerHour: 550
      } as FlowSettings
    }
  },
  watch: {
    data: {
      handler: function (newVal: FlowSettings) {
        this.$emit("dataChanged", newVal);
      },
      deep: true
    }
  },
  mounted() {
    this.$emit("dataChanged", this.data);
  }
});
</script>
