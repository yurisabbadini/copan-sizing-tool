<template>
  <q-card class="q-pa-sm q-mt-sm">
    <q-item-label class="q-mb-sm" overline>Incubator</q-item-label>
    <div class="row q-gutter-xs">
        <div class="col">
          <q-input square dark bg-color="input" 
              dense
              filled
              type="number"
              v-model.number="settings.incubator.loadingPlatesPerHour"
              label="Loading"
              hint="plates/hour"
              lazy-rules
              :rules="[
              val => val !== null && val !== '' || 'Please type a valid numeric value'
              ]"
          />
        </div>
        <div class="col">
          <q-input square dark bg-color="input" 
              dense
              filled
              type="number"
              v-model.number="settings.incubator.recordingPlatesPerHour"
              label="Recording"
              hint="plates/hour"
              lazy-rules
              :rules="[
              val => val !== null && val !== '' || 'Please type a valid numeric value'
              ]"
          />
        </div>
        <div class="col">
          <q-input square dark bg-color="input" 
              dense
              filled
              type="number"
              v-model.number="settings.incubator.unloadingSinglePlatesPerHour"
              label="Unloading (1)"
              hint="plates/hour"
              lazy-rules
              :rules="[
              val => val !== null && val !== '' || 'Please type a valid numeric value'
              ]"
          />
        </div>
        <div class="col">
          <q-input square dark bg-color="input" 
              dense
              filled
              type="number"
              v-model.number="settings.incubator.unloadingMultiplePlatesPerHour"
              label="Unloading (1+)"
              hint="plates/hour"
              lazy-rules
              :rules="[
              val => val !== null && val !== '' || 'Please type a valid numeric value'
              ]"
          />
        </div>
        
        <div class="col">
          <q-input square dark bg-color="input" 
              dense
              filled
              type="number"
              v-model.number="settings.incubator.incubatorSafetyMargin"
              label="Safety margin"
              hint="%"
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
  name: 'IncubatorSettings',
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
