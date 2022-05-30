<template>
  <q-card class="q-pa-sm q-mt-sm">
    <q-item-label class="q-mb-sm" overline>Broths</q-item-label>
    <div class="row q-gutter-xs">
        <div class="col">
        <q-input
            dense
            filled
            type="number"
            v-model.number="data.timeInSeconds"
            label="Time"
            hint="seconds"
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
import { BrothSettings } from '@/types';

export default defineComponent({
  name: 'BrothSettings',
  emits: ["dataChanged"],
  data() {
    return {
      data: {
        timeInSeconds: 70
      } as BrothSettings
    }
  },
  watch: {
    timeInSeconds: {
      handler: function (newVal: BrothSettings) {
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
