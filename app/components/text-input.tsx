import { InputHTMLAttributes, useId } from 'react';
import cn from 'classnames';
import { Lockup } from './page-layout';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function TextInput({ type = 'text', className, label, id, ...rest }: Props) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  return (
    <Lockup>
      <label className="bold" htmlFor={inputId}>
        {label}
      </label>
      <input
        type={type}
        className={cn(
          'h-14 rounded-lg border border-slate-200 border-solid px-3 w-full outline-none focus:shadow-input-focus focus:shadow-blue-600',
          className,
        )}
        id={inputId}
        {...rest}
      />
    </Lockup>
  );
}
