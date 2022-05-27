import { GrowthTrends, LineConfig, PeakDay, PrimaryProtocol, SamplePerDay, Settings, WeightedDailyActivities, WeightedDayTimes } from "./types";

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

export function getWeightedDaysTimesInSeconds(
    params: {
        growthTrends: GrowthTrends;
        protocols: PrimaryProtocol[];
        samplesPerDay: SamplePerDay[];
        settings: Settings;
    }
): WeightedDayTimes[] {
    const yearIncrement = getYearIncrement(params.growthTrends);

    const weightedDaysTimesInSeconds: WeightedDayTimes[] = [];

    params.protocols.forEach((protocol) => {
        const airMaxReadHour = Math.max(
            ...(protocol.wasplabData.air.readHours.split(",").map((x => Number(x))) || [])
        );
        let dayOffset = 0;
        if (airMaxReadHour > 24) {
            const tempDate = new Date();
            const endDate = new Date(
                tempDate.getTime() + airMaxReadHour * 60 * 60 * 1000
            );
            dayOffset = endDate.getDay() - tempDate.getDay();
            for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
                let nextDay = dayOfWeek + 1;
                if (nextDay > 6) {
                    nextDay = 0;
                }
                const samplesPerDayIndex = params.samplesPerDay.findIndex(
                    (x) => x.dayOfWeek == dayOfWeek
                );
                if (samplesPerDayIndex >= 0) {
                    for (let d = 1; d <= dayOffset; d++) {
                        const nextDayIndex = params.samplesPerDay.findIndex(
                            (x) => x.dayOfWeek == dayOfWeek + d
                        );
                        if (nextDayIndex > -1) {
                            params.samplesPerDay[nextDayIndex].samples +=
                                params.samplesPerDay[samplesPerDayIndex].samples;
                        }
                    }
                }
            }
        }

        // for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
        //     let previousDay = dayOfWeek - 1;
        //     if (dayOfWeek == 0) {
        //         previousDay = 7;
        //     }
        //     const previousDaySamples =
        //         params.samplesPerDay.find((x) => x.dayOfWeek == previousDay)?.samples ||
        //         0;
        //     const samplesPerDayIndex = params.samplesPerDay.findIndex(
        //         (x) => x.dayOfWeek == dayOfWeek
        //     );
        //     if (samplesPerDayIndex >= 0) {
        //         params.samplesPerDay[samplesPerDayIndex].samples +=
        //             previousDaySamples *
        //             ((protocol.wasplabData.subculture.airPlates ||
        //                 0) +
        //                 (protocol.wasplabData.subculture.co2Plates ||
        //                     0));
        //     }
        // }

        for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
            const dayWeight =
                params.samplesPerDay.find((x) => x.dayOfWeek == dayOfWeek)?.samples ||
                0;
            const dayWeightYear = dayWeight + dayWeight * yearIncrement;
            const totalSamples = params.protocols
                .map((x) => x.samplesPerDayAvg)
                .reduce((a, b) => a + b);

            const plates =
                protocol.waspData.platesPerSample *
                ((protocol.samplesPerDayAvg / totalSamples) * dayWeightYear);
            const totalPlates = Math.ceil(plates);
            const plateTime =
                params.settings.plates.streakingPatterns.find(
                    (x) => x.pattern == protocol.waspData.streakingPattern
                )?.timeInSeconds || 0;
            const totalPlatesTime = totalPlates * plateTime;

            const slides =
                protocol.waspData.slidesPerSample *
                ((protocol.samplesPerDayAvg / totalSamples) * dayWeightYear);
            const totalSlides = Math.ceil(slides);
            const slideTime =
                params.settings.slides.streakingPatterns.find(
                    (x) => x.pattern == protocol.waspData.streakingPattern
                )?.timeInSeconds || 0;
            const totalSlidesTime = totalSlides * slideTime;

            const broths =
                protocol.waspData.brothsPerSample *
                ((protocol.samplesPerDayAvg / totalSamples) * dayWeightYear);
            const totalBroths = Math.ceil(broths);
            const brothsTime = params.settings.broths.timeInSeconds;
            const totalBrothsTime = totalBroths * brothsTime;

            const loadingAirPlates =
                (protocol.wasplabData.air?.platesPerSample || 0) *
                ((protocol.samplesPerDayAvg / totalSamples) * dayWeightYear);
            const totalLoadingAirPlates = Math.ceil(loadingAirPlates);
            const loadingAirPlatesSpeed = params.settings.incubator.loadingPlatesPerHour;
            const totalLoadingAirPlatesTime =
                (totalLoadingAirPlates / loadingAirPlatesSpeed) * 3600;

            const loadingCO2Plates =
                (protocol.wasplabData.co2?.platesPerSample || 0) *
                ((protocol.samplesPerDayAvg / totalSamples) * dayWeightYear);
            const totalLoadingCO2Plates = Math.ceil(loadingCO2Plates);
            const loadingCO2PlatesSpeed = params.settings.incubator.loadingPlatesPerHour;
            const totalLoadingCO2PlatesTime =
                (totalLoadingCO2Plates / loadingCO2PlatesSpeed) * 3600;

            const recordingAirPlates =
                (protocol.wasplabData.air?.platesPerSample || 0) *
                ((protocol.samplesPerDayAvg / totalSamples) * dayWeightYear);
            const totalRecordingAirPlates = Math.ceil(recordingAirPlates);
            const recordingAirPlatesSpeed = params.settings.incubator.recordingPlatesPerHour;
            const totalRecordingAirPlatesTime =
                (totalRecordingAirPlates / recordingAirPlatesSpeed) * 3600;

            const recordingCO2Plates =
                (protocol.wasplabData.co2?.platesPerSample || 0) *
                ((protocol.samplesPerDayAvg / totalSamples) * dayWeightYear);
            const totalRecordingCO2Plates = Math.ceil(recordingCO2Plates);
            const recordingCO2PlatesSpeed = params.settings.incubator.recordingPlatesPerHour;
            const totalRecordingCO2PlatesTime =
                (totalRecordingCO2Plates / recordingCO2PlatesSpeed) * 3600;

            let unloadingSpeed = params.settings.incubator.unloadingMultiplePlatesPerHour;
            if (params.settings.incubator.singleIncubator == true) {
                unloadingSpeed = params.settings.incubator.unloadingSinglePlatesPerHour;
            }
            const unloadingAirPlates =
                (protocol.wasplabData.air?.platesPerSample || 0) *
                ((protocol.samplesPerDayAvg / totalSamples) * dayWeightYear);
            const totalUnloadingAirPlates = Math.ceil(unloadingAirPlates);
            const unloadingAirPlatesSpeed = unloadingSpeed;
            const totalUnloadingAirPlatesTime =
                (totalUnloadingAirPlates / unloadingAirPlatesSpeed) * 3600;

            const unloadingCO2Plates =
                (protocol.wasplabData.co2?.platesPerSample || 0) *
                ((protocol.samplesPerDayAvg / totalSamples) * dayWeightYear);
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
                });
            } else {
                weightedDaysTimesInSeconds[platesIndex].timeInSeconds +=
                    totalPlatesTime;
            }

            const slidesIndex = weightedDaysTimesInSeconds.findIndex(
                (x) => x.type == "slides" && x.dayOfWeek == dayOfWeek
            );
            if (slidesIndex < 0) {
                weightedDaysTimesInSeconds.push({
                    type: "slides",
                    dayOfWeek: dayOfWeek,
                    timeInSeconds: totalSlidesTime,
                });
            } else {
                weightedDaysTimesInSeconds[slidesIndex].timeInSeconds +=
                    totalSlidesTime;
            }

            const brothsIndex = weightedDaysTimesInSeconds.findIndex(
                (x) => x.type == "broths" && x.dayOfWeek == dayOfWeek
            );
            if (brothsIndex < 0) {
                weightedDaysTimesInSeconds.push({
                    type: "broths",
                    dayOfWeek: dayOfWeek,
                    timeInSeconds: totalBrothsTime,
                });
            } else {
                weightedDaysTimesInSeconds[brothsIndex].timeInSeconds +=
                    totalBrothsTime;
            }

            const loadingAirIndex = weightedDaysTimesInSeconds.findIndex(
                (x) => x.type == "loading_air" && x.dayOfWeek == dayOfWeek
            );
            if (loadingAirIndex < 0) {
                weightedDaysTimesInSeconds.push({
                    type: "loading_air",
                    dayOfWeek: dayOfWeek,
                    timeInSeconds: totalLoadingAirPlatesTime,
                });
            } else {
                if (
                    weightedDaysTimesInSeconds[loadingAirIndex].timeInSeconds <
                    totalLoadingAirPlatesTime
                ) {
                    weightedDaysTimesInSeconds[loadingAirIndex].timeInSeconds =
                        totalLoadingAirPlatesTime;
                }
            }

            const loadingCO2Index = weightedDaysTimesInSeconds.findIndex(
                (x) => x.type == "loading_co2" && x.dayOfWeek == dayOfWeek
            );
            if (loadingCO2Index < 0) {
                weightedDaysTimesInSeconds.push({
                    type: "loading_co2",
                    dayOfWeek: dayOfWeek,
                    timeInSeconds: totalLoadingCO2PlatesTime,
                });
            } else {
                if (
                    weightedDaysTimesInSeconds[loadingCO2Index].timeInSeconds <
                    totalLoadingCO2PlatesTime
                ) {
                    weightedDaysTimesInSeconds[loadingCO2Index].timeInSeconds =
                        totalLoadingCO2PlatesTime;
                }
            }

            const recordingAirIndex = weightedDaysTimesInSeconds.findIndex(
                (x) => x.type == "recording_air" && x.dayOfWeek == dayOfWeek
            );
            if (recordingAirIndex < 0) {
                weightedDaysTimesInSeconds.push({
                    type: "recording_air",
                    dayOfWeek: dayOfWeek,
                    timeInSeconds: totalRecordingAirPlatesTime,
                });
            } else {
                if (
                    weightedDaysTimesInSeconds[recordingAirIndex].timeInSeconds <
                    totalRecordingAirPlatesTime
                ) {
                    weightedDaysTimesInSeconds[recordingAirIndex].timeInSeconds =
                        totalRecordingAirPlatesTime;
                }
            }

            const recordingCO2Index = weightedDaysTimesInSeconds.findIndex(
                (x) => x.type == "recording_co2" && x.dayOfWeek == dayOfWeek
            );
            if (recordingCO2Index < 0) {
                weightedDaysTimesInSeconds.push({
                    type: "recording_co2",
                    dayOfWeek: dayOfWeek,
                    timeInSeconds: totalRecordingCO2PlatesTime,
                });
            } else {
                if (
                    weightedDaysTimesInSeconds[recordingCO2Index].timeInSeconds <
                    totalRecordingCO2PlatesTime
                ) {
                    weightedDaysTimesInSeconds[recordingCO2Index].timeInSeconds =
                        totalRecordingCO2PlatesTime;
                }
            }

            const unloadingAirIndex = weightedDaysTimesInSeconds.findIndex(
                (x) => x.type == "unloading_air" && x.dayOfWeek == dayOfWeek
            );
            if (unloadingAirIndex < 0) {
                weightedDaysTimesInSeconds.push({
                    type: "unloading_air",
                    dayOfWeek: dayOfWeek,
                    timeInSeconds: totalUnloadingAirPlatesTime,
                });
            } else {
                if (
                    weightedDaysTimesInSeconds[unloadingAirIndex].timeInSeconds <
                    totalUnloadingAirPlatesTime
                ) {
                    weightedDaysTimesInSeconds[unloadingAirIndex].timeInSeconds =
                        totalUnloadingAirPlatesTime;
                }
            }

            const unloadingCO2Index = weightedDaysTimesInSeconds.findIndex(
                (x) => x.type == "unloading_co2" && x.dayOfWeek == dayOfWeek
            );
            if (unloadingCO2Index < 0) {
                weightedDaysTimesInSeconds.push({
                    type: "unloading_co2",
                    dayOfWeek: dayOfWeek,
                    timeInSeconds: totalUnloadingCO2PlatesTime,
                });
            } else {
                if (
                    weightedDaysTimesInSeconds[unloadingCO2Index].timeInSeconds <
                    totalUnloadingCO2PlatesTime
                ) {
                    weightedDaysTimesInSeconds[unloadingCO2Index].timeInSeconds =
                        totalUnloadingCO2PlatesTime;
                }
            }
        }
    });
    return weightedDaysTimesInSeconds;
}

