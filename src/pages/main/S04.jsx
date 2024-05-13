import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import TEMP from 'assets/images/temp/drone.jpg';

import styles from './S04.module.scss';

const cx = classNames.bind(styles);

const S04 = () => {
  return (
    <div className={cx('container')}>
      <strong className={cx('title')}>LATEST NEWS</strong>
      <div className={cx('wrapper')}>
        <ul className={cx('list')}>
          {Array(3)
            .fill()
            .map((_, i) => (
              <li key={i}>
                <Link to="/">
                  <div className={cx('box')}>
                    <p className={cx('date')}>AUG 17, 2024 </p>
                    <strong className={cx('title')}>MOBILITYONE Website Renewal Project</strong>
                  </div>
                  <div className={cx('dimmed')} />
                  <img src={TEMP} alt="" />
                </Link>
              </li>
            ))}
        </ul>
        <Link className={cx('more')} to="">
          MORE VIEW
        </Link>
      </div>
    </div>
  );
};

export default S04;
