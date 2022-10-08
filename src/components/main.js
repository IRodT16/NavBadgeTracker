import styles from './main.module.css';
import Roster from './roster';

function Main() {
  return (
    <div className={styles.main}>
      <Roster />
    </div>
  );
}

export default Main;
