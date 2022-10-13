import styles from './badges.module.css';

function Badges(props) {
  const badgeSelect = (el) => {
    props.setBadgeName(el.target.name);
    props.setPath('badgeDetails');
  };

  return (
    <div>
      <div>
        <div className={styles.completedBadges}>
          <h4>Completd Badges</h4>

          {props.stats.badgesCompleted.map((img, i) => {
            return (
              <div className={styles.completedBadgeOutline}>
                <img
                  name={`${props.stats.badgesCompleted[i]}`}
                  onClick={badgeSelect}
                  className={styles.badge}
                  src={require(`../../img/badges/${
                    props.stats.badgesCompleted[i]
                  }_badges_${props.stats.navigatorLevel.toLowerCase()}.png`)}
                  alt={`badge`}
                />
              </div>
            );
          })}
        </div>

        <div className={styles.badgesInProgress}>
          <h4>Badges in Progress</h4>
          {props.stats.badgesInProgress.map((img, i) => {
            return (
              <div className={styles.badgeInProgressOutline}>
                <img
                  name={`${props.stats.badgesInProgress[i]}`}
                  onClick={badgeSelect}
                  className={styles.badgeInProgress}
                  src={require(`../../img/badges/${
                    props.stats.badgesInProgress[i]
                  }_badges_${props.stats.navigatorLevel.toLowerCase()}.png`)}
                  alt={`badge`}
                />
              </div>
            );
          })}
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

export default Badges;
