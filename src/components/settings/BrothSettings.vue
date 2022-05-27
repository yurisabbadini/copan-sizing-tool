<template>
    <q-item-label class="q-mt-lg q-mb-sm" overline>Broths</q-item-label>
    <div class="row q-gutter-xs">
        <div class="col">
        <q-input
            dense
            filled
            type="number"
            v-model.number="timeInSeconds"
            label="Time"
            hint="seconds"
            lazy-rules
            :rules="[
            val => val !== null && val !== '' || 'Please type a valid numeric value'
            ]"
        />
        </div>
    </div>
</template>

<style>
</style>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'BrothSettings',
  emits: ["dataChanged"],
  data() {
    return {
      timeInSeconds: 70 as number
    }
  },
  watch: {
    timeInSeconds: {
      handler: function (newVal: number) {
        this.$emit("dataChanged", newVal);
      },
      deep: true
    }
  }
});
</script>
