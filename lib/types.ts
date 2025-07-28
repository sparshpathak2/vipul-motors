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