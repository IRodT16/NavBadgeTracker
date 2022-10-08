import styles from './navigation.module.css';
import Logo from '../img/logo.png';

const Navigation = () => {
  return (
    <nav className={styles.mainNav}>
      <img src={Logo} className={styles.logo} alt="Navigators USA Logo" />
      <ul className={styles.navList}>
        <li className={styles.navListItem}>Dashboard</li>
        <li className={styles.navListItem}>Roster</li>
        <li className={styles.navListItem}>Calendar</li>
      </ul>
    </nav>
  );
};
export default Navigation;
