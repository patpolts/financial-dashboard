import styled from "styled-components";
import {FcGoogle} from "react-icons/fc";

interface Props{
    onClick: () => void;
}

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.buttonText};
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
    filter: brightness(1.1);
    }
`;

export function GoogleButton({onClick}: Props){
    return(
        <Button onClick={onClick}>
            <FcGoogle size={20} style={{marginRight: 8}} />
            Entrar com o Google
        </Button>
    )
}