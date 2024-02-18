import { PropsWithChildren } from 'react';

export const PageContainer = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col gap-10">{children}</div>;
};

export const Section = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col gap-4">{children}</div>;
};

export const Lockup = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};
