<template>
  <q-card class="q-pa-sm q-mt-sm">
    <q-item-label class="q-mb-sm" overline>Flo</q-item-label>
    <div class="row q-gutter-xs">
        <div class="col">
        <q-input
            dense
            filled
            type="number"
            v-model.number="settings.flo.platesPerHour"
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

import appStorage from '@/store';

export default defineComponent({
  name: 'FloSettings',
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
