export type PlatesStreakingPattern = {
	pattern: string;
	timeInSeconds: number;
}

export type SlidesStreakingPattern = {
	pattern: string;
	timeInSeconds: number;
}

export type IncubatorSettings = {
	loadingPlatesPerHour: number;
	recordingPlatesPerHour: number;
	unloadingSinglePlatesPerHour: number;
	unloadingMultiplePlatesPerHour: number;
	incubatorSafetyMargin: number;
	singleIncubator: boolean;
}

export type Settings = {
	plates: {
		streakingPatterns: PlatesStreakingPattern[]
	},
	slides: {
		streakingPatterns: SlidesStreakingPattern[]
	},
	broths: {
		timeInSeconds: number;
	},
	discs: {
		timeInSeconds: number;
	},
	incubator: IncubatorSettings;
}

export type SamplePerDay = {
	dayOfWeek: number;
	samples: number;
}

export type GrowthTrends = {
	startYear: number;
	endYear: number;
	yearOfReference: number;
	growthTrends: number[];
}

export type Protocol = {
	name: string;
	wasp: boolean;
	waspLab: boolean;
	pictureT0: boolean;
	samplesPerDayAvg: number;
	waspData: {
		streakingPattern: string;
		platesPerSample: number;
		slidesPerSample: number;
		brothsPerSample: number;
		discsPerSample: number;
	},
	waspLabData: {
		air: {
			platesPerSample: number;
			readHours: string;
		},
		co2: {
			platesPerSample: number;
			readHours: string;
		},
		subculture: {
			airPlates: number;
			co2Plates: number;
			streakedInWasp: boolean;
		}
	},
	volumes: number[]
}

export type WeightedDayTimes = {
	dayOfWeek: number;
	timeInSeconds: number;
	type: "plates" | "slides" | "broths" | "discs" | "loading_air" | "recording_air" | "unloading_air" | "loading_co2" | "recording_co2" | "unloading_co2";
};

export type WeightedDailyActivities = {
	type: "wasp" | "wasplab_air_loading" | "wasplab_co2_loading" | "wasplab_air_recording" | "wasplab_co2_recording" | "wasplab_air_unloading"| "wasplab_co2_unloading";
	dayOfWeek: number;
	timeInSeconds: number;
};

export type PeakDay = {
	dayOfWeek: number;
	value: number;
	hours: number;
	percentage: number;
}

export type DailyLoad = {
	weightedDailyActivities: WeightedDailyActivities[];
	peakDay: PeakDay;
	safetyMargin: number;
}

export type LineConfig = {
	id: string;
	numberOfWasp: number;
	numberOfAirWaspLab: number;
	numberOfCO2WaspLab: number;
}