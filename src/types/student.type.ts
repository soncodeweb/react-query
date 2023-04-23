export interface student {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  country: string;
  avatar: string;
}

export type Students = Pick<student, "id" | "email" | "avatar" | "last_name">[];
