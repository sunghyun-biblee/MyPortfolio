import { useRef } from "react";

export function useScrollMove(value: string) {
  const name = value;
  const element = useRef<HTMLDivElement>(null);
  const onMove = () => {
    element.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return { element, onMove, name };
}
