import { useCallback, useEffect, useRef } from "react";

export const useTextFadeIn = (
  duration: number,
  delay: number,
  value?: string | null
) => {
  const element = useRef<HTMLDivElement>(null);

  const handleDirection = (value: string | null | undefined) => {
    switch (value) {
      case "up":
        return "translate3d(0, 50%, 0)";
      case "down":
        return "translate3d(0, -150%, 0)";
      case "left":
        return "translate3d(50%, 0, 0)";
      case "right":
        return "translate3d(-50%, 0, 0)";
      default:
        return "";
    }
  };
  const FadeIn = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      const { current } = element;
      if (current && entry.isIntersecting) {
        current.style.transitionProperty = "all";
        current.style.opacity = "1";
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionDelay = `${delay}s`;
        current.style.transform = value ? "translate3d(0, 0, 0)" : "";
      } else if (current) {
        current.style.opacity = "0";
        current.style.transform = handleDirection(value);
      }
    },
    [duration, delay, value]
  );

  useEffect(() => {
    let observer: IntersectionObserver | undefined;
    if (element.current) {
      observer = new IntersectionObserver(FadeIn, { threshold: 0 });
      observer.observe(element.current);
    }
    return () => observer && observer.disconnect();
  }, [FadeIn]);

  return {
    ref: element,
    style: { opacity: 0, transform: handleDirection(value) },
  };
};
