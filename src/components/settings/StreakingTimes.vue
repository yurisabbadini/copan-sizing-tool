<template>
  <q-card class="my-card" flat bordered>
      <q-card-section>
        <q-card-section class="q-pt-xs">
          <div class="text-h5 q-mt-sm q-mb-xs">{{ title }}</div>
          <div class="row q-gutter-xs">
            <div class="col">
              <q-input
                  dense
                  filled
                  type="number"
                  v-model.number="start"
                  label="Start"
                  hint="time"
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
                  v-model.number="end"
                  label="End"
                  hint="time"
                  lazy-rules
                  :rules="[
                  val => val !== null && val !== '' || 'Please type a valid numeric value'
                  ]"
              />
            </div>
          </div>
        </q-card-section>
      </q-card-section>
  </q-card>
</template>

<style>
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StreakingTime',
  props: ["title"],
  data() {
    return {
      start: 8,
      end: 19
    }
  }
});
</script>
