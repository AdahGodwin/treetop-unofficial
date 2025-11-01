export interface Experience {
  id: string;
  jobTitle: string;
  company: string;
  location: string;
  from: string; // e.g. "April 2022"
  to: string; // e.g. "November 2024" or "Present"
  description?: string;
}
export interface Resume {
  id: string;
  name: string;
  createdAt: string;
  previewUrl?: string;
  isActive?: boolean;
}

export interface Education {
  id: string;
  level: string;
  field: string;
  school: string;
  country?: string;
  city?: string;
  from?: string;
  to?: string;
  details?: string;
}

export interface Skill {
  id: string;
  name: string;
  years?: number;
}

export interface Certificate {
  id: string;
  name: string;
  issueDate: string;
  expiryDate?: string;
  doesNotExpire?: boolean;
  description: string;
}

export interface Profile {
  id: string;
  fullName: string;
  jobRole?: string;
  location?: string;
  phone?: string;
  summary?: string;
  employmentStatus?: string;
  dob?: string;
  educationLevel?: string;
  nyscStatus?: string;
  experiences?: Experience[];
  education?: Education[];
  skills?: Skill[];
  certificates?: Certificate[];
}

export const demoProfile: Profile = {
  id: "p1",
  fullName: "John Traxler Doe",
  jobRole: "Graphic Designer",
  location: "Lagos, Nigeria",
  phone: "+234 123 456 7890",
  summary: "Here are more information",
  employmentStatus: "Unemployed",
  dob: "2/6/1995",
  educationLevel: "BTech",
  nyscStatus: "Served",
  experiences: [
    {
      id: "e1",
      jobTitle: "Graphic Designer",
      company: "Alphalink Group",
      location: "Lagos",
      from: "April 2022",
      to: "November 2024",
      description:
        "Here are more information about my work experience at Alphalink Group",
    },
  ],
  education: [
    {
      id: "ed1",
      level: "BTech",
      field: "Architecture",
      school: "University of Lagos",
      country: "Nigeria",
      city: "Lagos",
      from: "2016",
      to: "2021",
      details: "Here are additional details for my educational experience",
    },
  ],
  skills: [{ id: "s1", name: "Graphic Designer", years: 8 }],
  certificates: [
    {
      id: "c1",
      name: "BTech Architecture",
      issueDate: "24/07/2021",
      doesNotExpire: true,
      expiryDate: "",
      description: "Brief description of certificate will show here",
    },
  ],
};

export const resumes: Resume[] = [
  {
    id: "r1",
    name: "Uploaded Resume",
    createdAt: "1 day ago",
    previewUrl: "",
    isActive: true,
  },
];
