import { NavBarButton } from '../buttons'
import Logo from '../Logo';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navBar">
      <NavBarButton text="הוספת תורים" path="/" />
      <NavBarButton text="תורים מתוכננים" path="/" />
      <NavBarButton text="חיפוש משתמשים" path="/" />
      <Logo />
    </div>
  );
};

export default NavBar;
