'use client';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import styled from 'styled-components';
import { signOut } from 'next-auth/react';

const SidebarContent = styled(NavigationMenu.Root)`
    position: relative;
    width: 200px;
    background-color: ${({ theme }) => theme.colors.sidebar.background};
    color: white;
    height: 100vh;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const NavItem = styled(NavigationMenu.Link)`
    cursor: pointer;
    padding: 0.5rem 0;
    font-weight: 500;

    &:hover {
        text-decoration: underline;
    }
`;

export default function Sidebar(){
    return(
        <SidebarContent orientation='vertical'>
            <NavItem href='/'>Dashboard</NavItem>
            <NavItem onClick={() => signOut()}>Sair</NavItem>
        </SidebarContent>
    )
}