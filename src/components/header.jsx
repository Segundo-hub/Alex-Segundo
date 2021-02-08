import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { faHome, faCode, faHeadphonesAlt, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ContainerLarge } from "./container/ContainerLarge"

const Navigations = styled.header`
  width: 100%;
  background-color: #3434;
  @media screen and(min-width: var(--lg-breakpoint)){
    height: 100vh;
  }
  &.active__nav{
    padding-bottom: var(--header-pg-bt);
  }
`;
const FontIcon = styled(FontAwesomeIcon)`
  padding-right: .5rem;
  width: 2rem;
  color: grey;
  font-size: 1.35rem;
  transition: all .25s ease;
`;

const Router = styled(Link)`
  text-decoration: none;
  color: silver;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all .25s ease;
  :hover > ${FontIcon}{
    transform: scale(1.12);
    margin-right: 0.65rem;
  }
`;

const ToggleIcon = styled.span`
  display: inline-flex;
  width: 60px;
  justify-content: center;
  align-items: center;
`;

const TopNavigation = styled.div`
  height: var(--header-height);
  display: flex;
  align-items: center;
`;

const RoutesContainer = styled.div`
  display: flex;
  max-height: 0;
  overflow: hidden;
  visibility: hidden;
  transition: all .5s ease-in-out;
  justify-content: space-around;
  align-items: center;
`;

const Routes = styled.div`
  width: 100%;
  ${RoutesContainer}.active{
    visibility: visible;
    background-color: var(--deep-dark);
    max-height: 100vh;
    height: calc(100vh - var(--header-height) - var(--scroll-size) - var(--header-pg-bt));
    @media (min-width: var(--lg-breakpoint)){
      a{
        font-size: 2rem;
      }
    }
    a{
      font-size: 1.2rem;
    }
    ${FontIcon}{
      font-size: 2rem;
    }
  }
`;



const Header = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active)
  }
  return(
  <Navigations className={ active === true ? 'active__nav' : false }>
    <ContainerLarge>
      <Routes>
        <TopNavigation>
          <ToggleIcon>
            <FontAwesomeIcon onClick={ handleClick } role="button" icon={ faBars } size="2x"/>
          </ToggleIcon>
        </TopNavigation>
        
          <RoutesContainer className={ active === true ? 'active' : false }>
            <Router to="/"><FontIcon icon={ faHome } />Home</Router>
            <Router to="/music"><FontIcon icon={ faHeadphonesAlt }/>Music</Router>
            <Router to="/dev"><FontIcon icon={ faCode }/>Develop</Router>
          </RoutesContainer>
      </Routes>
    </ContainerLarge>
  </Navigations>
)
}


export default Header
