<template>
  <q-card class="q-pa-sm q-mt-sm">
    <q-item-label class="q-mb-sm" overline>Colibrì</q-item-label>
    <div class="row q-gutter-xs">
        <div class="col">
          <q-input
              dense
              filled
              type="number"
              v-model.number="data.IDTimeInSeconds"
              label="ID"
              hint="seconds"
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
              v-model.number="data.ASTTimeInSeconds"
              label="AST"
              hint="seconds"
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
              v-model.number="data.ASTIDTimeInSeconds"
              label="AST + ID"
              hint="seconds"
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
              v-model.number="data.ASTIDPurityTimeInSeconds"
              label="AST + ID + Purity plates"
              hint="seconds"
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
              v-model.number="data.ASTPurityTimeInSeconds"
              label="AST + Purity plates"
              hint="seconds"
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

import { ColibriSettings } from '@/types';

export default defineComponent({
  name: 'ColibriSettings',
  emits: ["dataChanged"],
  data() {
    return {
      data: {
        IDTimeInSeconds: 60,
        ASTTimeInSeconds: 120,
        ASTIDTimeInSeconds: 175,
        ASTIDPurityTimeInSeconds: 240,
        ASTPurityTimeInSeconds: 180
      } as ColibriSettings
    }
  },
  watch: {
    data: {
      handler: function (newVal: ColibriSettings) {
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
