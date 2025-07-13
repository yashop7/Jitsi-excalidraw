import React, { useMemo } from "react";

/** noop polyfill for v17. Subset of API available */
function useDeferredValuePolyfill<T>(value: T): T {
  return useMemo(() => value, [value]);
}

export const useDeferredValue = React.useDeferredValue || useDeferredValuePolyfill; 