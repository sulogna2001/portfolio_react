
import React from 'react';
import { useContext } from 'react';
import Toggle from './components/toggle/Toggle';
import Intro from './components/intro/Intro'
import About from './components/about/About';
import ProductList from './components/productList/ProductList';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Skills from './components/skills/Skills'
import { ThemeContext } from "./context";
import Line from './components/Line';

function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle/>
      
      <Intro/>
      <Line color="black"/>
      <About/>
     
      <Skills/>
    
      <ProductList/>
     

      <Contact/>
      <Line />

      <Footer/>
    </div>
  );
}

export default App;
