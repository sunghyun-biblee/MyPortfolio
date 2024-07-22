import { RefObject, useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import { NavState } from "recoil/portfolioAtoms";

export function useNavStateChange(
  TargetElement: RefObject<HTMLDivElement>,
  name: string
) {
  const element = TargetElement;
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
        threshold: 0.5,
      });
      observer.observe(element.current);
    }
    return () => observer?.disconnect();
  }, [ChangeState, element]);

  return navState;
}
