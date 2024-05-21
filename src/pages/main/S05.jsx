import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import TEMP from 'assets/images/temp/drone.jpg';

import RoundButton from 'components/ui/RoundButton';
import styles from './S05.module.scss';

const cx = classNames.bind(styles);

const S05 = () => {
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
        <div className={cx('box')}>
          <RoundButton text="MORE VIEW" href="/news" />
        </div>
      </div>
    </div>
  );
};

export default S05;
