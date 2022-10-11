import { useState } from 'react';
import styles from './roster.module.css';
// import data from '../dev-data/roster.json';

function Roster(props) {
  const navigatorSelect = (el) => {
    props.setStats(el);

    props.setPath('stats');
  };
  return (
    <div className={styles.rosterMain}>
      <h1>Navigators Roster</h1>
      <table className={styles.rosterNames}>
        {props.data.map((res, i) => {
          return (
            <tbody key={res.navigatorName}>
              <tr>
                <div className={styles.names}>
                  <td
                    onClick={() => {
                      navigatorSelect(res);
                    }}
                  >
                    {res.navigatorName}
                  </td>
                </div>

                <div>
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
                </div>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Roster;
