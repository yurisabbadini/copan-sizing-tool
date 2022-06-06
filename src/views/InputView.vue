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
<div class="row">
  <div class="col">
    <PrimaryProtocolsDetails />
  </div>
</div>
<div class="row">
  <div class="col">
    <SecondaryProtocols />
  </div>
</div>
<div class="row">
  <div class="col">
    <DailyVolumes />
  </div>
</div>
<br/>
<br/>
<br/>
<button @click="calcola">CALCOLA</button>

<br/>
<br/>
<br/>
<div v-for="dd in dailyData" :key="dd.dayOfWeek">
DAY OF WEEK: {{ dd.dayOfWeek }}<br/>
DAY SAMPLE: {{ dd.totalSamples }}<br/>
PERCENTAGE: {{ dd.percentage }} %<br/>
TIME: {{ (dd.value / 3600).toFixed(2) }}<br/><br/> 
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import SamplesPerDay from '@/components/input/SamplesPerDay.vue'
import GrowthTrends from '@/components/input/GrowthTrends.vue'
import FteHours from '@/components/input/FteHours.vue'
import PrimaryProtocols from '@/components/input/PrimaryProtocols.vue'
import PrimaryProtocolsDetails from '@/components/input/PrimaryProtocolsDetails.vue'
import SecondaryProtocols from '@/components/input/SecondaryProtocols.vue'
import DailyVolumes from '@/components/input/DailyVolumes.vue'
import { getPeakDay, getWeightedDailyActivities, getWeightedDaysTimesInSeconds } from '@/engine';
import appStorage from '@/store';

export default defineComponent({
  name: 'InputView',
  components: {
    SamplesPerDay,
    GrowthTrends,
    FteHours,
    PrimaryProtocols,
    PrimaryProtocolsDetails,
    SecondaryProtocols,
    DailyVolumes
  },
  setup() {
    const {
      growthTrends,
      primaryProtocols,
      samplesPerDay,
      settings,
      dailyData
    } = appStorage();

    return {
      growthTrends,
      primaryProtocols,
      samplesPerDay,
      settings,
      dailyData
    }
  },
  methods: {
    calcola() {
      const weightedDayTimes = getWeightedDaysTimesInSeconds({
        growthTrends: this.growthTrends,
        protocols: this.primaryProtocols,
        samplesPerDay: this.samplesPerDay,
        settings: this.settings
      });
      const weightedDailyActivities = getWeightedDailyActivities(weightedDayTimes);
      this.dailyData = getPeakDay({ data: weightedDailyActivities, samplesPerDay: this.samplesPerDay });
    }
  }
});
</script>
