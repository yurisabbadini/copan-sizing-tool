<template>
<div class="row">
  <div class="col">
    <TotalHardware />
  </div>
</div>
<div v-for="line in lines" :key="line.id" class="row">
  <div class="col">
    <div class="row">
      <div class="col">
        <OutputLine :line-id="line.id" :title="line.name"/>
      </div>
    </div>
    <div class="row">
      <div class="col" v-if="line.numberOfWasp >= 1">
        <WaspChart :lineId="line.id" :wasp="1"/>
      </div>
      <div class="col" v-if="line.numberOfWasp == 2" >
        <WaspChart :lineId="line.id" :wasp="2"/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <WasplabChart :lineId="line.id" />
      </div>
    </div>
  </div>
</div>
<ColibriChart />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TotalHardware from '@/components/outputs/TotalHardware.vue';
import OutputLine from '@/components/outputs/OutputLine.vue';
import ColibriChart from '@/components/outputs/ColibriChart.vue';
import WaspChart from '@/components/outputs/WaspChart.vue';
import WasplabChart from '@/components/outputs/WasplabChart.vue';
import appStorage from '@/store';

export default defineComponent({
  name: 'OutputView',
  components: {
    TotalHardware,
    OutputLine,
    ColibriChart,
    WaspChart,
    WasplabChart
  },
  setup() {
    const {
      lines
    } = appStorage();


    return {
      lines
    }
  }
});
</script>
