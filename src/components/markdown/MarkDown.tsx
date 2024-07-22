import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
export const MarkDown = ({ children }: { children: ReactNode }) => {
  return (
    <ReactMarkdown className="markDownContainer break-keep">
      {String(children)}
    </ReactMarkdown>
  );
};
