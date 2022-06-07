export type TableColumn<T> = {
	name: string;
	label: string;
	field: string | ((row: T) => unknown);
	required?: boolean;
	align?: "left" | "right" | "center";
	sortable?: boolean;
	sort?: (a: unknown, b: unknown, rowA: T, rowB: T) => number;
	sortOrder?: "ad" | "da";
	format?: (val: unknown, row: T) => unknown;
	style?: string | ((row: T) => string);
	classes?: string | ((row: T) => string);
	headerStyle?: string;
	headerClasses?: string;
  };

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
	id: string;
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
	hasID: boolean;
	hasAST: boolean;
	hasASTID: boolean;
	purityPlatesPercentage: number;
	subculturePercentage: number;
	brothsPercentage: number;
	volumes: number[];
}

export type SecondaryProtocol = {
	id: string;
	name: string;
	from: "ID" | "AST" | "ID & AST" | "Purity plates" | "Subculture" | "Broths";
	plates: number;
	platesO2: number;
	recordingO2: number;
	platesCO2: number;
	recordingCO2: number;
}

export type WeightedDayTimes = {
	dayOfWeek: number;
	timeInSeconds: number;
	samples: number;
	protocol?: string;
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

export type DailyData = {
	dayOfWeek: number;
	totalTime: number;
	percentage: number;
	totalSamples: number;
	isPeakDay: boolean;
}

export type DailyLoad = {
	weightedDailyActivities: WeightedDailyActivities[];
	peakDay: PeakDay;
	safetyMargin: number;
}

export type LineConfigProtocol = {
	name: string;
	samples: number;
	wasp1Percentage: number;
	wasp1Plates: number;
	wasp1Slides: number;
	wasp1Broths: number;
	wasp2Percentage: number;
	wasp2Plates: number;
	wasp2Slides: number;
	wasp2Broths: number;
	o2Loading: number;
	o2Recording: number;
	o2Unloading: number;
	co2Loading: number;
	co2Recording: number;
	co2Unloading: number;
}

export type LineConfig = {
	id: string;
	name: string;
	numberOfWasp: number;
	numberOfO2Incubator: number;
	numberOfCO2Incubator: number;
	collaborativeStation: boolean;
	radian: boolean;
	phenomatrix: boolean;
	waspOccupancyRate: number;
	wasplabOccupancyRate: number;
	protocols: LineConfigProtocol[];
}