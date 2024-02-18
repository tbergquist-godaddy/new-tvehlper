import { ButtonHTMLAttributes, Key } from 'react';
import cn from 'classnames';

const designClasses = {
  primary: 'bg-blue-600 text-white',
  secondary: 'bg-white text-black',
} as const;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  design?: keyof typeof designClasses;
}

export default function Button({ type = 'button', design = 'primary', className, ...rest }: Props) {
  return (
    <button
      type={type}
      className={cn('h-14 rounded-lg px-3', designClasses[design], className)}
      {...rest}
    />
  );
}
