export interface Barangay {
  id: string;
  name: string;
  type: "Poblacion" | "Rural" | "Coastal" | "Upland";
  district: string;
  description?: string;
}

export type BarangayInfo = Barangay;

export const HIMAMAYLAN_BARANGAYS: Barangay[] = [
  {
    id: "brgy-1",
    name: "Barangay I (Poblacion)",
    type: "Poblacion",
    district: "Poblacion District",
    description: "City proper urban center, administrative and commercial zone.",
  },
  {
    id: "brgy-2",
    name: "Barangay II (Poblacion)",
    type: "Poblacion",
    district: "Poblacion District",
    description: "Central urban barangay adjacent to public market and civic grounds.",
  },
  {
    id: "brgy-3",
    name: "Barangay III (Poblacion)",
    type: "Poblacion",
    district: "Poblacion District",
    description: "Historic town core and residential community.",
  },
  {
    id: "brgy-4",
    name: "Barangay IV (Poblacion)",
    type: "Poblacion",
    district: "Poblacion District",
    description: "Urban community near Himamaylan River and coastal port area.",
  },
  {
    id: "aguisan",
    name: "Aguisan",
    type: "Coastal",
    district: "Coastal District",
    description: "Coastal barangay known for fisheries, seafood, and port facilities.",
  },
  {
    id: "buenavista",
    name: "Buenavista",
    type: "Upland",
    district: "Eastern / Upland District",
    description: "Expansive agricultural and upland community.",
  },
  {
    id: "cabadiangan",
    name: "Cabadiangan",
    type: "Upland",
    district: "Eastern / Upland District",
    description: "Fertile agricultural area with diverse farming communities.",
  },
  {
    id: "cabanbanan",
    name: "Cabanbanan",
    type: "Rural",
    district: "Central Rural District",
    description: "Agricultural barangay producing sugarcane and rice crops.",
  },
  {
    id: "carabalan",
    name: "Carabalan",
    type: "Upland",
    district: "Eastern / Upland District",
    description: "Major upland barangay rich in natural resources and ecotourism.",
  },
  {
    id: "caradio-an",
    name: "Caradio-an",
    type: "Rural",
    district: "Central Rural District",
    description: "Vibrant rural farming and residential barangay.",
  },
  {
    id: "libacao",
    name: "Libacao",
    type: "Rural",
    district: "Central Rural District",
    description: "Agricultural hub along major arterial transit corridors.",
  },
  {
    id: "mahalang",
    name: "Mahalang",
    type: "Upland",
    district: "Eastern / Upland District",
    description: "Scenic upland agricultural territory with productive farm lands.",
  },
  {
    id: "mambagaton",
    name: "Mambagaton",
    type: "Rural",
    district: "Central Rural District",
    description: "Thriving rural community near city boundaries.",
  },
  {
    id: "nabali-an",
    name: "Nabali-an",
    type: "Rural",
    district: "Central Rural District",
    description: "Agricultural barangay with active youth and farmer associations.",
  },
  {
    id: "san-antonio",
    name: "San Antonio",
    type: "Rural",
    district: "Northern District",
    description: "Growing residential and farming community.",
  },
  {
    id: "sara-et",
    name: "Sara-et",
    type: "Coastal",
    district: "Coastal District",
    description: "Coastal settlement with active aquaculture and fishing livelihood.",
  },
  {
    id: "su-ay",
    name: "Su-ay",
    type: "Coastal",
    district: "Southern Coastal District",
    description: "Major coastal barangay connecting northern and southern corridors.",
  },
  {
    id: "talaban",
    name: "Talaban",
    type: "Coastal",
    district: "Coastal District",
    description: "Coastal community with rich marine biodiversity and mangrove ecosystems.",
  },
  {
    id: "to-oy",
    name: "To-oy",
    type: "Rural",
    district: "Central Rural District",
    description: "Productive agricultural barangay with deep cultural heritage.",
  },
];
