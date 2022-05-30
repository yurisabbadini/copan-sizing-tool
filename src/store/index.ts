import { reactive, toRefs } from "vue";

import { GrowthTrends, PlatesStreakingPattern, PrimaryProtocol, SecondaryProtocol, SamplePerDay, Settings, SlidesStreakingPattern } from "@/types";

const state = reactive({
    settings: {
        broths: {
          timeInSeconds: 70
        },
        colibri: {
          IDTimeInSeconds: 60,
          ASTTimeInSeconds: 120,
          ASTIDTimeInSeconds: 175,
          ASTIDPurityTimeInSeconds: 240,
          ASTPurityTimeInSeconds: 180
        },
        flow: {
          platesPerHour: 550
        },
        incubator: {
          loadingPlatesPerHour: 125,
          recordingPlatesPerHour: 125,
          unloadingSinglePlatesPerHour: 180,
          unloadingMultiplePlatesPerHour: 250,
          incubatorSafetyMargin: 20,
          singleIncubator: true,
        },
        plates: {
          streakingPatterns: [
            {
              pattern: "1",
              timeInSeconds: 25
            },
            {
              pattern: "2",
              timeInSeconds: 35
            },
            {
              pattern: "3",
              timeInSeconds: 40
            },
            {
              pattern: "4",
              timeInSeconds: 45
            }
          ] as PlatesStreakingPattern[]
        },
        slides: {
          streakingPatterns: [
            {
              pattern: "slide_only",
              timeInSeconds: 60
            },
            {
              pattern: "slide_and_other",
              timeInSeconds: 30
            }
          ] as SlidesStreakingPattern[]
        },
        fte: {
          manualStreakingSecondsPerPlate: 60,
          screeningSecondsPerPlate: 10,
          readingSecondsPerPlate: 30,
          pickingSecondsPerPlate: 60,
          productivitySecondsPerPlate: 15,
          phenomatrixSecondsPer30Plates: 10,
          waspMinutesPerHour: 5,
          wasplabMinutesPerIncubatorPerDay: 5,
          radianMinutesPerDay: 20,
          colibriMinutesPerDay: 5,
          flowMinutesPerWorkingHour: 5
        }
      } as Settings,
      samplesPerDay: [
        {
          dayOfWeek: 1,
          samples: 0
        },
        {
          dayOfWeek: 2,
          samples: 0
        },
        {
          dayOfWeek: 3,
          samples: 0
        },
        {
          dayOfWeek: 4,
          samples: 0
        },
        {
          dayOfWeek: 5,
          samples: 0
        },
        {
          dayOfWeek: 6,
          samples: 0
        },
        {
          dayOfWeek: 0,
          samples: 0
        },
      ] as SamplePerDay[],
      growthTrends: {
        startYear: new Date().getFullYear(),
        endYear: new Date().getFullYear() + 3,
        yearOfReference: new Date().getFullYear() + 3,
        growthTrends: []
      } as GrowthTrends,
      fteHours: {
        wasp: {
          start: 8,
          end: 19
        },
        manualStreaking: {
          start: 8,
          end: 19
        },
        screening: {
          start: 8,
          end: 19
        },
        reading: {
          start: 8,
          end: 19
        },
        colibri: {
          start: 8,
          end: 19
        }
      },
      primaryProtocols: [] as PrimaryProtocol[],
      secondaryProtocols: [] as SecondaryProtocol[]
});

export default function appStorage() {
    /*
    const fetchData = async () => {
        state.loading = true;
        state.todos = await (await fetch(url)).json();
        state.loading = false;
    }
    */

    return {
        ...toRefs(state),
        //fetchData
    }
}