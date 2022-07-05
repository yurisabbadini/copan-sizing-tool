<template>
  <q-card class="q-pa-sm q-mt-sm">
    <q-item-label class="q-mb-sm" overline>Additional Items</q-item-label>
    <div class="row q-gutter-xs">
        <div class="col">
          <q-input
              dense
              filled
              type="number"
              v-model.number="configuratorAdditionalItems.flo"
              label="Flo"
              lazy-rules
              :rules="[
              val => val !== null && val !== '' || 'Please type a valid numeric value'
              ]"
          />
        </div>
        <div class="col">
          <q-input
              dense
              filled
              type="number"
              v-model.number="configuratorAdditionalItems.colibri"
              label="Colibrì"
              :hint="colibriHint()"
              lazy-rules
              :rules="[
              val => val !== null && val !== '' || 'Please type a valid numeric value'
              ]"
          />
        </div>
        <div class="col">
          <q-input
              dense
              filled
              type="number"
              v-model.number="configuratorAdditionalItems.manualStation"
              label="Manual station"
              lazy-rules
              :rules="[
              val => val !== null && val !== '' || 'Please type a valid numeric value'
              ]"
          />
        </div>
        <div class="col">
          <q-input
              dense
              filled
              type="number"
              v-model.number="configuratorAdditionalItems.readingStation"
              label="Reading station"
              lazy-rules
              :rules="[
              val => val !== null && val !== '' || 'Please type a valid numeric value'
              ]"
          />
        </div>
        
        <div class="col">
          <q-input
              dense
              filled
              type="number"
              v-model.number="configuratorAdditionalItems.pickingStation"
              label="Picking station"
              lazy-rules
              :rules="[
              val => val !== null && val !== '' || 'Please type a valid numeric value'
              ]"
          />
        </div>
    </div>
  </q-card>
</template>

<style>
</style>

<script lang="ts">
import { defineComponent } from 'vue';

import appStorage from '@/store';
import { PrimaryProtocol } from '@/types';

export default defineComponent({
  name: 'AdditionalItems',
  setup() {
    const {
      settings,
      lines,
      primaryProtocols,
      configuratorAdditionalItems,
      colibriTime
    } = appStorage();

    return {
      settings,
      lines,
      primaryProtocols,
      configuratorAdditionalItems,
      colibriTime
    }
  },
  methods: {
    colibriHint() {
      try {
        const totals: {
          protocolId: string;
          plates: number;
        }[] = [];
        this.lines.forEach(line => {
          line.protocols.forEach(protocol => {
            const index = totals.findIndex((x) => x.protocolId == protocol.id);
            if(index < 0) {
              totals.push({
                protocolId: protocol.id,
                plates: protocol.co2Unloading + protocol.o2Unloading
              });
            } else {
              totals[index].plates += protocol.co2Unloading + protocol.o2Unloading;
            }
          });
        });

        const colibriTimesPerProtocol: {
          protocol: PrimaryProtocol;
          idTime: number;
          astTime: number;
          idAstTime: number;
        }[] = [];

        totals.forEach(totalProtocolPlates => {
          const protocol = this.primaryProtocols.find((x) => x.id == totalProtocolPlates.protocolId);
          if(protocol) {
            colibriTimesPerProtocol.push({
              protocol: protocol,
              idTime: totalProtocolPlates.plates * (protocol.idPercentage / 100) * this.settings.colibri.IDTimeInSeconds,
              astTime: totalProtocolPlates.plates * (protocol.astPercentage / 100) * this.settings.colibri.ASTTimeInSeconds,
              idAstTime: totalProtocolPlates.plates * (protocol.astIdPercentage / 100) * this.settings.colibri.ASTIDTimeInSeconds,
            });
          }
        });
        const time = colibriTimesPerProtocol.map((x) => x.idTime + x.astTime + x.idAstTime).reduce((a, b) => a + b);
        this.colibriTime = time;
        if(this.configuratorAdditionalItems.colibri == 0) {
          return "0 %";
        } else {
          return (time / this.configuratorAdditionalItems.colibri / 3600 * 100).toFixed(2) + " %";
        }
      } catch {
        return "";
      }
    }
  }
});
</script>
