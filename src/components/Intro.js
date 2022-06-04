import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import Iam from '../assets/Images/Avatar.png';

const Box = styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);

width: 65vw;
height: 55vh;
display: flex;

background: linear-gradient(
    to right,
    //linea blanca de la parte de abajo de la caja en el lugar obscuro
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
    background-size: 100% 2px;

    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};

    z-index:1;

    
`

const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

.imagen{
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 100%;
  height: auto;
}
// @media (max-width: 525px){

//   bottom: 50%;
//   left: 0%;
//   transform: translate(-50%, -0%);


// }

`

const Text = styled.div`
font-size: calc(1rem + 1.5vw);
color: ${props => props.theme.body};
padding : 0.4rem;
cursor:pointer;

display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:last-child{
  color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
  font-size: calc(0.5rem + 1.5 vw);
  font-weight: 300;
}
`


export const Intro = () => {
  return (
    <Box 
    initial = {{height:0}}
    animate={{height: '55vh'}}
    transition = {{ type: 'spring', duration: 2, delay: 1}}
    >
        <SubBox>
            <Text>
              <h1>Hello,</h1>
              <h3>I'm Javier</h3>
              <h6>I'm Frontend Developer With React!</h6>
            </Text>
        </SubBox>
        <SubBox>
            <motion.div
            initial = {{opacity:0}}
            animate={{opacity: 1}}
            //delay tiempo que tarda en aarecer la imagen
            transition = {{ duration: 1, delay: 2}}
            >
              <img className="imagen" src={Iam} alt="Profile im" />
           </motion.div>
        </SubBox>
    </Box>
  )
}
