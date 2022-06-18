import { DailyData, GrowthTrends, LineConfig, PrimaryProtocol, SamplePerDay, Settings, WeightedDailyActivities, WeightedDayTimes } from "./types";

function getYearIncrement(data: GrowthTrends): number {
    const referenceIndex = data.yearOfReference - data.startYear;
    const increments = data.growthTrends.splice(0, referenceIndex);
    if (increments.length > 0) {
        const yearIncrement = increments
            .reduce((a, b) => a + b);
        return yearIncrement;
    }
    return 0;
}

export function getWeekDays(locale?: string)
{
    const baseDate = new Date(Date.UTC(2017, 0, 1)); // just a Sunday
    const weekDays = [];
    for(let i = 0; i < 7; i++)
    {       
        weekDays.push(baseDate.toLocaleDateString(locale, { weekday: 'long' }));
        baseDate.setDate(baseDate.getDate() + 1);       
    }
    return weekDays;
}

export function getWeightedDaysTimesInSeconds(
    params: {
        growthTrends: GrowthTrends;
        protocols: PrimaryProtocol[];
        samplesPerDay: SamplePerDay[];
        settings: Settings;
    }
): { weightedDaysTimesInSeconds: WeightedDayTimes[], weightedDaysTimesInSecondsPerProtocol: WeightedDayTimes[] } {
    //const yearIncrement = getYearIncrement(params.growthTrends);

    const weightedDaysTimesInSeconds: WeightedDayTimes[] = [];
    const weightedDaysTimesInSecondsPerProtocol: WeightedDayTimes[] = [];

    params.protocols.forEach((protocol) => {

        const totalSamples = params.protocols
            .map((x) => x.samplesPerDayAvg)
            .reduce((a, b) => a + b);

        const platesOverflowAir: {
            dayOfWeek: number;
            samples: number;
        }[] = [];
        for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
            platesOverflowAir.push({
                dayOfWeek: dayOfWeek,
                samples: 0
            });
        }

        const platesOverflowCO2: {
            dayOfWeek: number;
            samples: number;
        }[] = [];
        for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
            platesOverflowCO2.push({
                dayOfWeek: dayOfWeek,
                samples: 0
            });
        }

        let airDayOffset= 0;
        const airReadHours = Math.max(
            ...(protocol.wasplabData.air.readHours.split(",").map((x => Number(x))) || [])
        );
        if (airReadHours > 24) {
            const tempDate = new Date(Date.UTC(2017, 0, 1)); // just a Sunday
            const endDate = new Date(
                tempDate.getTime() + airReadHours * 60 * 60 * 1000
            );
            airDayOffset = endDate.getDay() - tempDate.getDay();
            for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
                for (let d = 1; d <= airDayOffset; d++) {
                    let nextDay = dayOfWeek + d;
                    if (nextDay > 6) {
                        nextDay = 0;
                    }
                    const samplesPerDayIndex = platesOverflowAir.findIndex((x) => x.dayOfWeek == dayOfWeek);
                    if (samplesPerDayIndex >= 0) {
                        const nextDayIndex = platesOverflowAir.findIndex((x) => x.dayOfWeek == nextDay);
                        if (nextDayIndex > -1) {
                            const dayWeight = params.samplesPerDay.find((x) => x.dayOfWeek == dayOfWeek)?.samples || 0;
                            platesOverflowAir[nextDayIndex].samples += (protocol.wasplabData.air?.platesPerSample || 0) * (((protocol.samplesPerDayAvg) / totalSamples) * dayWeight);
                        }
                    }
                }
            }
        }
        console.log(platesOverflowAir)

        let co2DayOffset = 0;
        const co2ReadHour = Math.max(
            ...(protocol.wasplabData.co2.readHours.split(",").map((x => Number(x))) || [])
        );
        if (co2ReadHour > 24) {
            const tempDate = new Date(Date.UTC(2017, 0, 1)); // just a Sunday
            const endDate = new Date(
                tempDate.getTime() + co2ReadHour * 60 * 60 * 1000
            );
            co2DayOffset = endDate.getDay() - tempDate.getDay();
            for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
                for (let d = 1; d <= co2DayOffset; d++) {
                    let nextDay = dayOfWeek + d;
                    if (nextDay > 6) {
                        nextDay = 0;
                    }
                    const samplesPerDayIndex = platesOverflowCO2.findIndex((x) => x.dayOfWeek == dayOfWeek);
                    if (samplesPerDayIndex >= 0) {
                        const dayWeight = params.samplesPerDay.find((x) => x.dayOfWeek == dayOfWeek)?.samples || 0;
                        const nextDayIndex = platesOverflowCO2.findIndex((x) => x.dayOfWeek == nextDay);
                        if (nextDayIndex > -1) {
                            platesOverflowCO2[nextDayIndex].samples += (protocol.wasplabData.co2?.platesPerSample || 0) * (((protocol.samplesPerDayAvg) / totalSamples) * dayWeight);
                        }                     
                    }
                }
            }
        }
        const platesUnloadingAir: {
            dayOfWeek: number;
            samples: number;
        }[] = [];
        for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
            let unloadingDay = dayOfWeek + airDayOffset;
            if(unloadingDay >= 7) {
                unloadingDay -= 7;
            }
            const dayWeight = params.samplesPerDay.find((x) => x.dayOfWeek == dayOfWeek)?.samples || 0;
            platesUnloadingAir.push({
                dayOfWeek: unloadingDay,
                samples: (protocol.wasplabData.air?.platesPerSample || 0) * (((protocol.samplesPerDayAvg) / totalSamples) * dayWeight)
            });
        }

        const platesUnloadingCO2: {
            dayOfWeek: number;
            samples: number;
        }[] = [];
        for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
            let unloadingDay = dayOfWeek + co2DayOffset;
            if(unloadingDay >= 7) {
                unloadingDay -= 7;
            }
            const dayWeight = params.samplesPerDay.find((x) => x.dayOfWeek == dayOfWeek)?.samples || 0;
            platesUnloadingCO2.push({
                dayOfWeek: unloadingDay,
                samples: (protocol.wasplabData.co2?.platesPerSample || 0) * (((protocol.samplesPerDayAvg) / totalSamples) * dayWeight)
            });
        }
        
        for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {

            const dayWeight = params.samplesPerDay.find((x) => x.dayOfWeek == dayOfWeek)?.samples || 0;

            const plates = (protocol.waspData.platesPerSample) * ((protocol.samplesPerDayAvg / totalSamples) * dayWeight);
            const totalPlates = Math.ceil(plates);
            const plateTime =
                params.settings.plates.streakingPatterns.find(
                    (x) => x.pattern == protocol.waspData.streakingPattern
                )?.timeInSeconds || 0;
            const totalPlatesTime = totalPlates * plateTime;

            const slides =
                protocol.waspData.slidesPerSample *
                ((protocol.samplesPerDayAvg / totalSamples) * dayWeight);
            const totalSlides = Math.ceil(slides);
            let slideTime = params.settings.slides.streakingPatterns.find((x) => x.pattern == "slide_and_other")?.timeInSeconds || 0;
            if (protocol.waspData.platesPerSample == 0) {
                slideTime = params.settings.slides.streakingPatterns.find((x) => x.pattern == "slide_only")?.timeInSeconds || 0;
            }
            const totalSlidesTime = totalSlides * slideTime;

            const broths =
                protocol.waspData.brothsPerSample *
                ((protocol.samplesPerDayAvg / totalSamples) * dayWeight);
            const totalBroths = Math.ceil(broths);
            const brothsTime = params.settings.broths.timeInSeconds;
            const totalBrothsTime = totalBroths * brothsTime;

            const loadingAirPlates =
                (protocol.wasplabData.air?.platesPerSample || 0) *
                ((protocol.samplesPerDayAvg / totalSamples) * dayWeight);
            const totalLoadingAirPlates = Math.ceil(loadingAirPlates);
            const loadingAirPlatesSpeed = params.settings.incubator.loadingPlatesPerHour;
            const totalLoadingAirPlatesTime =
                (totalLoadingAirPlates / loadingAirPlatesSpeed) * 3600;

            const loadingCO2Plates =
                (protocol.wasplabData.co2?.platesPerSample || 0) *
                ((protocol.samplesPerDayAvg / totalSamples) * dayWeight);
            const totalLoadingCO2Plates = Math.ceil(loadingCO2Plates);
            const loadingCO2PlatesSpeed = params.settings.incubator.loadingPlatesPerHour;
            const totalLoadingCO2PlatesTime =
                (totalLoadingCO2Plates / loadingCO2PlatesSpeed) * 3600;

            const recordingAirPlates =
                (protocol.wasplabData.air?.platesPerSample || 0) *
                (((protocol.samplesPerDayAvg) / totalSamples) * dayWeight);
            const totalRecordingAirPlates = Math.ceil(recordingAirPlates + (platesOverflowAir.find((x) => x.dayOfWeek == dayOfWeek)?.samples || 0));
            const recordingAirPlatesSpeed = params.settings.incubator.recordingPlatesPerHour;
            const totalRecordingAirPlatesTime =
                (totalRecordingAirPlates / recordingAirPlatesSpeed) * 3600;

            const recordingCO2Plates =
                ((protocol.wasplabData.co2?.platesPerSample || 0)) *
                (((protocol.samplesPerDayAvg) / totalSamples) * dayWeight);
            const totalRecordingCO2Plates = Math.ceil(recordingCO2Plates + (platesOverflowCO2.find((x) => x.dayOfWeek == dayOfWeek)?.samples || 0));
            const recordingCO2PlatesSpeed = params.settings.incubator.recordingPlatesPerHour;
            const totalRecordingCO2PlatesTime =
                (totalRecordingCO2Plates / recordingCO2PlatesSpeed) * 3600;

            let unloadingSpeed = params.settings.incubator.unloadingMultiplePlatesPerHour;
            if (params.settings.incubator.singleIncubator == true) {
                unloadingSpeed = params.settings.incubator.unloadingSinglePlatesPerHour;
            }

            const unloadingAirPlates = platesUnloadingAir.find((x) => x.dayOfWeek == dayOfWeek)?.samples || 0;
            const totalUnloadingAirPlates = Math.ceil(unloadingAirPlates);
            const unloadingAirPlatesSpeed = unloadingSpeed;
            const totalUnloadingAirPlatesTime =
                (totalUnloadingAirPlates / unloadingAirPlatesSpeed) * 3600;

            const unloadingCO2Plates = platesUnloadingCO2.find((x) => x.dayOfWeek == dayOfWeek)?.samples || 0;
            const totalUnloadingCO2Plates = Math.ceil(unloadingCO2Plates);
            const unloadingCO2PlatesSpeed = unloadingSpeed;
            const totalUnloadingCO2PlatesTime =
                (totalUnloadingCO2Plates / unloadingCO2PlatesSpeed) * 3600;

            const platesIndex = weightedDaysTimesInSeconds.findIndex(
                (x) => x.type == "plates" && x.dayOfWeek == dayOfWeek
            );
            if (platesIndex < 0) {
                weightedDaysTimesInSeconds.push({
                    type: "plates",
                    dayOfWeek: dayOfWeek,
                    timeInSeconds: totalPlatesTime,
                    samples: totalPlates,
                });
            } else {
                weightedDaysTimesInSeconds[platesIndex].timeInSeconds +=
                    totalPlatesTime;
            }
            weightedDaysTimesInSecondsPerProtocol.push({
                type: "plates",
                dayOfWeek: dayOfWeek,
                timeInSeconds: totalPlatesTime,
                samples: totalPlates,
                protocol: protocol.id
            });

            const slidesIndex = weightedDaysTimesInSeconds.findIndex(
                (x) => x.type == "slides" && x.dayOfWeek == dayOfWeek
            );
            if (slidesIndex < 0) {
                weightedDaysTimesInSeconds.push({
                    type: "slides",
                    dayOfWeek: dayOfWeek,
                    timeInSeconds: totalSlidesTime,
                    samples: totalSlides,
                });
            } else {
                weightedDaysTimesInSeconds[slidesIndex].timeInSeconds +=
                    totalSlidesTime;
            }
            weightedDaysTimesInSecondsPerProtocol.push({
                type: "slides",
                dayOfWeek: dayOfWeek,
                timeInSeconds: totalSlidesTime,
                samples: totalSlides,
                protocol: protocol.id
            });

            const brothsIndex = weightedDaysTimesInSeconds.findIndex(
                (x) => x.type == "broths" && x.dayOfWeek == dayOfWeek
            );
            if (brothsIndex < 0) {
                weightedDaysTimesInSeconds.push({
                    type: "broths",
                    dayOfWeek: dayOfWeek,
                    timeInSeconds: totalBrothsTime,
                    samples: totalBroths,
                });
            } else {
                weightedDaysTimesInSeconds[brothsIndex].timeInSeconds +=
                    totalBrothsTime;
            }
            weightedDaysTimesInSecondsPerProtocol.push({
                type: "broths",
                dayOfWeek: dayOfWeek,
                timeInSeconds: totalBrothsTime,
                samples: totalBroths,
                protocol: protocol.id
            });

            const loadingAirIndex = weightedDaysTimesInSeconds.findIndex(
                (x) => x.type == "loading_air" && x.dayOfWeek == dayOfWeek
            );
            if (loadingAirIndex < 0) {
                weightedDaysTimesInSeconds.push({
                    type: "loading_air",
                    dayOfWeek: dayOfWeek,
                    timeInSeconds: totalLoadingAirPlatesTime,
                    samples: totalLoadingAirPlates,
                });
            } else {
                weightedDaysTimesInSeconds[loadingAirIndex].timeInSeconds += totalLoadingAirPlatesTime;
            }
            weightedDaysTimesInSecondsPerProtocol.push({
                type: "loading_air",
                dayOfWeek: dayOfWeek,
                timeInSeconds: totalLoadingAirPlatesTime,
                samples: totalLoadingAirPlates,
                protocol: protocol.id
            });

            const loadingCO2Index = weightedDaysTimesInSeconds.findIndex(
                (x) => x.type == "loading_co2" && x.dayOfWeek == dayOfWeek
            );
            if (loadingCO2Index < 0) {
                weightedDaysTimesInSeconds.push({
                    type: "loading_co2",
                    dayOfWeek: dayOfWeek,
                    timeInSeconds: totalLoadingCO2PlatesTime,
                    samples: totalLoadingCO2Plates,
                });
            } else {
                weightedDaysTimesInSeconds[loadingCO2Index].timeInSeconds += totalLoadingCO2PlatesTime;
            }
            weightedDaysTimesInSecondsPerProtocol.push({
                type: "loading_co2",
                dayOfWeek: dayOfWeek,
                timeInSeconds: totalLoadingCO2PlatesTime,
                samples: totalLoadingCO2Plates,
                protocol: protocol.id
            });

            const recordingAirIndex = weightedDaysTimesInSeconds.findIndex(
                (x) => x.type == "recording_air" && x.dayOfWeek == dayOfWeek
            );
            if (recordingAirIndex < 0) {
                weightedDaysTimesInSeconds.push({
                    type: "recording_air",
                    dayOfWeek: dayOfWeek,
                    timeInSeconds: totalRecordingAirPlatesTime,
                    samples: totalRecordingAirPlates,
                });
            } else {
                weightedDaysTimesInSeconds[recordingAirIndex].timeInSeconds += totalRecordingAirPlatesTime;
            }
            weightedDaysTimesInSecondsPerProtocol.push({
                type: "recording_air",
                dayOfWeek: dayOfWeek,
                timeInSeconds: totalRecordingAirPlatesTime,
                samples: totalRecordingAirPlates,
                protocol: protocol.id
            });

            const recordingCO2Index = weightedDaysTimesInSeconds.findIndex(
                (x) => x.type == "recording_co2" && x.dayOfWeek == dayOfWeek
            );
            if (recordingCO2Index < 0) {
                weightedDaysTimesInSeconds.push({
                    type: "recording_co2",
                    dayOfWeek: dayOfWeek,
                    timeInSeconds: totalRecordingCO2PlatesTime,
                    samples: totalRecordingCO2Plates,
                });
            } else {
                weightedDaysTimesInSeconds[recordingCO2Index].timeInSeconds += totalRecordingCO2PlatesTime;
            }
            weightedDaysTimesInSecondsPerProtocol.push({
                type: "recording_co2",
                dayOfWeek: dayOfWeek,
                timeInSeconds: totalRecordingCO2PlatesTime,
                samples: totalRecordingCO2Plates,
                protocol: protocol.id
            });

            const unloadingAirIndex = weightedDaysTimesInSeconds.findIndex(
                (x) => x.type == "unloading_air" && x.dayOfWeek == dayOfWeek
            );
            if (unloadingAirIndex < 0) {
                weightedDaysTimesInSeconds.push({
                    type: "unloading_air",
                    dayOfWeek: dayOfWeek,
                    timeInSeconds: totalUnloadingAirPlatesTime,
                    samples: totalUnloadingAirPlates,
                });
            } else {
                weightedDaysTimesInSeconds[unloadingAirIndex].timeInSeconds += totalUnloadingAirPlatesTime;
            }
            weightedDaysTimesInSecondsPerProtocol.push({
                type: "unloading_air",
                dayOfWeek: dayOfWeek,
                timeInSeconds: totalUnloadingAirPlatesTime,
                samples: totalUnloadingAirPlates,
                protocol: protocol.id
            });

            const unloadingCO2Index = weightedDaysTimesInSeconds.findIndex(
                (x) => x.type == "unloading_co2" && x.dayOfWeek == dayOfWeek
            );
            if (unloadingCO2Index < 0) {
                weightedDaysTimesInSeconds.push({
                    type: "unloading_co2",
                    dayOfWeek: dayOfWeek,
                    timeInSeconds: totalUnloadingCO2PlatesTime,
                    samples: totalUnloadingCO2Plates,
                });
            } else {
                weightedDaysTimesInSeconds[unloadingCO2Index].timeInSeconds += totalUnloadingCO2PlatesTime;
            }
            weightedDaysTimesInSecondsPerProtocol.push({
                type: "unloading_co2",
                dayOfWeek: dayOfWeek,
                timeInSeconds: totalUnloadingCO2PlatesTime,
                samples: totalUnloadingCO2Plates,
                protocol: protocol.id
            });
        }
    });
    return {
        weightedDaysTimesInSeconds,
        weightedDaysTimesInSecondsPerProtocol
    }
}

