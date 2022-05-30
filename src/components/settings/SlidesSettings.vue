<template>
  <q-card class="q-pa-sm q-mt-sm">
    <q-item-label class="q-mb-sm" overline>Slides</q-item-label>
    <div class="row q-gutter-xs">
        <div class="col">
        <q-input
            dense
            filled
            type="number"
            v-model.number="streakingPatterns[0].timeInSeconds"
            label="Slide only"
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
            label="Slide and other"
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

import { SlidesStreakingPattern } from '@/types';

export default defineComponent({
  name: 'SlidesSettings',
  emits: ["dataChanged"],
  data() {
    return {
      streakingPatterns: [
        {
          pattern: "slide_only",
          timeInSeconds: 60
        },
        {
          pattern: "slide_and_other",
          timeInSeconds: 30
        }
      ] as SlidesStreakingPattern[]
    }
  },
  watch: {
    streakingPatterns: {
      handler: function (newVal: SlidesStreakingPattern[]) {
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
