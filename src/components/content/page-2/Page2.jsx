import {Route, NavLink} from "react-router-dom";
import NavItem from "../item/NavItem";
import classes from "./Page2.module.css";
import Page3 from "../page-3/Page3";
// импорт картинки для элементов второй страницы
import iconPage2 from "./icon-img-page2.png";
import {ReactComponent as IconBack} from "./back.svg";



const Page2 = (props) => {
  const navItemsPage2 = props.dataPage2.map((el,i) => <NavItem text={el.text} url={el.url} src={iconPage2} key={i} />)
  const navItemsPage3 = props.page3.map((el, id) => <Page3 text={el.text} key={id} />)

  return (
    <div className={classes.page2}>
      {/* <h3></h3> добавляем заголовок страниц */}
        <NavLink to="" className={classes.back}><IconBack /></NavLink>
      <Route exact path="/administrations">
        { navItemsPage2 }
      </Route>
      <Route path="/administrations/page1">
        { navItemsPage3 }
      </Route>
    </div>
  );
};

export default Page2;
