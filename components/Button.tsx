import { TamaguiElement } from '@tamagui/core';
import { forwardRef, LegacyRef } from 'react';
import { Button as TButton } from 'tamagui';

interface ButtonProps extends React.ComponentProps<typeof TButton> {
  children: React.ReactNode;
  ref: React.Ref<HTMLButtonElement>;
  marginTop?: number;
  theme?: string;
}

const Button = forwardRef(({ children, marginTop, theme, ...props }: ButtonProps, ref: LegacyRef<TamaguiElement>) => {
  return (
    <TButton
      {...props}
      ref={ref}
      theme={theme || 'blue'}
      size="$3"
      marginTop={marginTop}
      style={{
        borderRadius: 4,
        paddingTop: 4,
        paddingBottom: 4,
        height: 40,
      }}>
      {children}
    </TButton>
  );
});

export default Button;
