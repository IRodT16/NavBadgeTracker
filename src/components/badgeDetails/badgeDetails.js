import styles from './badgeDetails.module.css';

function BadgeDetails(props) {
  let navLevel = props.navigatorLevel.toLowerCase();

  return (
    <form className={styles.badgeDetailsMain}>
      <div>
        <button>Back to Navigator</button>
        <h1>
          {props.navigatorLevel} {props.badgeName} Badge Requirements
        </h1>
        <button>Submit New Benchmarks</button>
      </div>

      <div className={styles.badgeRequirements}>
        {props.badgeData[0].Badges[props.badgeName].requirements[navLevel].map(
          (res) => {
            return (
              <div className={styles.benchmarks}>
                <input type="checkbox" className={styles.checkbox} />
                <p className={styles.number}>{res.number}</p>
                <p className={styles.benchmark}>{res.requirement}</p>
              </div>
            );
          }
        )}
      </div>

      {/* <div className={styles.badgeRequirements}>
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
      </div> */}
    </form>
  );
}

export default BadgeDetails;
