import { InputHTMLAttributes, ReactNode, useId } from 'react';
import cn from 'classnames';

import { Lockup } from './page-layout';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: ReactNode;
}

export default function TextInput({ type = 'text', className, label, id, error, ...rest }: Props) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const hasError = error != null && error !== false;
  return (
    <Lockup>
      <label className="text-bold" htmlFor={inputId}>
        {label}
      </label>
      <div className="flex  flex-col gap-1">
        <input
          type={type}
          className={cn(
            {
              'border-red-600': hasError,
            },
            'h-14 rounded-lg border border-slate-200 border-solid px-3 w-full outline-none focus:shadow-input-focus focus:shadow-blue-600',

            className,
          )}
          id={inputId}
          {...rest}
          aria-describedby={hasError ? `${inputId}-error` : undefined}
          aria-invalid={hasError}
        />
        {hasError && (
          <div id={`${inputId}-error`} className="text-red-600">
            {error}
          </div>
        )}
      </div>
    </Lockup>
  );
}
