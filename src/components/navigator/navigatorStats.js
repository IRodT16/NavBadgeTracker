import styles from './navigatorStats.module.css';
import Badges from './badges';

function Stats(props) {
  console.log(props.stats.benchmarkProgressTest.camping);
  let inProgressBenchmarks = props.stats.benchmarkProgressTest.camping.length;
  console.log(inProgressBenchmarks);
  return (
    <div className={styles.navigator}>
      <div>
        <h1>{props.stats.navigatorName}</h1>
        <h4>{props.stats.navigatorLevel}</h4>

        <p>Badges Completed: {props.stats.badgesCompleted}</p>
        <p>Badges In Progress: {props.stats.badgesInProgress}</p>
      </div>
      <div>
        <Badges
          setPath={props.setPath}
          stats={props.stats}
          setBadgeName={props.setBadgeName}
          setBenchmarks={props.setBenchmarks}
          outlineInfo={inProgressBenchmarks}
        />
      </div>
    </div>
  );
}

export default Stats;
