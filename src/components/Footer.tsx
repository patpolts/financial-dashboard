'use client';

import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer.background};
  color: ${({ theme }) => theme.colors.footer.text};
  padding: 1rem 2rem;
  text-align: center;
  position: relative;
  bottom: 0px;
  width: 100vw;
  height: 60px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} Dashboard Financeiro. Todos os direitos reservados.
    </FooterContainer>
  );
}
