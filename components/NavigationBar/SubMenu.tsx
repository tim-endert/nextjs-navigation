import { MenuItem } from "@/common/types";
import React from "react";
import styled from "styled-components";

const Dropdown = styled.ul<{ isOpened: boolean }>`
  z-index: 100;
  position: absolute;
  right: auto;
  border-radius: 8px;
  opacity: 0;
  visibility: hidden;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  display: inline-block;

  top: 30px;
  background: white;
  padding: 8px 12px;
  list-style-type: none;
  width: auto;

  transition: opacity ease 200ms;

  ${({ isOpened }) => isOpened && "opacity: 1; visibility: visible;"}
`;

const DropdownItem = styled.a`
  padding: 12px 12px;
  border-radius: 8px;

  display: block;

  text-decoration: none;
  color: black;

  &:hover,
  &:focus {
    background: lightgray;
  }
`;

interface SubMenuProps {
  menu: MenuItem[];
  isOpen: boolean;
}

export const SubMenu = ({ menu, isOpen }: SubMenuProps) => {
  return (
    <Dropdown isOpened={isOpen}>
      {menu.map(({ href, label }, index) => (
        <DropdownItem key={index} href={href}>
          {label}
        </DropdownItem>
      ))}
    </Dropdown>
  );
};
