<template>
  <div class="text-h5 q-mt-sm">Settings</div>
  <div class="row">
    <div class="col-6">
      <PlatesSettingsVue @data-changed="onPlatesSettingChange($event)"/>
    </div>
    <div class="col-4">
      <SlidesSettingsVue @data-changed="onSlideSettingChange($event)"/>
    </div>
    <div class="col-2">
      <BrothSettingsVue @data-changed="onBrothSettingChange($event)"/>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <IncubatorSettingsVue @data-changed="onIncubatorSettingChange($event)"/>
    </div>
  </div>
  <div class="row">
    <div class="col-10">
      <ColibriSettingsVue @data-changed="onColibriSettingChange($event)" />
    </div>
    <div class="col-2">
      <FlowSettingsVue @data-changed="onFlowSettingChange($event)" />
    </div>
  </div>
  <div class="row">
    <div class="col">
      <FteSettingsVue @data-changed="onFteSettingChange($event)" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PlatesStreakingPattern, SlidesStreakingPattern, BrothSettings, IncubatorSettings, ColibriSettings, FlowSettings, FteSettings, Settings } from '@/types';
import PlatesSettingsVue from '@/components/settings/PlatesSettings.vue';
import SlidesSettingsVue from '@/components/settings/SlidesSettings.vue'
import BrothSettingsVue from '@/components/settings/BrothSettings.vue';
import IncubatorSettingsVue from '@/components/settings/IncubatorSettings.vue';
import ColibriSettingsVue from '@/components/settings/ColibriSettings.vue';
import FlowSettingsVue from '@/components/settings/FlowSettings.vue';
import FteSettingsVue from '@/components/settings/FteSettings.vue';

export default defineComponent({
  name: 'SettingsView',
  emits: ["settingsChanged"],
  components: {
    PlatesSettingsVue,
    SlidesSettingsVue,
    BrothSettingsVue,
    IncubatorSettingsVue,
    ColibriSettingsVue,
    FlowSettingsVue,
    FteSettingsVue
  },
  data() {
    return {
      data: {
        broths: {
          timeInSeconds: 0
        },
        colibri: {
          IDTimeInSeconds: 0,
          ASTTimeInSeconds: 0,
          ASTIDTimeInSeconds: 0,
          ASTIDPurityTimeInSeconds: 0,
          ASTPurityTimeInSeconds: 0
        },
        flow: {
          platesPerHour: 0
        },
        incubator: {
          loadingPlatesPerHour: 0,
          recordingPlatesPerHour: 0,
          unloadingSinglePlatesPerHour: 0,
          unloadingMultiplePlatesPerHour: 0,
          incubatorSafetyMargin: 0,
          singleIncubator: true,
        },
        plates: {
          streakingPatterns: []
        },
        slides: {
          streakingPatterns: []
        },
        fte: {
          manualStreakingSecondsPerPlate: 0,
          screeningSecondsPerPlate: 0,
          readingSecondsPerPlate: 0,
          pickingSecondsPerPlate: 0,
          productivitySecondsPerPlate: 0,
          phenomatrixSecondsPer30Plates: 0,
          waspMinutesPerHour: 0,
          wasplabMinutesPerIncubatorPerDay: 0,
          radianMinutesPerDay: 0,
          colibriMinutesPerDay: 0,
          flowMinutesPerWorkingHour: 0
        }
      } as Settings
    }
  },
  methods: {
    onPlatesSettingChange(data: PlatesStreakingPattern[]) {
      this.data.plates.streakingPatterns = data;
    },
    onSlideSettingChange(data: SlidesStreakingPattern[]) {
      this.data.slides.streakingPatterns = data;
    },
    onBrothSettingChange(data: BrothSettings) {
      this.data.broths = data;
    },
    onIncubatorSettingChange(data: IncubatorSettings) {
      this.data.incubator = data;
    },
    onColibriSettingChange(data: ColibriSettings) {
      this.data.colibri = data;
    },
    onFlowSettingChange(data: FlowSettings) {
      this.data.flow = data;
    },
    onFteSettingChange(data: FteSettings) {
      this.data.fte = data;
    }
  },
  watch: {
    data: {
      handler: function (newVal: Settings) {
        this.$emit("settingsChanged", newVal);
      },
      deep: true
    }
  }
});
</script>