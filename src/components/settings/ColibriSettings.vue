<template>
  <q-card class="q-pa-sm q-mt-sm">
    <q-item-label class="q-mb-sm" overline>Colibrì</q-item-label>
    <div class="row q-gutter-xs">
        <div class="col">
          <q-input square dark bg-color="input" 
              dense
              filled
              type="number"
              v-model.number="settings.colibri.IDTimeInSeconds"
              label="ID"
              hint="seconds"
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
              v-model.number="settings.colibri.ASTTimeInSeconds"
              label="AST"
              hint="seconds"
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
              v-model.number="settings.colibri.ASTIDTimeInSeconds"
              label="AST + ID"
              hint="seconds"
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
              v-model.number="settings.colibri.ASTIDPurityTimeInSeconds"
              label="AST + ID + Purity plates"
              hint="seconds"
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
              v-model.number="settings.colibri.ASTPurityTimeInSeconds"
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

import appStorage from '@/store';

export default defineComponent({
  name: 'ColibriSettings',
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
