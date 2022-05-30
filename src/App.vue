<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      class="bg-grey-2"
    >
      <q-list>
        <q-item clickable tag="a" to="/settings">
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Settings</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="q-pa-lg">
      <router-view @settings-changed="onSettingsChanged($event)"></router-view>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { Settings } from './types'

export default defineComponent({
  name: 'LayoutDefault',
  data() {
      return {
        leftDrawerOpen: false,
        settings: {
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
    onSettingsChanged(data: Settings) {
      this.settings = data;
    }
  }
});
</script>