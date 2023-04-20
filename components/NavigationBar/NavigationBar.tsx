import { Bars3Icon, FireIcon } from "@heroicons/react/24/solid";
import React from "react";
import styled from "styled-components";
import NavItem from "./NavItem";
import { MenuItem } from "@/common/types";
import { colors } from "@/common/colors";

const BrandWrapper = styled.a`
  color: ${colors.primary};
  height: 32px;
  width: 32px;

  &:hover,
  &:focus {
    color: ${colors.primaryHover};
  }
`;

const BurgerMenuWrapper = styled.div`
  height: 32px;
  width: 32px;
  color: ${colors.white};
  display: none;

  @media (max-width: 768px) {
    cursor: pointer;
    display: flex;
  }
`;

const NavItemsWrapper = styled.nav`
  background: ${colors.superDark};
  padding: 16px;
  display: flex;
  border-bottom: 1px solid ${colors.dark};
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

const NavItems = styled.div<{ mobileMenuIsOpen: boolean }>`
  display: flex;

  @media (max-width: 768px) {
    ${({ mobileMenuIsOpen }) =>
      mobileMenuIsOpen ? "flex-direction: column" : "display: none"}
  }
`;

interface NavigationBarProps {
  menuItems: MenuItem[];
}

const NavigationBar = ({ menuItems }: NavigationBarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [openedSubMenu, setOpenedSubMenu] = React.useState<null | number>(null);

  const toggleMenu = (idx: number) =>
    setOpenedSubMenu(idx === openedSubMenu ? null : idx);

  return (
    <NavItemsWrapper role="navigation">
      <BrandWrapper>
        <FireIcon />
      </BrandWrapper>
      <NavItems mobileMenuIsOpen={isMobileMenuOpen}>
        {menuItems.map((navItem, idx) => (
          <NavItem
            item={navItem}
            key={idx}
            isOpened={openedSubMenu === idx}
            onClick={() => toggleMenu(idx)}
          />
        ))}
      </NavItems>
      <BurgerMenuWrapper
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-expanded={isMobileMenuOpen}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      >
        <Bars3Icon />
      </BurgerMenuWrapper>
    </NavItemsWrapper>
  );
};

export default NavigationBar;
