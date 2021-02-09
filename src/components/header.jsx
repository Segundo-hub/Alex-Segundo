import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { faHome, faCode, faHeadphonesAlt, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ContainerLarge } from "./container/ContainerLarge"
import { Helmet } from "react-helmet"

const Navigations = styled.header`
  width: 100%;
  background-color: #3434;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
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
  @media(min-width: 1200px){
    font-size: 1.8rem;
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
    height: calc(100vh - var(--header-height) - var(--header-pg-bt));
    ${FontIcon}{
      font-size: 1.75rem;
    }
  }
`;

const Caption = styled.h2`
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  color: slategrey;
`;


const Header = () => {
  const [active, setActive] = useState(false);
  const [title, setTitle] = useState('')

  const handleClick = () => {
    setActive(!active)
  }

  useEffect( () => {
    setTitle(document.title)
  })
  return(
  <>
    <Helmet>
      <body className={ active === true ? 'nav__is__activated' : false } />
    </Helmet>
    <Navigations className={ active === true ? 'active__nav' : false }>
      <ContainerLarge>
        <Routes>
          <TopNavigation>
            <ToggleIcon>
              <FontAwesomeIcon onClick={ handleClick } role="button" icon={ faBars } size="2x"/>
            </ToggleIcon>
            <Caption className="page-title__is__activated">{ title }</Caption>
          </TopNavigation>
          
            <RoutesContainer className={ active === true ? 'active' : false }>
              <Router to="/"><FontIcon icon={ faHome } />Home</Router>
              <Router to="/music"><FontIcon icon={ faHeadphonesAlt }/>Music</Router>
              <Router to="/dev"><FontIcon icon={ faCode }/>Develop</Router>
            </RoutesContainer>
        </Routes>
      </ContainerLarge>
    </Navigations>
  </>
)
}


export default Header
