import { Route } from 'react-router-dom';
import classes from "./Content.module.css";
import NavItem from "./item/NavItem";
import Page2 from './page-2/Page2';

const Content = (props) =>  {
  // мапим элементы меню
  const navItems = props.items.map((el,i) => <NavItem text={el.text} src={props.imgMenuItems[i]} url={el.url} key={i}/>);
  return (
    <div className={classes.contentBody}>
      <Route exact path="/">
        <div className={classes.page1}>
          <div className={classes.items}>
            {navItems}
          </div>
        </div>
      </Route>
      <Route path="/administrations">
        <Page2 dataPage2={props.page2} page3={props.page3} items={props.items}/>
      </Route>
    </div>
  );
}

export default Content;