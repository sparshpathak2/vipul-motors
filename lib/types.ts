export interface Query {
  id: string;
  name: string;
  email: string;
  mobile: string;
  location: string;
  message: string;
  source: string;
  createdAt: string;
}

export interface GetAllQueriesResponse {
  success: boolean;
  data: Query[];
}

export interface Banner {
  id: string;
  screen: "desktop" | "mobile";
  order: number;
  image?: { url: string; alt?: string | null } | null;
}