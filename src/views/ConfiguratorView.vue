<template>
  <div class="row">
    <div class="col">
      <AdditionalItems />
    </div>
  </div>
  <div class="row">
    <div class="col">
      <Lines />
    </div>
  </div>
  <div v-for="line in lines" :key="line.id" class="row">
    <div class="col">
      <Protocols :title="line.name" :lineId="line.id"/>
    </div>
  </div>

  <q-page-sticky position="top-right" :offset="[18, 18]">
    <q-btn fab color="primary" @click="calcola">SAVE</q-btn>
  </q-page-sticky>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import appStorage from '@/store';
import Lines from '@/components/configurator/Lines.vue';
import Protocols from '@/components/configurator/Protocols.vue';
import AdditionalItems from '@/components/configurator/AdditionalItems.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Lines,
    Protocols,
    AdditionalItems
  },
  setup() {
    const {
      lines,
      dailyData,
      weightedDayTimesPerProtocol,
      primaryProtocols,
    } = appStorage();

    const peakDay = dailyData.value.find((x) => x.isPeakDay);
    const weightedPeakDayTimes = weightedDayTimesPerProtocol.value.filter((x) => x.dayOfWeek == peakDay?.dayOfWeek);
    
    return {
      weightedDayTimesPerProtocol,
      weightedPeakDayTimes,
      peakDay,
      primaryProtocols,
      lines
    }
  },
  methods: {
    saveProtocols() {
      this.lines.forEach(line => {
        line.protocols.forEach(protocol => {
          const linePercentage = protocol.samples;
          const wasp1Percentage = protocol.wasp1Percentage;
          const wasp2Percentage = protocol.wasp2Percentage;
          protocol.samples = Number(linePercentage.toFixed(2));
          protocol.wasp1Percentage = wasp1Percentage;
          protocol.wasp2Percentage = wasp2Percentage;
          protocol.co2Loading = Math.ceil((this.weightedPeakDayTimes.find((x) => x.type == "loading_co2" && x.protocol == protocol.id)?.samples || 0) * linePercentage / 100);
          protocol.co2Recording = Math.ceil((this.weightedPeakDayTimes.find((x) => x.type == "recording_co2" && x.protocol == protocol.id)?.samples || 0) * linePercentage / 100);
          protocol.co2Unloading = Math.ceil((this.weightedPeakDayTimes.find((x) => x.type == "unloading_co2" && x.protocol == protocol.id)?.samples || 0) * linePercentage / 100);
          protocol.o2Loading = Math.ceil((this.weightedPeakDayTimes.find((x) => x.type == "loading_air" && x.protocol == protocol.id)?.samples || 0) * linePercentage / 100);
          protocol.o2Recording = Math.ceil((this.weightedPeakDayTimes.find((x) => x.type == "recording_air" && x.protocol == protocol.id)?.samples || 0) * linePercentage / 100);
          protocol.o2Unloading = Math.ceil((this.weightedPeakDayTimes.find((x) => x.type == "unloading_air" && x.protocol == protocol.id)?.samples || 0) * linePercentage / 100);
          protocol.wasp1Broths = Math.ceil((this.weightedPeakDayTimes.find((x) => x.type == "broths" && x.protocol == protocol.id)?.samples || 0) * wasp1Percentage / 100 * linePercentage / 100);
          protocol.wasp1Plates = Math.ceil((this.weightedPeakDayTimes.find((x) => x.type == "plates" && x.protocol == protocol.id)?.samples || 0) * wasp1Percentage / 100 * linePercentage / 100);
          protocol.wasp1Slides = Math.ceil((this.weightedPeakDayTimes.find((x) => x.type == "slides" && x.protocol == protocol.id)?.samples || 0) * wasp1Percentage / 100 * linePercentage / 100);
          protocol.wasp2Broths = Math.floor((this.weightedPeakDayTimes.find((x) => x.type == "broths" && x.protocol == protocol.id)?.samples || 0) * wasp2Percentage / 100 * linePercentage / 100);
          protocol.wasp2Plates = Math.floor((this.weightedPeakDayTimes.find((x) => x.type == "plates" && x.protocol == protocol.id)?.samples || 0) * wasp2Percentage / 100 * linePercentage / 100);
          protocol.wasp2Slides = Math.floor((this.weightedPeakDayTimes.find((x) => x.type == "slides" && x.protocol == protocol.id)?.samples || 0) * wasp2Percentage / 100 * linePercentage / 100);
        });
      })
    },
    saveConfig() {
      this.lines.forEach(line => {
        let totalWaspTime = 0;
        let totalWasplabTime = 0;
        const protocols = line.protocols;
        protocols.forEach(protocol => {
          const waspProtocolTime = this.weightedDayTimesPerProtocol.filter((x) => x.protocol == protocol.id && x.dayOfWeek == this.peakDay?.dayOfWeek && (x.type == "plates" || x.type == "slides" || x.type == "broths")).map((x) => x.timeInSeconds).reduce((a, b) => a + b) * protocol.samples / line.numberOfWasp / 100 || 0;
          totalWaspTime += waspProtocolTime;

          const wasplabProtocolTimeLoadingO2 = this.weightedDayTimesPerProtocol.filter((x) => x.protocol == protocol.id && x.dayOfWeek == this.peakDay?.dayOfWeek && x.type == "loading_air").map((x) => x.timeInSeconds).reduce((a, b) => a + b) * protocol.samples / line.numberOfO2Incubator / 100 || 0;
          const wasplabProtocolTimeRecordingO2 = this.weightedDayTimesPerProtocol.filter((x) => x.protocol == protocol.id && x.dayOfWeek == this.peakDay?.dayOfWeek && x.type == "recording_air").map((x) => x.timeInSeconds).reduce((a, b) => a + b) * protocol.samples / line.numberOfO2Incubator / 100 || 0;
          const wasplabProtocolTimeUnloadingO2 = this.weightedDayTimesPerProtocol.filter((x) => x.protocol == protocol.id && x.dayOfWeek == this.peakDay?.dayOfWeek && x.type == "unloading_air").map((x) => x.timeInSeconds).reduce((a, b) => a + b) * protocol.samples / line.numberOfO2Incubator / 100 || 0;
          totalWasplabTime += wasplabProtocolTimeLoadingO2;
          totalWasplabTime += wasplabProtocolTimeRecordingO2;
          totalWasplabTime += wasplabProtocolTimeUnloadingO2;

          const incubatorCO2Factor = line.numberOfCO2Incubator > 0 ? line.numberOfCO2Incubator : 1;
          const wasplabProtocolTimeLoadingCO2 = this.weightedDayTimesPerProtocol.filter((x) => x.protocol == protocol.id && x.dayOfWeek == this.peakDay?.dayOfWeek && x.type == "loading_co2").map((x) => x.timeInSeconds).reduce((a, b) => a + b) * protocol.samples / incubatorCO2Factor / 100 || 0;
          const wasplabProtocolTimeRecordingCO2 = this.weightedDayTimesPerProtocol.filter((x) => x.protocol == protocol.id && x.dayOfWeek == this.peakDay?.dayOfWeek && x.type == "recording_co2").map((x) => x.timeInSeconds).reduce((a, b) => a + b) * protocol.samples / incubatorCO2Factor / 100 || 0;
          const wasplabProtocolTimeUnloadingCO2 = this.weightedDayTimesPerProtocol.filter((x) => x.protocol == protocol.id && x.dayOfWeek == this.peakDay?.dayOfWeek && x.type == "unloading_co2").map((x) => x.timeInSeconds).reduce((a, b) => a + b) * protocol.samples / incubatorCO2Factor / 100 || 0;
          totalWasplabTime += wasplabProtocolTimeLoadingCO2;
          totalWasplabTime += wasplabProtocolTimeRecordingCO2;
          totalWasplabTime += wasplabProtocolTimeUnloadingCO2;
        });
        line.waspOccupancyRate = totalWaspTime / 3600 / 24 * 100;
        line.wasplabOccupancyRate = totalWasplabTime / 3600 / 24 * 100;
      });
    },
    calcola() {
      this.saveProtocols();
      this.saveConfig();
    }
  }
});
</script>
