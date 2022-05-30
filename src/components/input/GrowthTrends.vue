<template>
  <q-card class="q-pa-sm q-mt-sm">
    <q-item-label class="q-mb-sm" overline>Growth trends</q-item-label>
    <div class="row q-gutter-xs">
            <div class="col">
              <q-input
                  dense
                  filled
                  type="number"
                  v-model.number="growthTrends.startYear"
                  label="Start Year"
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
                  v-model.number="growthTrends.endYear"
                  label="End Year"
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
                  v-model.number="growthTrends.yearOfReference"
                  label="Year of reference"
                  :min="growthTrends.startYear"
                  :max="growthTrends.endYear"
                  lazy-rules
                  :rules="[
                  val => val !== null && val !== '' || 'Please type a valid numeric value'
                  ]"
              />
            </div>
          </div>
          <div class="row q-gutter-xs">
            <div v-for="y in deltaYear" :key="y" class="col">
              <q-input
                  dense
                  filled
                  type="number"
                  v-model.number="growthTrends.growthTrends[y-1]"
                  :label="(growthTrends.startYear + y).toString()"
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
  name: 'GrowthTrends',
  setup() {
    const {
      growthTrends
    } = appStorage();

    return {
      growthTrends
    }
  },
  computed: {
    deltaYear(): number {
      return this.growthTrends.endYear - this.growthTrends.startYear;
    }
  },
});
</script>
