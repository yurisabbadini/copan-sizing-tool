<template>
  <div class="row">
    <div class="col">
      <Lines />
    </div>
  </div>
  <div class="row">
    <div class="col">
      <Protocols />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Lines from '@/components/configurator/Lines.vue';
import Protocols from '@/components/configurator/Protocols.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Lines,
    Protocols
  },
});
</script>
