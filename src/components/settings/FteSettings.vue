<template>
  <q-card class="q-pa-sm q-mt-sm">
    <q-item-label class="q-mb-sm" overline>FTE</q-item-label>
    <div class="row q-gutter-xs">
        <div class="col">
          <q-input
              dense
              filled
              type="number"
              v-model.number="data.manualStreakingSecondsPerPlate"
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
              v-model.number="data.screeningSecondsPerPlate"
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
              v-model.number="data.readingSecondsPerPlate"
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
              v-model.number="data.pickingSecondsPerPlate"
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
              v-model.number="data.productivitySecondsPerPlate"
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
              v-model.number="data.phenomatrixSecondsPer30Plates"
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
              v-model.number="data.waspMinutesPerHour"
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
              v-model.number="data.wasplabMinutesPerIncubatorPerDay"
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
              v-model.number="data.radianMinutesPerDay"
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
              v-model.number="data.colibriMinutesPerDay"
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
              v-model.number="data.flowMinutesPerWorkingHour"
              label="Flow"
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

import { FteSettings } from '@/types';

export default defineComponent({
  name: 'FteSettings',
  emits: ["dataChanged"],
  data() {
    return {
      data: {
        manualStreakingSecondsPerPlate: 60,
        screeningSecondsPerPlate: 10,
        readingSecondsPerPlate: 30,
        pickingSecondsPerPlate: 60,
        productivitySecondsPerPlate: 15,
        phenomatrixSecondsPer30Plates: 10,
        waspMinutesPerHour: 5,
        wasplabMinutesPerIncubatorPerDay: 5,
        radianMinutesPerDay: 20,
        colibriMinutesPerDay: 5,
        flowMinutesPerWorkingHour: 5
      } as FteSettings
    }
  },
  watch: {
    data: {
      handler: function (newVal: FteSettings) {
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
