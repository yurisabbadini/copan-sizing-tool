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
      <Protocols :title="line.name" :lineId="line.id" />
    </div>
  </div>
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
      lines
    } = appStorage();

    return {
      lines
    }
  },
});
</script>