export function getWeightedDailyActivities(data: WeightedDayTimes[]): WeightedDailyActivities[] {
    const res: WeightedDailyActivities[] = [];
    data.forEach((x) => {
        if (
            x.type == "plates" ||
            x.type == "slides" ||
            x.type == "broths" ||
            x.type == "discs"
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

export function getDayTotalTime(data: WeightedDailyActivities[]): number {
    const waspData =
        data.find((x) => x.type == "wasp")?.timeInSeconds || 0;

    const loadingAir =
        data.find((x) => x.type == "wasplab_air_loading")?.timeInSeconds || 0;
    const loadingCO2 =
        data.find((x) => x.type == "wasplab_co2_loading")?.timeInSeconds || 0;
    const loading = loadingAir + loadingCO2;

    const recordingAir =
        data.find((x) => x.type == "wasplab_air_recording")?.timeInSeconds ||
        0;
    const recordingCO2 =
        data.find((x) => x.type == "wasplab_co2_recording")?.timeInSeconds ||
        0;
    const recording = recordingAir + recordingCO2;

    const unloadingAir =
        data.find((x) => x.type == "wasplab_air_unloading")?.timeInSeconds ||
        0;
    const unloadingCO2 =
        data.find((x) => x.type == "wasplab_co2_unloading")?.timeInSeconds ||
        0;
    const unloading = unloadingAir + unloadingCO2;

    const dayValue =
        Math.max(...[waspData, loading]) + recording + unloading;
    return dayValue;
}

export function getPeakDay(data: WeightedDailyActivities[]): PeakDay {
    const res: PeakDay = {
        dayOfWeek: 0,
        hours: 0,
        percentage: 0,
        value: 0
    }
    for (let i = 0; i < 7; i++) {
        const dayData = data.filter((x) => x.dayOfWeek == i);
        const dayValue = getDayTotalTime(dayData);
        if (res.value < dayValue) {
            res.dayOfWeek = i;
            res.value = dayValue;
            res.hours = dayValue / 3600;
            res.percentage = (res.hours / 24) * 100;
        }
    }
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
    const wasplabAirData = params.lines.map((x) => x.numberOfAirWaspLab);
    const wasplabCO2Data = params.lines.map((x) => x.numberOfCO2WaspLab);
    let totalNumberOfWasp = 0;
    if(waspData.length > 0) {
        totalNumberOfWasp = waspData.reduce((a, b) => a + b);
    }  
    let totalNumberOfWaspLabAir = 0;
    if(wasplabAirData.length > 0) {
        totalNumberOfWaspLabAir = wasplabAirData.reduce((a, b) => a + b);
    }   
    let totalNumberOfWaspLabCO2 = 0;
    if(wasplabCO2Data.length > 0) {
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