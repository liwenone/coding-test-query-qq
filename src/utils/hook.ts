import { useEffect } from "react";

export function useDebounce(fn, deps: any[] = [], delay = 500) {
  useEffect(() => {
    const timer = setTimeout(fn, delay)
    return () => {
      clearTimeout(timer)
    }
  }, deps)
}
