<template>
  <div class="text-h5 q-mt-sm">Settings</div>
  <div class="row">
    <div class="col-6">
      <PlatesSettingsVue />
    </div>
    <div class="col-4">
      <SlidesSettingsVue />
    </div>
    <div class="col-2">
      <BrothSettingsVue />
    </div>
  </div>
  <div class="row">
    <div class="col">
      <IncubatorSettingsVue />
    </div>
  </div>
  <div class="row">
    <div class="col-10">
      <ColibriSettingsVue  />
    </div>
    <div class="col-2">
      <FlowSettingsVue  />
    </div>
  </div>
  <div class="row">
    <div class="col">
      <FteSettingsVue  />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PlatesSettingsVue from '@/components/settings/PlatesSettings.vue';
import SlidesSettingsVue from '@/components/settings/SlidesSettings.vue'
import BrothSettingsVue from '@/components/settings/BrothSettings.vue';
import IncubatorSettingsVue from '@/components/settings/IncubatorSettings.vue';
import ColibriSettingsVue from '@/components/settings/ColibriSettings.vue';
import FlowSettingsVue from '@/components/settings/FlowSettings.vue';
import FteSettingsVue from '@/components/settings/FteSettings.vue';

export default defineComponent({
  name: 'SettingsView',
  components: {
    PlatesSettingsVue,
    SlidesSettingsVue,
    BrothSettingsVue,
    IncubatorSettingsVue,
    ColibriSettingsVue,
    FlowSettingsVue,
    FteSettingsVue
  }
});
</script>