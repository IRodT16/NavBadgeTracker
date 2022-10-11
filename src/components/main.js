import { useState } from 'react';
import styles from './main.module.css';
import Roster from './roster';
import Stats from './navigatorStats';
import data from '../dev-data/roster.json';
import Navigation from './navigation';
import Dashboard from './dashboard';
import Calendar from './calendar';

function Main(props) {
  const [path, setPath] = useState('dashboard');
  const [stats, setStats] = useState();
  return (
    <div className={styles.main}>
      <Navigation setNavPath={setPath} />
      {path === 'roster' && (
        <Roster setPath={setPath} path={path} data={data} setStats={setStats} />
      )}
      {path === 'stats' && <Stats stats={stats} />}
      {path === 'calendar' && <Calendar />}
      {path === 'dashboard' && <Dashboard />}
    </div>
  );
}

export default Main;
