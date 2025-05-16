'use client';

import * as Switch from '@radix-ui/react-switch';
import styled from 'styled-components';

interface Props {
  checked: boolean;
  onCheckedChange: () => void;
}

const StyledSwitch = styled(Switch.Root)`
  all: unset;
  width: 42px;
  height: 22px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 9999px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: inline-flex;
  align-items: center;
`;

const StyledThumb = styled(Switch.Thumb)`
  display: block;
  width: 18px;
  height: 18px;
  background-color: ${({ theme }) => theme.colors.buttonText};
  border-radius: 9999px;
  transition: transform 0.2s ease;
  transform: translateX(2px);
  will-change: transform;

  &[data-state='checked'] {
    transform: translateX(22px);
  }
`;

export function ThemeSwitch({ checked, onCheckedChange }: Props) {
  return (
    <StyledSwitch checked={checked} onCheckedChange={onCheckedChange} >
      <StyledThumb />
    </StyledSwitch>
  );
}
