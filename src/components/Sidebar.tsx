'use client';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import styled from 'styled-components';
import { LogoutButton } from './LogoutButton';
import { useEffect, useState } from 'react';
import { FiHome, FiLogOut, FiChevronRight, FiChevronLeft, FiPieChart  } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

const SidebarWrapper = styled.div<{ $collapsed: boolean }>`
  position: relative;
  width: ${({ $collapsed }) => ($collapsed ? '60px' : '200px')};
  background-color: ${({ theme }) => theme.colors.sidebar.background};
  color: ${({ theme }) => theme.colors.sidebar.text};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  font-size: 1.5rem;
  cursor: pointer;
  margin-bottom: 1rem;
`;

const NavItem = styled.a<{ $collapsed: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.75rem 1rem;
  font-weight: 500;
  gap: ${({ $collapsed }) => ($collapsed ? '0' : '0.75rem')};
  white-space: nowrap;
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }

  svg {
    font-size: 1.25rem;
  }
`;

const LogoutButtonStyled = styled(LogoutButton) <{ $collapsed: boolean }>`
  border: none;
  background: none;
  font: inherit;
  cursor: pointer;
  padding: 0.75rem 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.sidebar.text};
  display: flex;
  align-items: center;
  gap: ${({ $collapsed }) => ($collapsed ? '0' : '0.75rem')};

  &:hover {
    text-decoration: underline;
  }

  svg {
    font-size: 1.25rem;
  }
`;

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState<boolean | null>(null);
    const pathname = usePathname();

    const isHome = pathname === '/';
    const itemLink = isHome ? '/dashboard' : '/';
    const itemLabel = isHome ? 'Dashboard' : 'Home';
    const ItemIcon = isHome ? FiPieChart : FiHome;

    useEffect(() => {
        const saved = localStorage.getItem('sidebar-collapsed');
        setCollapsed(saved === 'true' ? true : false);
    }, []);

    const toggleCollapsed = () => {
        setCollapsed((prev) => {
            const newValue = !prev;
            localStorage.setItem('sidebar-collapsed', newValue.toString());
            return newValue;
        });
    };

    if (collapsed === null) return null;

    return (
        <SidebarWrapper $collapsed={collapsed}>
            <ToggleButton onClick={() => setCollapsed(!collapsed)} aria-label="Toggle sidebar">
                {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
            </ToggleButton>

            <NavItem href={itemLink} $collapsed={collapsed} title={itemLabel}>
                <ItemIcon />
                {!collapsed && itemLabel}
            </NavItem>

            <LogoutButtonStyled $collapsed={collapsed}>
                <FiLogOut />
                {!collapsed && 'Logout'}
            </LogoutButtonStyled>
        </SidebarWrapper>
    );
}
