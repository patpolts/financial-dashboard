'use client';

import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  position: absolute;
  bottom: 0px;
  width: 100vw;
`;

export default function Footer() {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} Dashboard Financeiro. Todos os direitos reservados.
    </FooterContainer>
  );
}
