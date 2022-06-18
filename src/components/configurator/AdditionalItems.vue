<template>
  <q-card class="q-pa-sm q-mt-sm">
    <q-item-label class="q-mb-sm" overline>Additional Items</q-item-label>
    <div class="row q-gutter-xs">
        <div class="col">
          <q-input
              dense
              filled
              type="number"
              v-model.number="configuratorAdditionalItems.flo"
              label="Flo"
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
              v-model.number="configuratorAdditionalItems.colibri"
              label="Colibrì"
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
              v-model.number="configuratorAdditionalItems.manualStation"
              label="Manual station"
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
              v-model.number="configuratorAdditionalItems.readingStation"
              label="Reading station"
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
              v-model.number="configuratorAdditionalItems.pickingStation"
              label="Picking station"
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
  name: 'AdditionalItems',
  setup() {
    const {
      configuratorAdditionalItems
    } = appStorage();

    return {
      configuratorAdditionalItems
    }
  }
});
</script>
