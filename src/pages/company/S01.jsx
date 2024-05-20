import classNames from 'classnames/bind';

import LOGO_LARGE from 'assets/images/company/logo_large.png';

import styles from './S01.module.scss';

const cx = classNames.bind(styles);

const S01 = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('logo')}>
        <img src={LOGO_LARGE} alt="" />
        <p>MOBILITY ONE</p>
      </div>
      <p className={cx('bold')}>
        Multi-type Unmanned Vehicle
        <br />
        Integrated Operation Platform & Services
      </p>
      <p className={cx('text')}>The Future of Integrated UAV, UGV, and USV Operations in One Seamless Solution.</p>
      <div className={cx('background')} />
    </div>
  );
};

export default S01;
