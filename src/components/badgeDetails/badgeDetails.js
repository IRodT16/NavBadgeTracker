import styles from './badgeDetails.module.css';

function BadgeDetails(props) {
  let navLevel = props.navigatorLevel.toLowerCase();
  let badge = props.badgeName.toLowerCase();
  let benchmarkArray = props.benchmarks[badge];
  let benchmarkNumber =
    props.badgeData[0].Badges[props.badgeName].requirements[navLevel];

  const testValHandle = (el) => {
    console.log(el.target.value);
  };
  const navReturnHandler = () => {
    props.setPath('stats');
  };

  return (
    <form className={styles.badgeDetailsMain}>
      <div>
        <button onClick={navReturnHandler}>Back to Navigator</button>
        <h1>
          {props.navigatorLevel} {props.badgeName} Badge Requirements
        </h1>
        <button>Submit New Benchmarks</button>
      </div>

      <div className={styles.badgeRequirements}>
        {benchmarkNumber.map((res, i) => {
          return (
            <div className={styles.benchmarks}>
              <div>
                {benchmarkArray.includes(res.number) ? (
                  <input
                    onClick={testValHandle}
                    type="checkbox"
                    className={styles.checkbox}
                    checked="checked"
                    value={res.number}
                  />
                ) : (
                  <input
                    onClick={testValHandle}
                    type="checkbox"
                    className={styles.checkbox}
                    value={res.number}
                    // checked="checked"
                  />
                )}
              </div>
              <p className={styles.number}>{res.number}</p>
              <p className={styles.benchmark}>{res.requirement}</p>
            </div>
          );
        })}
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
