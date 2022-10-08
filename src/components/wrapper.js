import styles from './wrapper.module.css';
import backgroundVideo from '../video/mountain-trail.mp4';
import Navigation from './navigation';
import Main from './main';

function Wrapper() {
  return (
    <div className={styles.wrapper}>
      <video
        autoPlay
        loop
        muted
        id="video"
        className={styles.video}
        src={backgroundVideo}
        type="video/mp4"
      />
      <Navigation />
      <Main />
    </div>
  );
}

export default Wrapper;
