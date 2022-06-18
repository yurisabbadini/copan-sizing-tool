<template>
  <q-card class="q-pa-sm q-mt-sm">
    <q-item-label class="q-mb-sm" overline>FTE</q-item-label>
    <div class="row q-gutter-xs">
        <div class="col">
          <q-input
              dense
              filled
              type="number"
              v-model.number="settings.fte.manualStreakingSecondsPerPlate"
              label="Manual streaking"
              hint="sec/plate"
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
              v-model.number="settings.fte.screeningSecondsPerPlate"
              label="Screening"
              hint="sec/plate"
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
              v-model.number="settings.fte.readingSecondsPerPlate"
              label="Reading"
              hint="sec/plate"
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
              v-model.number="settings.fte.pickingSecondsPerPlate"
              label="Picking"
              hint="sec/plate"
              lazy-rules
              :rules="[
              val => val !== null && val !== '' || 'Please type a valid numeric value'
              ]"
          />
        </div>
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
    </div>

    <div class="row q-gutter-xs q-mt-sm">
        <div class="col">
          <q-input
              dense
              filled
              type="number"
              v-model.number="settings.fte.productivitySecondsPerPlate"
              label="Productivity"
              hint="sec/plate"
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
              v-model.number="settings.fte.phenomatrixSecondsPer30Plates"
              label="Phenomatrix"
              hint="sec/30 plates"
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
              v-model.number="settings.fte.waspMinutesPerHour"
              label="Wasp"
              hint="minutes/hours"
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
              v-model.number="settings.fte.wasplabMinutesPerIncubatorPerDay"
              label="Wasplab"
              hint="minutes/hours"
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
              v-model.number="settings.fte.radianMinutesPerDay"
              label="Radian"
              hint="minutes/day"
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
              v-model.number="settings.fte.colibriMinutesPerDay"
              label="Colibrì"
              hint="minutes/day"
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
              v-model.number="settings.fte.floMinutesPerWorkingHour"
              label="Flo"
              hint="minutes/hour"
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
  name: 'FteSettings',
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
