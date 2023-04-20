import React from "react";
import styled from "styled-components";
import { SubMenu } from "./SubMenu";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { MenuItem } from "@/common/types";
import { usePathname } from "next/navigation";

const StyledNavItem = styled.button<{ selected?: boolean }>`
  display: flex;
  position: relative;

  cursor: pointer;

  color: white;
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 8px;
  text-decoration: none;
  text-underline-offset: 8px;
  font-family: "Space Grotesk", sans-serif;
  border: 0;

  $:hover {
    background: #5b4b8a;
  }

  background: ${({ selected }) => (selected ? "white" : "transparent")};
  color: ${({ selected }) => (selected ? "black" : "white")};
`;

const ChevronWrapper = styled.div<{ isOpened: boolean }>`
  heigth: 18px;
  width: 18px;
  transition: transform 300ms ease-in-out;
  margin-left: 8px;

  ${({ isOpened }) => isOpened && "transform: rotate(180deg)"}
`;

interface NavItemProps {
  item: MenuItem;
  isOpened: boolean;
  onClick: () => void;
}

const NavItem = ({ item, isOpened, onClick }: NavItemProps) => {
  const { href, label, subMenu } = item;
  const currentPath = usePathname();
  const isCurrentPage = currentPath === href;

  return subMenu ? (
    <StyledNavItem selected={isCurrentPage} onClick={onClick}>
      {label}
      <>
        <div>
          <ChevronWrapper isOpened={isOpened}>
            <ChevronDownIcon />
          </ChevronWrapper>
        </div>
        <SubMenu isOpen={isOpened} menu={subMenu} />
      </>
    </StyledNavItem>
  ) : (
    <StyledNavItem selected={isCurrentPage} as="a" href={href} id="menu-button">
      {label}
    </StyledNavItem>
  );
};

export default NavItem;
