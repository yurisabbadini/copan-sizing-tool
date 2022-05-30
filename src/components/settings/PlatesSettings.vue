<template>
  <q-card class="q-pa-sm q-mt-sm">
    <q-item-label class="q-mb-sm" overline>Plates</q-item-label>
    <div class="row q-gutter-xs">
        <div class="col">
        <q-input
            dense
            filled
            type="number"
            v-model.number="settings.plates.streakingPatterns[0].timeInSeconds"
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
            v-model.number="settings.plates.streakingPatterns[1].timeInSeconds"
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
            v-model.number="settings.plates.streakingPatterns[2].timeInSeconds"
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
            v-model.number="settings.plates.streakingPatterns[3].timeInSeconds"
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

import appStorage from '@/store';

export default defineComponent({
  name: 'PlatesSettings',
  setup() {
    const {
      settings
    } = appStorage();

    return {
      settings
    }
  }
});
</script>
