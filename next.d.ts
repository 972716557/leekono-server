// next.d.ts
import "next";

declare module "next" {
  interface DynamicRoutes {
    "/[lng]": { lng: string };
    "/[lng]/case": { lng: string };
    "/[lng]/about": { lng: string };
  }
}
