import { colors } from "@/common/colors";
import styled from "styled-components";

const HeroBanner = styled.div`
  background: ${colors.superDark};
  height: 50vh;
  display: flex;
  padding: 0 32px;
`;

const Headline = styled.h1`
  color: ${colors.primary};
  font-size: 48px;
  align-self: flex-end;
  font-weight: black;
  font-family: "Space Grotesk", sans-serif;
`;

interface HerobannerProps {
  title: string;
}
const Herobanner = ({ title }: HerobannerProps) => {
  return (
    <HeroBanner data-testid="hero-banner">
      <Headline>{title}</Headline>
    </HeroBanner>
  );
};

export default Herobanner;
