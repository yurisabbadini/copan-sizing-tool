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
<div class="row">
  <div class="col">
    <PeakDayResult />
  </div>
  <div class="col">
    <DailyChart :daily-data="dailyData"/>
  </div>
</div>

<q-page-sticky position="top-right" :offset="[18, 18]">
  <q-btn fab color="primary" @click="calcola">CALCOLA</q-btn>
</q-page-sticky>

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
import PeakDayResult from '@/components/PeakDayResult.vue'
import DailyChart from '@/components/DailyChart.vue'
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
    DailyVolumes,
    PeakDayResult,
    DailyChart
  },
  setup() {
    const {
      growthTrends,
      primaryProtocols,
      secondaryProtocols,
      samplesPerDay,
      settings,
      dailyData,
      weightedDayTimes,
      weightedDayTimesPerProtocol
    } = appStorage();

    return {
      growthTrends,
      primaryProtocols,
      secondaryProtocols,
      samplesPerDay,
      settings,
      dailyData,
      weightedDayTimes,
      weightedDayTimesPerProtocol
    }
  },
  methods: {
    calcola() {
      const weightedDayTimes = getWeightedDaysTimesInSeconds({
        growthTrends: this.growthTrends,
        primaryProtocols: this.primaryProtocols,
        secondaryProtocols: this.secondaryProtocols,
        samplesPerDay: this.samplesPerDay,
        settings: this.settings
      });
      this.weightedDayTimes = weightedDayTimes.weightedDaysTimesInSeconds;
      this.weightedDayTimesPerProtocol = weightedDayTimes.weightedDaysTimesInSecondsPerProtocol;
      const weightedDailyActivities = getWeightedDailyActivities(this.weightedDayTimes);
      this.dailyData = getPeakDay({ data: weightedDailyActivities, samplesPerDay: this.samplesPerDay });
      const sundayValue = this.dailyData[0];
      this.dailyData.push(sundayValue);
      this.dailyData.splice(0, 1);
    }
  }
});
</script>