export function getWeightedDailyActivities(data: WeightedDayTimes[]): WeightedDailyActivities[] {
    const res: WeightedDailyActivities[] = [];
    data.forEach((x) => {
        if (
            x.type == "plates" ||
            x.type == "slides" ||
            x.type == "broths"
        ) {
            const dayIndex = res.findIndex(
                (d) => d.dayOfWeek == x.dayOfWeek && d.type == "wasp"
            );
            if (dayIndex < 0) {
                res.push({
                    type: "wasp",
                    dayOfWeek: x.dayOfWeek,
                    timeInSeconds: x.timeInSeconds,
                });
            } else {
                res[dayIndex].timeInSeconds += x.timeInSeconds;
            }
        } else if (x.type == "loading_air") {
            const dayIndex = res.findIndex(
                (d) => d.dayOfWeek == x.dayOfWeek && d.type == "wasplab_air_loading"
            );
            if (dayIndex < 0) {
                res.push({
                    type: "wasplab_air_loading",
                    dayOfWeek: x.dayOfWeek,
                    timeInSeconds: x.timeInSeconds,
                });
            } else {
                if (res[dayIndex].timeInSeconds < x.timeInSeconds) {
                    res[dayIndex].timeInSeconds = x.timeInSeconds;
                }
            }
        } else if (x.type == "loading_co2") {
            const dayIndex = res.findIndex(
                (d) => d.dayOfWeek == x.dayOfWeek && d.type == "wasplab_co2_loading"
            );
            if (dayIndex < 0) {
                res.push({
                    type: "wasplab_co2_loading",
                    dayOfWeek: x.dayOfWeek,
                    timeInSeconds: x.timeInSeconds,
                });
            } else {
                if (res[dayIndex].timeInSeconds < x.timeInSeconds) {
                    res[dayIndex].timeInSeconds = x.timeInSeconds;
                }
            }
        } else if (x.type == "recording_air") {
            const dayIndex = res.findIndex(
                (d) => d.dayOfWeek == x.dayOfWeek && d.type == "wasplab_air_recording"
            );
            if (dayIndex < 0) {
                res.push({
                    type: "wasplab_air_recording",
                    dayOfWeek: x.dayOfWeek,
                    timeInSeconds: x.timeInSeconds,
                });
            } else {
                if (res[dayIndex].timeInSeconds < x.timeInSeconds) {
                    res[dayIndex].timeInSeconds = x.timeInSeconds;
                }
            }
        } else if (x.type == "recording_co2") {
            const dayIndex = res.findIndex(
                (d) => d.dayOfWeek == x.dayOfWeek && d.type == "wasplab_co2_recording"
            );
            if (dayIndex < 0) {
                res.push({
                    type: "wasplab_co2_recording",
                    dayOfWeek: x.dayOfWeek,
                    timeInSeconds: x.timeInSeconds,
                });
            } else {
                if (res[dayIndex].timeInSeconds < x.timeInSeconds) {
                    res[dayIndex].timeInSeconds = x.timeInSeconds;
                }
            }
        } else if (x.type == "unloading_air") {
            const dayIndex = res.findIndex(
                (d) => d.dayOfWeek == x.dayOfWeek && d.type == "wasplab_air_unloading"
            );
            if (dayIndex < 0) {
                res.push({
                    type: "wasplab_air_unloading",
                    dayOfWeek: x.dayOfWeek,
                    timeInSeconds: x.timeInSeconds,
                });
            } else {
                res[dayIndex].timeInSeconds += x.timeInSeconds;
            }
        } else if (x.type == "unloading_co2") {
            const dayIndex = res.findIndex(
                (d) => d.dayOfWeek == x.dayOfWeek && d.type == "wasplab_co2_unloading"
            );
            if (dayIndex < 0) {
                res.push({
                    type: "wasplab_co2_unloading",
                    dayOfWeek: x.dayOfWeek,
                    timeInSeconds: x.timeInSeconds,
                });
            } else {
                res[dayIndex].timeInSeconds += x.timeInSeconds;
            }
        }
    });
    return res;
}

