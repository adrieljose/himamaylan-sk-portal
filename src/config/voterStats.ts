export interface BarangayVoterStat {
  rank: number;
  barangay: string;
  age15to17: number;
  age18to30: number;
  age31above: number;
  totalVoters: number;
  skVoters: number;
  regularVoters: number;
}

export interface VoterDemographicOverview {
  totalRegistered: number;
  skRegistered: number;
  regularRegistered: number;
  age15to17Total: number;
  age18to30Total: number;
  age31aboveTotal: number;
  highestBarangay: {
    name: string;
    total: number;
    skTotal: number;
    regularTotal: number;
  };
  lowestBarangay: {
    name: string;
    total: number;
    skTotal: number;
    regularTotal: number;
  };
  averagePerBarangay: number;
  skAveragePerBarangay: number;
  regularAveragePerBarangay: number;
  inequalityMultiplier: {
    overall: string;
    sk: string;
    regular: string;
  };
}

export const VOTER_STATISTICS_OVERVIEW: VoterDemographicOverview = {
  totalRegistered: 81821,
  skRegistered: 28368,
  regularRegistered: 78818,
  age15to17Total: 3003,
  age18to30Total: 25365,
  age31aboveTotal: 53453,
  highestBarangay: {
    name: "Aguisan",
    total: 8102,
    skTotal: 2549,
    regularTotal: 7811,
  },
  lowestBarangay: {
    name: "I-Poblacion",
    total: 1668,
    skTotal: 460,
    regularTotal: 1631,
  },
  averagePerBarangay: 4306,
  skAveragePerBarangay: 1493,
  regularAveragePerBarangay: 4148,
  inequalityMultiplier: {
    overall: "4.9×",
    sk: "5.5×",
    regular: "4.8×",
  },
};

export const BARANGAY_VOTER_STATS: BarangayVoterStat[] = [
  {
    rank: 1,
    barangay: "Aguisan",
    age15to17: 291,
    age18to30: 2258,
    age31above: 5553,
    totalVoters: 8102,
    skVoters: 2549,
    regularVoters: 7811,
  },
  {
    rank: 2,
    barangay: "Carabalan",
    age15to17: 182,
    age18to30: 2355,
    age31above: 4495,
    totalVoters: 7032,
    skVoters: 2537,
    regularVoters: 6850,
  },
  {
    rank: 3,
    barangay: "Caradio-An",
    age15to17: 241,
    age18to30: 2097,
    age31above: 4514,
    totalVoters: 6852,
    skVoters: 2338,
    regularVoters: 6611,
  },
  {
    rank: 4,
    barangay: "Talaban",
    age15to17: 148,
    age18to30: 1994,
    age31above: 4307,
    totalVoters: 6449,
    skVoters: 2142,
    regularVoters: 6301,
  },
  {
    rank: 5,
    barangay: "Buenavista",
    age15to17: 315,
    age18to30: 2132,
    age31above: 3677,
    totalVoters: 6124,
    skVoters: 2447,
    regularVoters: 5809,
  },
  {
    rank: 6,
    barangay: "Su-Ay",
    age15to17: 283,
    age18to30: 1749,
    age31above: 4060,
    totalVoters: 6092,
    skVoters: 2032,
    regularVoters: 5809,
  },
  {
    rank: 7,
    barangay: "III-Poblacion",
    age15to17: 121,
    age18to30: 1385,
    age31above: 2903,
    totalVoters: 4409,
    skVoters: 1506,
    regularVoters: 4288,
  },
  {
    rank: 8,
    barangay: "IV-Poblacion",
    age15to17: 138,
    age18to30: 1262,
    age31above: 2792,
    totalVoters: 4192,
    skVoters: 1400,
    regularVoters: 4054,
  },
  {
    rank: 9,
    barangay: "Cabadiangan",
    age15to17: 118,
    age18to30: 1296,
    age31above: 2490,
    totalVoters: 3904,
    skVoters: 1414,
    regularVoters: 3786,
  },
  {
    rank: 10,
    barangay: "Mambagaton",
    age15to17: 162,
    age18to30: 1109,
    age31above: 2422,
    totalVoters: 3693,
    skVoters: 1271,
    regularVoters: 3531,
  },
  {
    rank: 11,
    barangay: "Mahalang",
    age15to17: 155,
    age18to30: 1248,
    age31above: 2137,
    totalVoters: 3540,
    skVoters: 1403,
    regularVoters: 3385,
  },
  {
    rank: 12,
    barangay: "Libacao",
    age15to17: 164,
    age18to30: 1077,
    age31above: 2244,
    totalVoters: 3485,
    skVoters: 1241,
    regularVoters: 3321,
  },
  {
    rank: 13,
    barangay: "To-Oy",
    age15to17: 146,
    age18to30: 1012,
    age31above: 2163,
    totalVoters: 3321,
    skVoters: 1158,
    regularVoters: 3175,
  },
  {
    rank: 14,
    barangay: "San Antonio",
    age15to17: 176,
    age18to30: 1076,
    age31above: 1891,
    totalVoters: 3143,
    skVoters: 1252,
    regularVoters: 2967,
  },
  {
    rank: 15,
    barangay: "Sara-Et",
    age15to17: 85,
    age18to30: 911,
    age31above: 1986,
    totalVoters: 2982,
    skVoters: 996,
    regularVoters: 2897,
  },
  {
    rank: 16,
    barangay: "II-Poblacion",
    age15to17: 115,
    age18to30: 740,
    age31above: 1776,
    totalVoters: 2631,
    skVoters: 855,
    regularVoters: 2516,
  },
  {
    rank: 17,
    barangay: "Nabali-An",
    age15to17: 59,
    age18to30: 672,
    age31above: 1486,
    totalVoters: 2217,
    skVoters: 731,
    regularVoters: 2158,
  },
  {
    rank: 18,
    barangay: "Cabanbanan",
    age15to17: 67,
    age18to30: 569,
    age31above: 1349,
    totalVoters: 1985,
    skVoters: 636,
    regularVoters: 1918,
  },
  {
    rank: 19,
    barangay: "I-Poblacion",
    age15to17: 37,
    age18to30: 423,
    age31above: 1208,
    totalVoters: 1668,
    skVoters: 460,
    regularVoters: 1631,
  },
];
