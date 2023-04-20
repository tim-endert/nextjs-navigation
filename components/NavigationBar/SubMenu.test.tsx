import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { SubMenu } from "./SubMenu";
import { MenuItem } from "@/common/types";

describe("<SubMenu />", () => {
  const testMenuItems: MenuItem[] = [
    { label: "Test 1", href: "/item1" },
    { label: "Test 2", href: "/item2" },
    { label: "Test 3", href: "/item3" },
  ];

  test("renders SubMenu component correctly", () => {
    const { getByRole } = render(
      <SubMenu menu={testMenuItems} isOpen={true} />
    );
    const dropdown = getByRole("list");
    expect(dropdown).toBeInTheDocument();
  });

  test("displays correct menu items when isOpen prop is true", () => {
    const { getAllByRole } = render(
      <SubMenu menu={testMenuItems} isOpen={true} />
    );
    const dropdownItems = getAllByRole("link");
    expect(dropdownItems).toHaveLength(testMenuItems.length);
    dropdownItems.forEach((item, index) => {
      expect(item).toHaveTextContent(testMenuItems[index].label);
      expect(item).toHaveAttribute("href", testMenuItems[index].href);
    });
  });

  test("does not display dropdown when isOpen prop is false", () => {
    const { queryByRole } = render(
      <SubMenu menu={testMenuItems} isOpen={false} />
    );
    const dropdown = queryByRole("list");
    expect(dropdown).not.toBeInTheDocument();
  });
});
