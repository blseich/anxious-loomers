"use client";

import { useEffect, useRef, useState } from "react";

type UseInViewOnceOptions = Pick<
  IntersectionObserverInit,
  "root" | "rootMargin" | "threshold"
>;

export function useInViewOnce<T extends Element>(
  options: UseInViewOnceOptions = {}
) {
  const { root = null, rootMargin = "0px", threshold = 0 } = options;
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [root, rootMargin, threshold]);

  return { isInView, ref };
}
