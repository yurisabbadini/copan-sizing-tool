import { reactive, toRefs } from "vue";

import { GrowthTrends, PlatesStreakingPattern, PrimaryProtocol, SecondaryProtocol, SamplePerDay, Settings, SlidesStreakingPattern, LineConfig, DailyData, WeightedDayTimes } from "@/types";

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
          samples: 250
        },
        {
          dayOfWeek: 2,
          samples: 200
        },
        {
          dayOfWeek: 3,
          samples: 230
        },
        {
          dayOfWeek: 4,
          samples: 180
        },
        {
          dayOfWeek: 5,
          samples: 100
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
        growthTrends: [5, 5, 10]
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
      primaryProtocols: [
        {
          id: "1",
          name: "urine",
          hasWasp: true,
          hasWasplab: true,
          pictureT0: true,
          samplesPerDayAvg: 100,
          waspData: {
            streakingPattern: "1",
            platesPerSample: 2,
            brothsPerSample: 1,
            slidesPerSample: 0
          },
          wasplabData: {
            air: {
              platesPerSample: 2,
              readHours: "16,40"
            },
            co2: {
              platesPerSample: 0,
              readHours: ""
            }
          },
          hasBrothsPercentage: false,
          astPercentage: 0,
          astIdPercentage: 0,
          idPercentage: 0,
          radianPercentage: 0,
          negativityRate: 0,
          totalPercentage: 0,
          hasPurityPlates: false,
          volumes: [],
        },
        {
          id: "2",
          name: "gola",
          hasWasp: true,
          hasWasplab: true,
          pictureT0: true,
          samplesPerDayAvg: 60,
          waspData: {
            streakingPattern: "2",
            platesPerSample: 1,
            brothsPerSample: 0,
            slidesPerSample: 1
          },
          wasplabData: {
            air: {
              platesPerSample: 0,
              readHours: ""
            },
            co2: {
              platesPerSample: 1,
              readHours: "20,40,60"
            }
          },
          hasBrothsPercentage: false,
          astPercentage: 0,
          astIdPercentage: 0,
          idPercentage: 0,
          radianPercentage: 0,
          negativityRate: 0,
          totalPercentage: 0,
          hasPurityPlates: false,
          volumes: [],
        },
        {
          id: "3",
          name: "feci",
          hasWasp: true,
          hasWasplab: true,
          pictureT0: true,
          samplesPerDayAvg: 10,
          waspData: {
            streakingPattern: "3",
            platesPerSample: 3,
            brothsPerSample: 0,
            slidesPerSample: 0
          },
          wasplabData: {
            air: {
              platesPerSample: 1,
              readHours: "24,48"
            },
            co2: {
              platesPerSample: 2,
              readHours: "16,40"
            }
          },
          hasBrothsPercentage: false,
          astPercentage: 0,
          astIdPercentage: 0,
          idPercentage: 0,
          radianPercentage: 0,
          totalPercentage: 0,
          negativityRate: 0,
          hasPurityPlates: false,
          volumes: [],
        }
      ] as PrimaryProtocol[],
      secondaryProtocols: [] as SecondaryProtocol[],
      weightedDayTimes: [] as WeightedDayTimes[],
      weightedDayTimesPerProtocol: [] as WeightedDayTimes[],
      dailyData: [] as DailyData[],
      lines: [] as LineConfig[],
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