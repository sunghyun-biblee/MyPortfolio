import { useCallback, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { NavState } from "recoil/portfolioAtoms";

export function useScrollMove(value: string) {
  const name = value;
  const element = useRef<HTMLDivElement>(null);
  const onMove = () => {
    element.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const [navState, setNavState] = useRecoilState(NavState);
  const ChangeState = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      const { current } = element;
      if (current && entry.isIntersecting) {
        setNavState(name);
      }
    },
    [element, name, setNavState]
  );
  useEffect(() => {
    let observer: IntersectionObserver | undefined;
    if (element.current) {
      observer = new IntersectionObserver(ChangeState, {
        threshold: 0.8,
      });
      observer.observe(element.current);
    }
    return () => observer?.disconnect();
  }, [ChangeState, element]);
  return { element, onMove, name, navState };
}
