import { useState } from 'react';
import styles from './main.module.css';
import Roster from './roster/roster';
import Stats from './navigator/navigatorStats';
import data from '../dev-data/roster.json';
import Navigation from './navigation';
import Dashboard from './dashboard/dashboard';
import Calendar from './calendar/calendar';
import BadgeDetails from './badgeDetails/badgeDetails';
import badgeData from '../dev-data/badge-data.json';

function Main(props) {
  const [path, setPath] = useState('dashboard');
  const [stats, setStats] = useState();
  const [badgeDetails, setBadgeDetails] = useState();
  return (
    <div className={styles.main}>
      <Navigation setNavPath={setPath} />
      {path === 'roster' && (
        <Roster setPath={setPath} path={path} data={data} setStats={setStats} />
      )}
      {path === 'stats' && <Stats stats={stats} setPath={setPath} />}
      {path === 'calendar' && <Calendar />}
      {path === 'dashboard' && <Dashboard />}
      {path === 'badgeDetails' && (
        <BadgeDetails badgeData={badgeData} badgeDetails={badgeDetails} />
      )}
    </div>
  );
}

export default Main;
