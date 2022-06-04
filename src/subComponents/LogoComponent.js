import React from 'react'
import styled from 'styled-components';
import {DarkTheme} from '../components/Themes'


const Logo = styled.h1`
display : inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-famiLy: Pacifico, cursive;
position : fixed;
left: 2rem;
top: 2rem;
z-index: 3;

@media (max-width: 800px){
  display : inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-famiLy: Pacifico, cursive;
position : fixed;
left: 2rem;
top: 2rem;
font-size: 1.8rem;
z-index: 3;
}

@media (max-width: 525px){
  display : inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-famiLy: Pacifico, cursive;
position : fixed;
left: 0.5rem;
top: 2rem;
font-size: 1.4rem;
z-index: 3;
}

`
export const LogoComponent = (props) => {

  return (
    <div>
        <Logo color={props.theme}>
           Mills
        </Logo>
    </div>
  )
}
