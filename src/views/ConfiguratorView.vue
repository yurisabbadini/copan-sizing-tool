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
      fteHours,
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
      fteHours,
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
          protocol.co2Loading = (this.weightedPeakDayTimes.find((x) => x.type == "loading_co2" && x.protocol == protocol.id)?.samples || 0) * linePercentage / 100;
          protocol.co2Recording = (this.weightedPeakDayTimes.find((x) => x.type == "recording_co2" && x.protocol == protocol.id)?.samples || 0) * linePercentage / 100;
          protocol.co2Unloading = (this.weightedPeakDayTimes.find((x) => x.type == "unloading_co2" && x.protocol == protocol.id)?.samples || 0) * linePercentage / 100;
          protocol.o2Loading = (this.weightedPeakDayTimes.find((x) => x.type == "loading_air" && x.protocol == protocol.id)?.samples || 0) * linePercentage / 100;
          protocol.o2Recording = (this.weightedPeakDayTimes.find((x) => x.type == "recording_air" && x.protocol == protocol.id)?.samples || 0) * linePercentage / 100;
          protocol.o2Unloading = (this.weightedPeakDayTimes.find((x) => x.type == "unloading_air" && x.protocol == protocol.id)?.samples || 0) * linePercentage / 100;
          protocol.wasp1Broths = (this.weightedPeakDayTimes.find((x) => x.type == "broths" && x.protocol == protocol.id)?.samples || 0) * wasp1Percentage / 100 * linePercentage / 100;
          protocol.wasp1Plates = (this.weightedPeakDayTimes.find((x) => x.type == "plates" && x.protocol == protocol.id)?.samples || 0) * wasp1Percentage / 100 * linePercentage / 100;
          protocol.wasp1Slides = (this.weightedPeakDayTimes.find((x) => x.type == "slides" && x.protocol == protocol.id)?.samples || 0) * wasp1Percentage / 100 * linePercentage / 100;
          protocol.wasp2Broths = (this.weightedPeakDayTimes.find((x) => x.type == "broths" && x.protocol == protocol.id)?.samples || 0) * wasp2Percentage / 100 * linePercentage / 100;
          protocol.wasp2Plates = (this.weightedPeakDayTimes.find((x) => x.type == "plates" && x.protocol == protocol.id)?.samples || 0) * wasp2Percentage / 100 * linePercentage / 100;
          protocol.wasp2Slides = (this.weightedPeakDayTimes.find((x) => x.type == "slides" && x.protocol == protocol.id)?.samples || 0) * wasp2Percentage / 100 * linePercentage / 100;
        });
      })
    },
    saveConfig() {
      this.lines.forEach(line => {
        let totalWasp1Time = 0;
        let totalWasp2Time = 0;
        let totalWasplabLoadingO2Time = 0;
        let totalWasplabRecordingO2Time = 0;
        let totalWasplabUnloadingO2Time = 0;
        let totalWasplabLoadingCO2Time = 0;
        let totalWasplabRecordingCO2Time = 0;
        let totalWasplabUnloadingCO2Time = 0;
        const protocols = line.protocols;
        protocols.forEach(protocol => {
          const wasp1ProtocolTime = this.weightedDayTimesPerProtocol.filter((x) => x.protocol == protocol.id && x.dayOfWeek == this.peakDay?.dayOfWeek && (x.type == "plates" || x.type == "slides" || x.type == "broths")).map((x) => x.timeInSeconds).reduce((a, b) => a + b) * (protocol.samples / 100) * (protocol.wasp1Percentage / 100) || 0;
          totalWasp1Time += wasp1ProtocolTime;

          const wasp2ProtocolTime = this.weightedDayTimesPerProtocol.filter((x) => x.protocol == protocol.id && x.dayOfWeek == this.peakDay?.dayOfWeek && (x.type == "plates" || x.type == "slides" || x.type == "broths")).map((x) => x.timeInSeconds).reduce((a, b) => a + b) * (protocol.samples / 100) * (protocol.wasp2Percentage / 100) || 0;
          totalWasp2Time += wasp2ProtocolTime;

          const wasplabProtocolTimeLoadingO2 = this.weightedDayTimesPerProtocol.filter((x) => x.protocol == protocol.id && x.dayOfWeek == this.peakDay?.dayOfWeek && x.type == "loading_air").map((x) => x.timeInSeconds).reduce((a, b) => a + b) * protocol.samples / 100 / line.numberOfO2Incubator || 0;
          const wasplabProtocolTimeRecordingO2 = this.weightedDayTimesPerProtocol.filter((x) => x.protocol == protocol.id && x.dayOfWeek == this.peakDay?.dayOfWeek && x.type == "recording_air").map((x) => x.timeInSeconds).reduce((a, b) => a + b) * protocol.samples / line.numberOfO2Incubator / 100 || 0;
          const wasplabProtocolTimeUnloadingO2 = this.weightedDayTimesPerProtocol.filter((x) => x.protocol == protocol.id && x.dayOfWeek == this.peakDay?.dayOfWeek && x.type == "unloading_air").map((x) => x.timeInSeconds).reduce((a, b) => a + b) * protocol.samples / line.numberOfO2Incubator / 100 || 0;
          totalWasplabLoadingO2Time += wasplabProtocolTimeLoadingO2;
          totalWasplabRecordingO2Time += wasplabProtocolTimeRecordingO2;
          totalWasplabUnloadingO2Time += wasplabProtocolTimeUnloadingO2;

          const incubatorCO2Factor = line.numberOfCO2Incubator > 0 ? line.numberOfCO2Incubator : 1;
          const wasplabProtocolTimeLoadingCO2 = this.weightedDayTimesPerProtocol.filter((x) => x.protocol == protocol.id && x.dayOfWeek == this.peakDay?.dayOfWeek && x.type == "loading_co2").map((x) => x.timeInSeconds).reduce((a, b) => a + b) * protocol.samples / incubatorCO2Factor / 100 || 0;
          const wasplabProtocolTimeRecordingCO2 = this.weightedDayTimesPerProtocol.filter((x) => x.protocol == protocol.id && x.dayOfWeek == this.peakDay?.dayOfWeek && x.type == "recording_co2").map((x) => x.timeInSeconds).reduce((a, b) => a + b) * protocol.samples / incubatorCO2Factor / 100 || 0;
          const wasplabProtocolTimeUnloadingCO2 = this.weightedDayTimesPerProtocol.filter((x) => x.protocol == protocol.id && x.dayOfWeek == this.peakDay?.dayOfWeek && x.type == "unloading_co2").map((x) => x.timeInSeconds).reduce((a, b) => a + b) * protocol.samples / incubatorCO2Factor / 100 || 0;
          totalWasplabLoadingCO2Time += wasplabProtocolTimeLoadingCO2;
          totalWasplabRecordingCO2Time += wasplabProtocolTimeRecordingCO2;
          totalWasplabUnloadingCO2Time += wasplabProtocolTimeUnloadingCO2;
        });
        line.waspOccupancyRate = Math.max(...[totalWasp1Time / 3600 / (this.fteHours.wasp.end - this.fteHours.wasp.start) * 100, totalWasp2Time / 3600 / (this.fteHours.wasp.end - this.fteHours.wasp.start) * 100]);
        line.wasplabOccupancyRate = (Math.max(...[totalWasp1Time, totalWasp2Time, totalWasplabLoadingO2Time, totalWasplabLoadingCO2Time]) + Math.max(...[totalWasplabRecordingO2Time, totalWasplabRecordingCO2Time]) + totalWasplabUnloadingO2Time + totalWasplabUnloadingCO2Time) / 3600 / 24 * 100;
      });
    },
    calcola() {
      this.saveProtocols();
      this.saveConfig();
    }
  }
});
</script>
