import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import M1UCS from 'assets/images/main/m1ucs.png';
import SURVEY from 'assets/images/main/survey.png';
import AEROLENZE from 'assets/images/main/aero_lenze.png';

import styles from './S03.module.scss';

const cx = classNames.bind(styles);

const S03 = () => {
  return (
    <div className={cx('container')}>
      <strong className={cx('title')}>PRODUCT & SERVICE</strong>
      <div className={cx('wrapper')}>
        <div className={cx('box')}>
          <Link to={'/'} className={cx('content')}>
            <p className={cx('label')}>M1UCS</p>
            <img draggable={false} src={M1UCS} alt="" />
          </Link>
        </div>
        <div className={cx('box')}>
          <Link to={'/'} className={cx('content')}>
            <p className={cx('label')}>SURVEY</p>
            <img draggable={false} src={SURVEY} alt="" />
          </Link>
          <Link to={'/'} className={cx('content')}>
            <p className={cx('label')}>AERO LENZE</p>
            <img draggable={false} src={AEROLENZE} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default S03;
