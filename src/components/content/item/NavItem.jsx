import classes from "./NavItem.module.css";
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
  return (
    <NavLink to={props.url} className={classes.item}>
      <p className={classes.itemText}>{props.text}</p>
      <img className={classes.img} src={props.src} alt="icon" />
    </NavLink>
  );
}

export default NavItem;