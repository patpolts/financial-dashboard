'use client';

import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer.background};
  color: ${({ theme }) => theme.colors.footer.text};
  padding: 1rem 2rem;
  text-align: center;
  width: 100%;
  height: auto;
  box-sizing: content-box;

   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.5rem 1rem;
    min-width: 100%; 
  }
`;


const Copright = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.footer.text};
  margin: .5rem auto;
  width: 100vw;
  text-align: center;

   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Copright>
      © {new Date().getFullYear()} Painel Financeiro. Todos os direitos reservados. &nbsp;
        <a href="https://poltts.com.br" target="_blank" rel="noopener noreferrer">
          poltts
        </a>
      </Copright>
    </FooterContainer>
  );
}
