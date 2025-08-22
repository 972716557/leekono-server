export interface Params {
  params: Promise<{ lng: string; id?: string }>;
}
export interface TempData {
  id?: string;
  lng: string;
}
