<template>
  <q-card class="q-pa-sm q-mt-sm">
    <q-item-label class="q-mb-sm" overline>Plates</q-item-label>
    <div class="row q-gutter-xs">
        <div class="col">
        <q-input
            dense
            filled
            type="number"
            v-model.number="streakingPatterns[0].timeInSeconds"
            label="Pattern 1 (radian)"
            hint="seconds"
            lazy-rules
            :rules="[
            val => val !== null && val !== '' || 'Please type a valid numeric value'
            ]"
        />
        </div>
        <div class="col">
        <q-input
            dense
            filled
            type="number"
            v-model.number="streakingPatterns[1].timeInSeconds"
            label="Pattern 2"
            hint="seconds"
            lazy-rules
            :rules="[
            val => val !== null && val !== '' || 'Please type a valid numeric value'
            ]"
        />
        </div>
        <div class="col">
        <q-input
            dense
            filled
            type="number"
            v-model.number="streakingPatterns[2].timeInSeconds"
            label="Pattern 3"
            hint="seconds"
            lazy-rules
            :rules="[
            val => val !== null && val !== '' || 'Please type a valid numeric value'
            ]"
        />
        </div>
        <div class="col">
        <q-input
            dense
            filled
            type="number"
            v-model.number="streakingPatterns[3].timeInSeconds"
            label="Pattern 4"
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

import { PlatesStreakingPattern } from '@/types';

export default defineComponent({
  name: 'PlatesSettings',
  emits: ["dataChanged"],
  data() {
    return {
      streakingPatterns: [
        {
          pattern: "1",
          timeInSeconds: 25
        },
        {
          pattern: "2",
          timeInSeconds: 35
        },
        {
          pattern: "3",
          timeInSeconds: 40
        },
        {
          pattern: "4",
          timeInSeconds: 45
        }
      ] as PlatesStreakingPattern[]
    }
  },
  watch: {
    streakingPatterns: {
      handler: function (newVal: PlatesStreakingPattern[]) {
        this.$emit("dataChanged", newVal);
      },
      deep: true
    }
  },
  mounted() {
    this.$emit("dataChanged", this.streakingPatterns);
  }
});
</script>
