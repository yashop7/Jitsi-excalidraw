import React from "react";

/** noop polyfill for v17. Subset of API available */
function flushSyncPolyfill<T>(fn: () => T): T {
  return fn();
}

export const flushSync = (React as any).flushSync || flushSyncPolyfill; 