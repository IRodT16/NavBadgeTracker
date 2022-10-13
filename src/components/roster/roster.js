import styles from './roster.module.css';
// import data from '../dev-data/roster.json';

function Roster(props) {
  const navigatorSelect = (el) => {
    props.setStats(el);

    props.setNavigatorLevel(el.navigatorLevel);
    props.setPath('stats');
  };

  return (
    <div className={styles.rosterMain}>
      <div className={styles.tableWrapper}>
        {/* <h1>Navigators Roster</h1> */}
        <table className={styles.rosterNames}>
          <thead>
            <tr>
              <th>Navigator Name</th>
              <th>Navigator Level</th>
              <th>Waiver</th>
              <th>Dues</th>
            </tr>
          </thead>
          {props.data.map((res, i) => {
            return (
              <tbody key={res.navigatorName}>
                <tr>
                  <td
                    className={styles.names}
                    onClick={() => {
                      navigatorSelect(res);
                    }}
                  >
                    {res.navigatorName}
                  </td>

                  <td className={styles.navigatorLevel}>
                    {res.navigatorLevel}
                  </td>

                  <td>
                    {res.navigatorWaiver === true ? (
                      <ion-icon name="checkmark-outline"></ion-icon>
                    ) : (
                      <ion-icon name="alert-circle-outline"></ion-icon>
                    )}
                  </td>
                  <td>
                    {res.navigatorDues === true ? (
                      <ion-icon name="checkmark-outline"></ion-icon>
                    ) : (
                      <ion-icon name="close-outline"></ion-icon>
                    )}
                  </td>

                  {/* <div>
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
                </div> */}
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Roster;
