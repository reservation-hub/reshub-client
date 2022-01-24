import React from 'react';
import { useController } from 'react-hook-form';
import { InputProps } from '../_PropsTypes';
import ErrorMessage from './ErrorMessage';

const TextArea = ({
  id,
  name,
  label,
  classes,
  control,
  autoComplete,
  error,
  errorText,
  fullWidth
}: InputProps) => {
  const { field } = useController({ name, control })
  const textArea = 'w-full p-3 h-[10rem] border resize-none'
  return (
    <div className={fullWidth ? `${classes} w-full` : classes}>
      <div className='text-[1.6rem'>
        <label htmlFor={id}>{label}</label>
        <textarea 
          id={id}
          autoComplete={autoComplete}
          className={error ? `${textArea} border-error-main` : textArea}
          {...field}
        />
      </div>
      {error && <ErrorMessage text={errorText} />}
    </div>
  )
};

export default TextArea;
