import React, { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
export const MarkDown = ({ children }: { children: ReactNode }) => {
  return <ReactMarkdown>{String(children)}</ReactMarkdown>;
};
