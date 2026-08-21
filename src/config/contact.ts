export interface ElectionOfficeContact {
  officeName: string;
  agencyName: string;
  jurisdiction: string;
  address: {
    street: string;
    building: string;
    city: string;
    province: string;
    postalCode: string;
    region: string;
  };
  operatingHours: {
    days: string;
    hours: string;
    notes: string;
  };
  phones: {
    label: string;
    number: string;
  }[];
  emails: {
    label: string;
    address: string;
  }[];
  officialLinks: {
    label: string;
    url: string;
    type: "portal" | "facebook" | "twitter" | "instagram";
  }[];
  mapCoordinates: {
    lat: number;
    lng: number;
    embedUrl: string;
  };
}

export const CONTACT_CONFIG: ElectionOfficeContact = {
  officeName: "Office of the Election Officer, Himamaylan City",
  agencyName: "Commission on Elections (COMELEC)",
  jurisdiction: "City of Himamaylan, Negros Occidental (5th Congressional District)",
  address: {
    street: "Rizal Street, City Hall Compound",
    building: "Executive Building Ground Floor",
    city: "Himamaylan City",
    province: "Negros Occidental",
    postalCode: "6108",
    region: "Region VI (Western Visayas)",
  },
  operatingHours: {
    days: "Monday through Friday",
    hours: "8:00 AM to 5:00 PM",
    notes:
      "Voter registration periods may offer extended hours and scheduled weekend registrations as announced by COMELEC En Banc.",
  },
  phones: [
    {
      label: "Himamaylan Election Office Hotline",
      number: "(034) 388-3567",
    },
    {
      label: "COMELEC Negros Occidental Provincial Office",
      number: "(034) 433-2895",
    },
    {
      label: "COMELEC National Hotlines",
      number: "(02) 8527-1892 / (02) 8527-0841",
    },
  ],
  emails: [
    {
      label: "Himamaylan City Election Officer",
      address: "negocc.himamaylancity@comelec.gov.ph",
    },
    {
      label: "Negros Occidental Provincial Election Supervisor",
      address: "pes_negrosoccidental@comelec.gov.ph",
    },
    {
      label: "COMELEC Education & Information Department (EID)",
      address: "eid@comelec.gov.ph",
    },
  ],
  officialLinks: [
    {
      label: "Official COMELEC Web Portal",
      url: "https://comelec.gov.ph",
      type: "portal",
    },
    {
      label: "COMELEC Official Facebook Page",
      url: "https://www.facebook.com/comelec.ph",
      type: "facebook",
    },
    {
      label: "Himamaylan City LGU Official Portal",
      url: "https://himamaylancity.gov.ph",
      type: "portal",
    },
  ],
  mapCoordinates: {
    lat: 10.0984,
    lng: 122.8687,
    embedUrl:
      "https://maps.google.com/maps?q=Himamaylan%20City%20Hall,%20Negros%20Occidental&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
};
