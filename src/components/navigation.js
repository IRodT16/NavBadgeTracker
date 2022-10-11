import styles from './navigation.module.css';
import Logo from '../img/logo.png';

const Navigation = (props) => {
  const rosterHandler = () => {
    props.setNavPath('roster');
  };
  const calendarHandler = () => {
    props.setNavPath('calendar');
  };
  const dashboardHandler = () => {
    props.setNavPath('dashboard');
  };
  return (
    <nav className={styles.mainNav}>
      <img src={Logo} className={styles.logo} alt="Navigators USA Logo" />
      <ul className={styles.navList}>
        <li onClick={dashboardHandler} className={styles.navListItem}>
          Dashboard
        </li>
        <li onClick={rosterHandler} className={styles.navListItem}>
          Roster
        </li>
        <li onClick={calendarHandler} className={styles.navListItem}>
          Calendar
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;

// () => props.setNavPath('roster')
