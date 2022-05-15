import { createGlobalStyles } from "./global-styles";
import { useMemo } from "react";

export function useGlobalStyles() {
  return useMemo(() => ({ gs: createGlobalStyles() }), [createGlobalStyles]);
}
