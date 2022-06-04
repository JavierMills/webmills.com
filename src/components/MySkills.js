import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {LightTheme} from './Themes';
import {Design, Develope} from './AllSvgs';
import {SocialIcons} from '../subComponents/SocialIcons';
import {PowerButton} from '../subComponents/PowerButton';
import {LogoComponent} from '../subComponents/LogoComponent';
import {ParticleComponent} from '../subComponents/ParticleComponent';
import {BigTitle} from '../subComponents/BigTitle'

//contenedor princcipal'
const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:110vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;

@media(max-width: 800px){
  width: 100vw;
  height:90%;
  flex-direction: column;
justify-content:center;

  }

`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 35vw;
height: 72vh;
z-index:3;
cursor: pointer;
font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;
&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}

@media(max-width: 800px){
  margin: 2rem;
  width: 40vw;
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 5rem;
  width: 30vw;
  height: 60vh;
  z-index:3;
  line-height: 1;
  cursor: pointer;
  font-family: 'Ubuntu Mono',monospace;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover{
      color: ${props => props.theme.body};
      background-color: ${props => props.theme.text};
  }

  }

  
@media(max-width: 525px){
  margin: 2rem;
  width: 40vw;
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 30vh;
  z-index:3;

  cursor: pointer;
  font-family: 'Ubuntu Mono',monospace;
  font-size: 9px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover{
      color: ${props => props.theme.body};
      background-color: ${props => props.theme.text};
  }

  }
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);
${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}
&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;
${Main}:hover &{
   
        color:${props => props.theme.body};
    
}
strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`


export const MySkills = () => {
  return (
    <ThemeProvider theme={LightTheme} >

        <Box>

        <LogoComponent theme='light'/>
        <SocialIcons  theme='light'/>
        <PowerButton />
        <ParticleComponent  theme={'light'}/>
        <Main>
          <Title>
            <Design width={40} height={40} /> Frontend Developer
              
          </Title>

          <Description>
          I love to create design which speaks, Keep it clean, minimal and simple.
          </Description>

          <Description>
          <strong>I Like Desing.</strong>

           <p>HTML, CSS3, JavaScript, TypeScript, Booststrap, Styled-Component, React, Angular, NextJs

           </p>
          </Description>

          <Description>
          <strong>Tools.</strong>

            <ul>
              <li>VS Code</li>
              <li>Netlify</li>
              <li>Postman</li>
              
          
              
            </ul>
          </Description>


        </Main>



        <Main>
        <Title>
            <Develope width={40} height={40} />Backend Developer(MERN)
          </Title>

          <Description>
          I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
          </Description>

          <Description>
          <strong>Skills.</strong>

          <p>Mongodb, NodeJs, ExpressJS</p>
            </Description>

            <Description>
          <strong>Tools.</strong>

            <ul>
              <li>Github</li>
              <li>Heroku</li>
              <li>Firebase</li>
              <li>Netlify</li>
              <li>Vercel</li>
             

            </ul>
          </Description>

          

        </Main>


        <BigTitle text='SKILLS' top="80%" right="30%"/>

        </Box>

   
     </ThemeProvider>


)

  }
    