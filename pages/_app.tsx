import { MenuItem } from "@/common/types";
import NavigationBar from "@/components/NavigationBar";
import "@/styles/globals.css";
import { appWithTranslation, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { AppProps } from "next/app";

const menuItems: MenuItem[] = [
  { label: "Homepage", href: "/" },
  { label: "Pricing", href: "/pricing" },
  {
    label: "About",
    href: "/about",
    subMenu: [
      { label: "The Company", href: "/company" },
      { label: "The Team", href: "/team" },
    ],
  },
  {
    label: "Legal",
    href: "/legal",
    subMenu: [
      { label: "Imprint", href: "/imprint" },
      { label: "T&Cs", href: "/terms" },
    ],
  },
];

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationBar menuItems={menuItems} />
      <Component {...pageProps} />
    </>
  );
}

export default App;
