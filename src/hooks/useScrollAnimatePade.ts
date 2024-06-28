import { useCallback, useEffect, useRef } from "react";

export function useScrollAnimatePade(
  duration: number,
  delay: number,
  value: string
) {
  const element = useRef<HTMLDivElement>(null);

  const handleDirection = (value: string) => {
    switch (value) {
      case "up":
        return "translate3d(0, 50%, 0)";
      case "down":
        return "translate3d(0, -50%, 0)";
      case "left":
        return "translate3d(50%, 0, 0)";
      case "right":
        return "translate3d(-50%, 0, 0)";

      default:
        return "";
    }
  };
  //   useCallback을 사용한 이유는 일반함수로 구현시 duration,delay가 변경될때마다 새로운 함수를 생성하게되는데 이때 함수가 반복적으로 재생성되면, 이전에 생성된 함수 인스턴스들이 메모리에 남아 있을 수 있어, 메모리 사용량을 증가시키기떄문에 성능 최적화를 위해 사용한다
  const onScroll = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      const { current } = element;
      if (current && entry.isIntersecting) {
        current.style.transitionProperty = "all";
        current.style.transitionDuration = `${duration}s`;
        // current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = "1";
        current.style.transform = "translate3d(0, 0, 0)";
      } else if (current) {
        current.style.opacity = "0";
        current.style.transform = handleDirection(value);
      }
    },
    [delay, duration, value]
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
    style: { opacity: 0, transform: handleDirection(value) },
  };
}
