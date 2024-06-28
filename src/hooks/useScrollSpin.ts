import { useCallback, useEffect, useRef } from "react";

export function useScrollSpin(duration: number, delay: number) {
  const element = useRef<HTMLDivElement>(null);

  const onScroll = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      const { current } = element;
      if (current && entry.isIntersecting) {
        current.style.transitionProperty = "all";
        current.style.transitionDuration = `${duration}s`;
        // current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = "1";
        current.style.transform = "rotateY(0deg)";
      } else if (current) {
        current.style.opacity = "0";
        current.style.transform = "rotateY(180deg)";
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    let observer: IntersectionObserver | undefined;

    if (element.current) {
      observer = new IntersectionObserver(onScroll, { threshold: 0.7 });
      //   viewport에 0.7(70%)만큼 노출이 되면 onscroll 함수가 실행됨 이때 isIntersecting는 true가 됨
      observer.observe(element.current);
    }

    return () => observer && observer.disconnect();
    // unobserve(target) 은 특정 요소의 관찰을 중지시키지만
    // disconnect는 모든 요소의 관찰을 중지시킨다.
  }, [onScroll]);

  return {
    ref: element,
    style: { opacity: 0, transform: "rotateY(180deg)" },
  };
}
