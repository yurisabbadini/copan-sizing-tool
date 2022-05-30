<template>
  <q-card class="q-pa-sm q-mt-sm">
    <q-item-label class="q-mb-sm" overline>Incubator</q-item-label>
    <div class="row q-gutter-xs">
        <div class="col">
          <q-input
              dense
              filled
              type="number"
              v-model.number="data.loadingPlatesPerHour"
              label="Loading"
              hint="plates/hour"
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
              v-model.number="data.recordingPlatesPerHour"
              label="Recording"
              hint="plates/hour"
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
              v-model.number="data.unloadingSinglePlatesPerHour"
              label="Unloading (1)"
              hint="plates/hour"
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
              v-model.number="data.unloadingMultiplePlatesPerHour"
              label="Unloading (1+)"
              hint="plates/hour"
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
              v-model.number="data.incubatorSafetyMargin"
              label="Safety margin"
              hint="%"
              lazy-rules
              :rules="[
              val => val !== null && val !== '' || 'Please type a valid numeric value'
              ]"
          />
        </div>
        <div class="col">
          <q-checkbox v-model="data.singleIncubator" label="Single incubator" />
        </div>
    </div>
  </q-card>
</template>

<style>
</style>

<script lang="ts">
import { defineComponent } from 'vue';

import { IncubatorSettings } from '@/types';

export default defineComponent({
  name: 'IncubatorSettings',
  emits: ["dataChanged"],
  data() {
    return {
      data: {
        loadingPlatesPerHour: 125,
        recordingPlatesPerHour: 125,
        unloadingSinglePlatesPerHour: 180,
        unloadingMultiplePlatesPerHour: 250,
        incubatorSafetyMargin: 20,
        singleIncubator: true,
      } as IncubatorSettings
    }
  },
  watch: {
    data: {
      handler: function (newVal: IncubatorSettings) {
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
