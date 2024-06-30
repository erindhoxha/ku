import { forwardRef } from 'react';
import { Button as TButton } from 'tamagui';

interface ButtonProps {
  children: React.ReactNode;
  ref: React.Ref<HTMLButtonElement>;
}

const Button = forwardRef(({ children, ref }: ButtonProps) => {
  return (
    <TButton ref={ref} theme="blue">
      {children}
    </TButton>
  );
});

export default Button;
