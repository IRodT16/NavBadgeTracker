import styles from './navigatorStats.module.css';

function Stats(props) {
  const testMap = () =>
    props.stats.badgesCompleted.map((i) => {
      return console.log(i);
    });
  testMap();
  return (
    <div className={styles.navigator}>
      <div>
        <h1>{props.stats.navigatorName}</h1>
        <h4>{props.stats.navigatorLevel}</h4>
        <p>Badges Completed: {props.stats.badgesCompleted}</p>
        <p>Badges In Progress: {props.stats.badgesInProgress}</p>
      </div>

      <div>
        <div className={styles.completedBadges}>
          <h4>Completd Badges</h4>
          <div className={styles.completedBadgeOutline}>
            <img
              className={styles.badge}
              src={require(`../badges/Badges/BugsSenior.png`)}
              alt="Insert Here Badge"
            />
          </div>

          <div className={styles.completedBadgeOutline}>
            <img
              className={styles.badge}
              src={require(`../badges/Badges/BugsSenior.png`)}
              alt="Insert Here Badge"
            />
          </div>

          <div className={styles.completedBadgeOutline}>
            <img
              className={styles.badge}
              src={require(`../badges/Badges/BugsSenior.png`)}
              alt="Insert Here Badge"
            />
          </div>

          <div className={styles.completedBadgeOutline}>
            <img
              className={styles.badge}
              src={require(`../badges/Badges/BugsSenior.png`)}
              alt="Insert Here Badge"
            />
          </div>
        </div>

        <div className={styles.badgesInProgress}>
          <h4>Badges In Progress</h4>
          <div className={styles.badgeInProgressOutline}>
            <img
              className={styles.badgeInProgress}
              src={require(`../badges/Badges/BugsSenior.png`)}
              alt="Insert Here Badge"
            />
          </div>

          <div className={styles.badgeInProgressOutline}>
            <img
              className={styles.badgeInProgress}
              src={require(`../badges/Badges/BugsSenior.png`)}
              alt="Insert Here Badge"
            />
          </div>

          <div className={styles.badgeInProgressOutline}>
            <img
              className={styles.badgeInProgress}
              src={require(`../badges/Badges/BugsSenior.png`)}
              alt="Insert Here Badge"
            />
          </div>
        </div>
      </div>

      {/*working image loop*/}

      {/* {props.stats.badgesCompleted.map((img, i) => {
        return (
          <img
            className={styles.badge}
            src={require(`../badges/Badges/${props.stats.badgesCompleted[i]}_badges.png`)}
            alt={`badge`}
          />
        );
      })} */}

      {/*working image template for level differentiation*/}

      {/* <img
        className={styles.badge}
        src={require(`../badges/Badges/${props.stats.badgesCompleted[2]}${props.stats.navigatorLevel}.png`)}
        alt="Insert Here Badge"
      /> */}
    </div>
  );
}

export default Stats;
