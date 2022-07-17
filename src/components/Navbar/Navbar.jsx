import React, { useState, useEffect } from 'react'
import {
  LinksContainerStyled,
  LinkContainerStyled,
  LogoContainerStyled,
  NavbarContainerStyled,
  TitleStyled
} from './NavbarStyles'
import { Link } from 'react-router-dom';
import Logo from '../../assets/rhythmic-logo.png';
import { tabs } from '../../data/navbarTabs';

const Navbar = () => {
  return (
    <NavbarContainerStyled>
      <LogoContainerStyled>
        <Link to='/'>
          <img src={Logo} alt='logo-rhythmic' />
        </Link>
      </LogoContainerStyled>
      <LinksContainerStyled>
      {/* .map rendering of navbar links */}
      {
        tabs.map((tab, index) => {
          return (
            <div key={index}>
              <Link to={tab.path}>
                <LinkContainerStyled
                  whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                  }}
                >
                  <TitleStyled>
                    {tab.name}
                  </TitleStyled>
                </LinkContainerStyled>
              </Link>
            </div>
          )
        })
      }
      </LinksContainerStyled>
    </NavbarContainerStyled>
  )
}

export default Navbar