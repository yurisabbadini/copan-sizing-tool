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
        <q-item clickable tag="a" to="/">
          <q-item-section avatar>
            <q-icon name="create" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Input</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="/configurator">
          <q-item-section avatar>
            <q-icon name="perm_data_setting" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Configurator</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="q-pa-lg">
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LayoutDefault',
  data() {
      return {
        leftDrawerOpen: false,
        
      }
  }
});
</script>