function getDayTotalTime(params: { data: WeightedDailyActivities[], dayOfWeek: number, samples: number }): DailyData {
    const waspData =
        params.data.find((x) => x.type == "wasp")?.timeInSeconds || 0;

    const loadingAir =
        params.data.find((x) => x.type == "wasplab_air_loading")?.timeInSeconds || 0;
    const loadingCO2 =
        params.data.find((x) => x.type == "wasplab_co2_loading")?.timeInSeconds || 0;
    const loading = Math.max(loadingAir, loadingCO2);

    const recordingAir =
        params.data.find((x) => x.type == "wasplab_air_recording")?.timeInSeconds ||
        0;
    const recordingCO2 =
        params.data.find((x) => x.type == "wasplab_co2_recording")?.timeInSeconds ||
        0;
    const recording = Math.max(recordingAir, recordingCO2);

    const unloadingAir =
        params.data.find((x) => x.type == "wasplab_air_unloading")?.timeInSeconds ||
        0;
    const unloadingCO2 =
        params.data.find((x) => x.type == "wasplab_co2_unloading")?.timeInSeconds ||
        0;
    const unloading = unloadingAir + unloadingCO2;

    const dayValue =
        Math.max(waspData, loading) + recording + unloading;

    return {
        dayOfWeek: params.dayOfWeek,
        totalTime: dayValue,
        percentage: (dayValue / 3600) / 24 * 100,
        totalSamples: params.samples,
        isPeakDay: false
    }
}

