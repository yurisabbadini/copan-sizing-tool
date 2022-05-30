<template>
  <q-card class="q-pa-sm q-mt-sm">
    <q-item-label class="q-mb-sm" overline>FTE hours</q-item-label>
    <div class="row q-gutter-xs">
        <div class="col">
            <q-item-label class="q-mb-sm text-caption">WASP</q-item-label>
            <q-input
                dense
                filled
                type="number"
                v-model.number="fteHours.wasp.start"
                label="Start"
                lazy-rules
                :rules="[
                val => val !== null && val !== '' || 'Please type a valid numeric value'
                ]"
            />
            <q-input
                dense
                filled
                type="number"
                v-model.number="fteHours.wasp.end"
                label="End"
                lazy-rules
                :rules="[
                val => val !== null && val !== '' || 'Please type a valid numeric value'
                ]"
            />
        </div>
        <div class="col">
            <q-item-label class="q-mb-sm text-caption">Manual streaking</q-item-label>
            <q-input
                dense
                filled
                type="number"
                v-model.number="fteHours.manualStreaking.start"
                label="Start"
                lazy-rules
                :rules="[
                val => val !== null && val !== '' || 'Please type a valid numeric value'
                ]"
            />
            <q-input
                dense
                filled
                type="number"
                v-model.number="fteHours.manualStreaking.end"
                label="End"
                lazy-rules
                :rules="[
                val => val !== null && val !== '' || 'Please type a valid numeric value'
                ]"
            />
        </div>
        <div class="col">
            <q-item-label class="q-mb-sm text-caption">Screening</q-item-label>
            <q-input
                dense
                filled
                type="number"
                v-model.number="fteHours.screening.start"
                label="Start"
                lazy-rules
                :rules="[
                val => val !== null && val !== '' || 'Please type a valid numeric value'
                ]"
            />
            <q-input
                dense
                filled
                type="number"
                v-model.number="fteHours.screening.end"
                label="End"
                lazy-rules
                :rules="[
                val => val !== null && val !== '' || 'Please type a valid numeric value'
                ]"
            />
        </div>
        <div class="col">
            <q-item-label class="q-mb-sm text-caption">Reading</q-item-label>
            <q-input
                dense
                filled
                type="number"
                v-model.number="fteHours.reading.start"
                label="Start"
                lazy-rules
                :rules="[
                val => val !== null && val !== '' || 'Please type a valid numeric value'
                ]"
            />
            <q-input
                dense
                filled
                type="number"
                v-model.number="fteHours.reading.end"
                label="End"
                lazy-rules
                :rules="[
                val => val !== null && val !== '' || 'Please type a valid numeric value'
                ]"
            />
        </div>
        <div class="col">
            <q-item-label class="q-mb-sm text-caption">Colibrì</q-item-label>
            <q-input
                dense
                filled
                type="number"
                v-model.number="fteHours.colibri.start"
                label="Start"
                lazy-rules
                :rules="[
                val => val !== null && val !== '' || 'Please type a valid numeric value'
                ]"
            />
            <q-input
                dense
                filled
                type="number"
                v-model.number="fteHours.colibri.end"
                label="End"
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
  name: 'FteHours',
  setup() {
    const {
      fteHours
    } = appStorage();

    return {
      fteHours
    }
  }
});
</script>
