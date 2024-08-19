import { PropsWithChildren } from 'react';
import cn from 'classnames';

type Props = {
  className?: string;
};

export const PageContainer = ({ children, className }: PropsWithChildren<Props>) => {
  return <div className={cn('flex flex-col gap-10', className)}>{children}</div>;
};

export const Section = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col gap-4">{children}</div>;
};

export const Lockup = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};

export const Condensed = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col gap-1">{children}</div>;
};