export function getPeakDay(params: { data: WeightedDailyActivities[], samplesPerDay: SamplePerDay[] }): DailyData[] {
    const res: DailyData[] = [];

    for (let i = 0; i < 7; i++) {
        const dayData = params.data.filter((x) => x.dayOfWeek == i);
        const dailyData = getDayTotalTime({
            data: dayData,
            dayOfWeek: i,
            samples: params.samplesPerDay.find((x) => x.dayOfWeek == i)?.samples || 0
        });
        res.push(dailyData);
    }

    res.sort((a, b) => {
        return b.totalTime - a.totalTime;
    });
    res.forEach(element => {
        element.percentage = element.totalTime / res[0].totalTime * 100
        if(element.percentage == 100) {
            element.isPeakDay = true;
        }
    });
    res.sort((a, b) => {
        return a.dayOfWeek - b.dayOfWeek;
    });
    return res;
}

export function getPeakDayLineLoad(
    params: {
        dailyTimes: WeightedDailyActivities[];
        lines: LineConfig[];
    }
): WeightedDailyActivities[] {
    const res: WeightedDailyActivities[] = [];
    params.dailyTimes.forEach((dt) => {
        res.push({
            dayOfWeek: dt.dayOfWeek,
            timeInSeconds: dt.timeInSeconds,
            type: dt.type
        });
    });

    const waspData = params.lines.map((x) => x.numberOfWasp);
    const wasplabAirData = params.lines.map((x) => x.numberOfO2Incubator);
    const wasplabCO2Data = params.lines.map((x) => x.numberOfCO2Incubator);
    let totalNumberOfWasp = 0;
    if (waspData.length > 0) {
        totalNumberOfWasp = waspData.reduce((a, b) => a + b);
    }
    let totalNumberOfWaspLabAir = 0;
    if (wasplabAirData.length > 0) {
        totalNumberOfWaspLabAir = wasplabAirData.reduce((a, b) => a + b);
    }
    let totalNumberOfWaspLabCO2 = 0;
    if (wasplabCO2Data.length > 0) {
        totalNumberOfWaspLabCO2 = wasplabCO2Data.reduce((a, b) => a + b);
    }

    const waspTimeIndex = res.findIndex((x) => x.type == "wasp");
    if (waspTimeIndex > -1) {
        res[waspTimeIndex].timeInSeconds /= totalNumberOfWasp;
    }

    const waspLabAirLoadingTimeIndex = res.findIndex((x) => x.type == "wasplab_air_loading");
    if (waspLabAirLoadingTimeIndex > -1) {
        res[waspLabAirLoadingTimeIndex].timeInSeconds /= totalNumberOfWaspLabAir;
    }
    const waspLabAirRecordingTimeIndex = res.findIndex((x) => x.type == "wasplab_air_recording");
    if (waspLabAirRecordingTimeIndex > -1) {
        res[waspLabAirRecordingTimeIndex].timeInSeconds /= totalNumberOfWaspLabAir;
    }
    const waspLabAirUnloadingTimeIndex = res.findIndex((x) => x.type == "wasplab_air_unloading");
    if (waspLabAirUnloadingTimeIndex > -1) {
        res[waspLabAirUnloadingTimeIndex].timeInSeconds /= totalNumberOfWaspLabAir;
    }

    const waspLabCO2LoadingTimeIndex = res.findIndex((x) => x.type == "wasplab_co2_loading");
    if (waspLabCO2LoadingTimeIndex > -1) {
        res[waspLabCO2LoadingTimeIndex].timeInSeconds /= totalNumberOfWaspLabCO2;
    }
    const waspLabCO2RecordingTimeIndex = res.findIndex((x) => x.type == "wasplab_co2_recording");
    if (waspLabCO2RecordingTimeIndex > -1) {
        res[waspLabCO2RecordingTimeIndex].timeInSeconds /= totalNumberOfWaspLabCO2;
    }
    const waspLabCO2UnloadingTimeIndex = res.findIndex((x) => x.type == "wasplab_co2_unloading");
    if (waspLabCO2UnloadingTimeIndex > -1) {
        res[waspLabCO2UnloadingTimeIndex].timeInSeconds /= totalNumberOfWaspLabCO2;
    }

    return res;
}