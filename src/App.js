import React from 'react';
import classes from "./App.module.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";
import Slider from "./components/slider/Slider";
import { BrowserRouter } from 'react-router-dom';


function App(props) {
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Slider />
        <Content 
          items={props.menuItems}
          imgMenuItems={props.imgMenuItems}
          page2={props.page2}
          page3={props.page3}
        />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
