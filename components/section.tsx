import { PropsWithChildren } from "react";

export default function Section({ children }: PropsWithChildren) {
  return <div className="my-12 lg:my-28">{children}</div>;
}
