import styled from "styled-components";

export const Container = styled.div`    
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
`;

export const LoginCard = styled.div`
    padding: 2em;
    background: ${({ theme }) => theme.colors.surface || "#fff"};
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

export const Title = styled.div`
    margin-bottom: 1.5rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.text};
`;