import styles from './style.module.scss';
import Magnetic from '../../../../common/Magnetic';

export default function index() {
  return (
    <div className={styles.footer}>
        <Magnetic>
            <a className={styles.link} href='https://www.google.com'>Github</a>
        </Magnetic>
        <Magnetic>
            <a className={styles.link} href=''>Instagram</a>
        </Magnetic>
        <Magnetic>
            <a className={styles.link} href=''>HackerRank</a>
        </Magnetic>
        <Magnetic>
            <a className={styles.link} href=''>LinkedIn</a>
        </Magnetic>
    </div>
  )
}
