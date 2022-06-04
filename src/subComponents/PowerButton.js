//button de home
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { PowerBtn } from '../components/AllSvgs';


const Power = styled.button`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%, 0);

background-color: #18cedb;
padding: 0.3rem;
border-radius: 50%;
border: 1px solid #000;
width: 2.5rem;
height: 2.5rem;

diplay: flex;
justify-content: center;
aling-items: center;
z-index:30;

cursor: pointer;

&:hover{
    background-color:#18cedb;
    box-shadow: 0 0 55px 40px #18cedb;
    transition: all 0.6s ease;

&>*:first-child{
    text-decoration: none;
    color: inherit;
}
`
export const PowerButton = () => {
  return (
    <Power>
        <NavLink to="/">
           <PowerBtn width={30} height={30} />
        </NavLink>
    </Power>
  )
}
