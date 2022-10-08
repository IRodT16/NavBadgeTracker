import styles from './roster.module.css';
import data from '../dev-data/roster.json';

function Roster() {
  return (
    <div className={styles.rosterMain}>
      <h1>Navigators Roster</h1>
      <table className={styles.rosterNames}>
        {data.map((res) => {
          return (
            <tbody>
              <td>{res.navigatorName}</td>
              {res.badgesCompleted.map(() => {
                return (
                  <td>
                    <ion-icon name="star"></ion-icon>
                  </td>
                );
              })}
              {res.badgesInProgress.map(() => {
                return (
                  <td>
                    <ion-icon name="star-half"></ion-icon>
                  </td>
                );
              })}
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Roster;
