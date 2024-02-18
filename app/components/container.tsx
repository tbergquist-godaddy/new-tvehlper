import { ReactNode } from 'react';
import cn from 'classnames';

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return <div className={cn('container px-4 mx-auto', className)}>{children}</div>;
}
