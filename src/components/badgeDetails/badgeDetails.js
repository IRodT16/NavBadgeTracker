import styles from './badgeDetails.module.css';

function BadgeDetails(props) {
  //   const singleBadge = props.badgeData[0];
  return (
    <div className={styles.badgeDetailsMain}>
      <div>
        <h1>Badge Requirements Page</h1>
      </div>

      <div className={styles.badgeRequirements}>
        {props.badgeData.map((res, i) => {
          return (
            <div>
              <h2>{res.badgeName}</h2>
              {props.badgeData[i].requirements.senior.map((res) => {
                return (
                  <div className={styles.benchmarks}>
                    <p className={styles.benchmark}>{res.number}</p>
                    <p className={styles.benchmark}>{res.requirement}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BadgeDetails;
