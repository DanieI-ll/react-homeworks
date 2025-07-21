import styles from './Sign.module.css';
import { Apple, Google, Twitter } from '../../assets/icons/sign_icons';

const Sign = () => {
  return (
    <>
      <h3 className={styles.sign_text}>
        Sign in <br /> with
      </h3>
      <div className={styles.sign_container}>
        <div className={styles.sign_block}>
          <div>
            <a className={styles.sign_btn} href="#">
              <Apple />
            </a>
          </div>
          <div>
            <a className={styles.sign_btn} href="#">
              <Google />
            </a>
          </div>
          <div>
            <a className={styles.sign_btn} href="#">
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sign;
