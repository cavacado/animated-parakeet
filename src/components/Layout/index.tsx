import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import Toggle from "react-toggle";
import { GridContainer, Demarker } from "./styled";
import { Section as BaseSection, Footer } from "sgds-govtech-react";
import * as COLORS from "../../utils/colors";
import { format } from "date-fns";

interface LayoutProps {
  isLight: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const getLocaleDate = () => format(new Date(), "dd MMM yyyy");

export default function Layout(props: LayoutProps) {
  const { isLight, setTheme, children } = props;
  const history = useHistory();
  const location = useLocation();
  const footerDate = React.useMemo(getLocaleDate, []);
  return (
    <GridContainer>
      <Section isSmall>
        {location.pathname.includes("/details") && (
          <Back
            className="sgds-icon sgds-icon-arrow-left"
            onClick={() => history.replace("/")}
            data-testid="arrow-left"
          />
        )}
        <Head>Animated Parakeet</Head>
        <Toggle
          name="theme-toggle"
          defaultChecked={!isLight}
          onChange={() => setTheme(!isLight)}
          icons={false}
          aria-label={"toggle"}
        />
      </Section>
      {children}
      <div>
        <Demarker />
        <Footer title={"Singapore Design Systems"} date={footerDate} />
      </div>
    </GridContainer>
  );
}

const Section = styled(BaseSection)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(p) => p.theme.mastHead};
`;
const Head = styled.div`
  color: ${COLORS.WHITE1};
  font-size: 1.5em;
  font-weight: bold;
`;
const Back = styled.i`
  font-size: 50px;
  color: ${COLORS.WHITE1};
  cursor: pointer;
`;
