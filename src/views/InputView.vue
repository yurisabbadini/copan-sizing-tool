<template>
<div class="row">
  <div class="col">
    <SamplesPerDay />
  </div>
</div>
<div class="row">
  <div class="col">
    <GrowthTrends />
  </div>
</div>
<div class="row">
  <div class="col">
    <FteHours />
  </div>
</div>
<div class="row">
  <div class="col">
    <PrimaryProtocols />
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import SamplesPerDay from '@/components/input/SamplesPerDay.vue'
import GrowthTrends from '@/components/input/GrowthTrends.vue'
import FteHours from '@/components/input/FteHours.vue'
import PrimaryProtocols from '@/components/input/PrimaryProtocols.vue'

export default defineComponent({
  name: 'InputView',
  components: {
    SamplesPerDay,
    GrowthTrends,
    FteHours,
    PrimaryProtocols
  },
});
</script>
