<template>
  <q-card class="q-pa-sm q-mt-sm">
    <q-item-label class="q-mb-sm" overline>Samples per day</q-item-label>
    <div class="row q-gutter-xs">
        <div class="col">
            <q-input square dark bg-color="input" 
                dense
                filled
                type="number"
                v-model.number="samplesPerDay[0].samples"
                label="Monday"
                hint="samples"
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
                v-model.number="samplesPerDay[1].samples"
                label="Tuesday"
                hint="samples"
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
                v-model.number="samplesPerDay[2].samples"
                label="Wednesday"
                hint="samples"
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
                v-model.number="samplesPerDay[3].samples"
                label="Thursday"
                hint="samples"
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
                v-model.number="samplesPerDay[4].samples"
                label="Friday"
                hint="samples"
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
                v-model.number="samplesPerDay[5].samples"
                label="Saturday"
                hint="samples"
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
                v-model.number="samplesPerDay[6].samples"
                label="Sunday"
                hint="samples"
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
  name: 'SamplesPerDay',
  setup() {
    const {
      samplesPerDay
    } = appStorage();

    return {
      samplesPerDay
    }
  }
});
</script>
