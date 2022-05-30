export type PlatesStreakingPattern = {
	pattern: string;
	timeInSeconds: number;
}

export type SlidesStreakingPattern = {
	pattern: string;
	timeInSeconds: number;
}

export type BrothSettings = {
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

export type ColibriSettings = {
	IDTimeInSeconds: number;
	ASTTimeInSeconds: number;
	ASTIDTimeInSeconds: number;
	ASTIDPurityTimeInSeconds: number;
	ASTPurityTimeInSeconds: number;
}

export type FlowSettings = {
	platesPerHour: number;
}

export type FteSettings = {
	manualStreakingSecondsPerPlate: number;
	screeningSecondsPerPlate: number;
	readingSecondsPerPlate: number;
	pickingSecondsPerPlate: number;
	productivitySecondsPerPlate: number;
	phenomatrixSecondsPer30Plates: number;
	waspMinutesPerHour: number;
	wasplabMinutesPerIncubatorPerDay: number;
	radianMinutesPerDay: number;
	colibriMinutesPerDay: number;
	flowMinutesPerWorkingHour: number;
}

export type Settings = {
	plates: {
		streakingPatterns: PlatesStreakingPattern[]
	},
	slides: {
		streakingPatterns: SlidesStreakingPattern[]
	},
	broths: BrothSettings,
	colibri: ColibriSettings;
	flow: FlowSettings;
	incubator: IncubatorSettings;
	fte: FteSettings;
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

export type PrimaryProtocol = {
	name: string;
	hasWasp: boolean;
	hasWasplab: boolean;
	pictureT0: boolean;
	samplesPerDayAvg: number;
	waspData: {
		streakingPattern: string;
		platesPerSample: number;
		slidesPerSample: number;
		brothsPerSample: number;
	},
	wasplabData: {
		air: {
			platesPerSample: number;
			readHours: string;
		},
		co2: {
			platesPerSample: number;
			readHours: string;
		}
	},
	negativityRate: number;
	hasID: number;
	hasAST: number;
	hasASTID: number;
	purityPlatesPercentage: number;
	subculturePercentage: number;
	brothsPercentage: number;
	volumes: [];
}

export type SecondaryProtocol = {
	name: string;
	from: number;
	plates: number;
	platesO2: number;
	recordingO2: number;
	platesCO2: number;
	recordingCO2: number;
}

export type WeightedDayTimes = {
	dayOfWeek: number;
	timeInSeconds: number;
	type: "plates" | "slides" | "broths" | "loading_air" | "recording_air" | "unloading_air" | "loading_co2" | "recording_co2" | "unloading_co2";
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
	numberOfO2Incubator: number;
	numberOfCO2Incubator:number;
	collaborativeStation: boolean;
	radian: boolean;
	phenomatrix: boolean;
	protocols: {
		name: string;
		wasp1Percentage: number;
		wasp2Percentage: number;
		o2Incubator1Percentage: number;
		o2Incubator2Percentage: number;
		o2Incubator3Percentage: number;
		co2Incubator1Percentage: number;
		co2Incubator2Percentage: number;
		co2Incubator3Percentage: number;
	}[]
}