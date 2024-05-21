import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './RoundButton.module.scss';

const cx = classNames.bind(styles);

const RoundButton = ({ href, text, onClick }) => {
  if (onClick) {
    return (
      <button onClick={onclick} className={cx('container')}>
        <span>{text}</span>
      </button>
    );
  }

  if (href.includes('http')) {
    return (
      <a className={cx('container')} href={href} target="_blank" rel="noreferrer">
        <span>{text}</span>
      </a>
    );
  }

  return (
    <Link className={cx('container')} to={href}>
      <span>{text}</span>
    </Link>
  );
};

export default RoundButton;
