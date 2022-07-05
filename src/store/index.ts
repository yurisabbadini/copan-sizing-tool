import { reactive, toRefs } from "vue";

import { GrowthTrends, PlatesStreakingPattern, PrimaryProtocol, SecondaryProtocol, SamplePerDay, Settings, SlidesStreakingPattern, LineConfig, DailyData, WeightedDayTimes, ConfiguratorAdditionalItems } from "@/types";

const state = reactive({
    settings: {
        broths: {
          timeInSeconds: 70
        },
        radian: {
          timeInSeconds: 35
        },
        colibri: {
          IDTimeInSeconds: 60,
          ASTTimeInSeconds: 120,
          ASTIDTimeInSeconds: 175,
          ASTIDPurityTimeInSeconds: 240,
          ASTPurityTimeInSeconds: 180
        },
        flo: {
          platesPerHour: 550
        },
        incubator: {
          loadingPlatesPerHour: 125,
          recordingPlatesPerHour: 100,
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
          floMinutesPerWorkingHour: 5
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
        endYear: new Date().getFullYear(),
        yearOfReference: new Date().getFullYear(),
        growthTrends: [0, 0, 0]
      } as GrowthTrends,
      fteHours: {
        wasp: {
          start: 8,
          end: 18
        },
        manualStreaking: {
          start: 8,
          end: 18
        },
        screening: {
          start: 8,
          end: 18
        },
        reading: {
          start: 8,
          end: 18
        },
        colibri: {
          start: 8,
          end: 18
        }
      },
      primaryProtocols: [] as PrimaryProtocol[],
      secondaryProtocols: [] as SecondaryProtocol[],
      weightedDayTimes: [] as WeightedDayTimes[],
      weightedDayTimesPerProtocol: [] as WeightedDayTimes[],
      dailyData: [] as DailyData[],
      lines: [] as LineConfig[],
      colibriTime: 0 as number,
      configuratorAdditionalItems: {
        colibri: 0,
        flo: 0,
        manualStation: 0,
        pickingStation: 0,
        readingStation: 0
      } as ConfiguratorAdditionalItems
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