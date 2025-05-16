'use client';

import * as Switch from '@radix-ui/react-switch';
import styled from 'styled-components';

interface Props {
  checked: boolean;
  onCheckedChange: () => void;
}

const StyledSwitch = styled(Switch.Root)`
  all: unset;
  width: 40px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 9999px;
  position: relative;
  cursor: pointer;
`;

const StyledThumb = styled(Switch.Thumb)`
  display: block;
  width: 18px;
  height: 18px;
  background-color: white;
  border-radius: 9999px;
  transition: transform 0.2s ease;
  transform: translateX(2px);

  &[data-state='checked'] {
    transform: translateX(20px);
  }
`;

export function ThemeSwitch({ checked, onCheckedChange }: Props) {
  return (
    <StyledSwitch checked={checked} onCheckedChange={onCheckedChange}>
      <StyledThumb />
    </StyledSwitch>
  );
}
