import { PropsWithChildren } from "react";

export const PageContainer = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col gap-10">{children}</div>;
};
