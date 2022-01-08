import React from 'react';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <div>
    <label htmlFor={props.id}>Email</label>
    <input ref={ref} {...props} />
  </div>
));

export default Input;
