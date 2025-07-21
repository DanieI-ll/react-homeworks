import styles from './Header.module.css';
import { default as Logo } from '../../assets/icons/logo/Logo.jsx';

const Header = () => {
  return (
    <div className={styles.header_logo}>
      <a href="#">
        <Logo />
      </a>
    </div>
  );
};

export default Header;
