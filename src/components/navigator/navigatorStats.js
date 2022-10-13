import styles from './navigatorStats.module.css';
import Badges from './badges';

function Stats(props) {
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
        />
      </div>
    </div>
  );
}

export default Stats;
