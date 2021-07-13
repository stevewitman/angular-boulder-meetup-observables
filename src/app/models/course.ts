export interface Course {
  category: string;
  code: string;
  title: string;
  description: string;
  sections: Section[];
}

export interface Section {
  classNumber: string;
  section: string;
  type: string;
  days: string;
  time: string;
  instructor: string;
  status: 'Open' | 'Full' | '';
}