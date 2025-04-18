export interface Academic {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  achievements?: string[];
  location?: string;
}
