import { PropsWithChildren } from "react";

export default function Section({ children }: PropsWithChildren) {
  return <div className="my-12">{children}</div>;
}
