import { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const designClasses = {
  primary: 'bg-blue-600 text-white',
  secondary: 'bg-white text-black',
  danger: 'bg-red-600 text-white',
} as const;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  design?: keyof typeof designClasses;
  rounded?: boolean;
  isLoading?: boolean;
}

export default function Button({
  type = 'button',
  rounded = false,
  design = 'primary',
  isLoading = false,
  className,
  children,
  ...rest
}: Props) {
  return (
    <button
      type={type}
      className={cn(
        'h-14 px-3',
        {
          'rounded-full': rounded,
          'w-14': rounded,
          'flex': rounded,
          'items-center': rounded,
          'justify-center': rounded,
          'rounded-lg': !rounded,
        },
        designClasses[design],
        className,
      )}
      {...rest}
    >
      <div className={cn('flex', 'items-center', 'justify-start')}>
        {isLoading && <AiOutlineLoading3Quarters className="animate-spin" />}
        <div className="flex-1">{children}</div>
      </div>
    </button>
  );
}
