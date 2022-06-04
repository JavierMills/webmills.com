import { Route, Switch, useLocation } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../src/globalStyles"
import { LightTheme} from './components/Themes'


//here to go the componets
import { Main } from "./components/Main"
import { AboutPage } from "./components/AboutPage"
import { BlogPage } from "./components/BlogPage"
import { MySkills } from "./components/MySkills"
import { WorkPage } from "./components/WorkPage"
import { AnimatePresence } from "framer-motion"
import { Sound } from "./subComponents/Sound"


function App() {
  const location = useLocation();
  return <>
  <GlobalStyle />
    {/* para darle animacion a la entrada de las paginas */}
  <ThemeProvider theme={ LightTheme }>
    <Sound />
    <AnimatePresence exitBeforeEnter>
    <Switch location={location} key={location.pathname}>
      <Route exact path="/" component={Main} />
      <Route exact path="/about" component={ AboutPage } />
      <Route exact path="/blog" component={ BlogPage } />
      <Route exact path="/myskills" component={ MySkills } />
      <Route exact path="/workpage" component={ WorkPage } />

    
    </Switch>
    </AnimatePresence>
    
  </ThemeProvider>
  
    </>
    
}

export default App

