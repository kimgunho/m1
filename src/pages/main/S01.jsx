import classNames from 'classnames/bind';

import BACKGROUND from 'assets/images/temp/01_banner_bg.png';
import TEXT from 'assets/images/global/mobilityone_text.png';

import styles from './S01.module.scss';

const cx = classNames.bind(styles);

const S01 = () => {
  return (
    <div className={cx('container')}>
      <p className={cx('center')}>
        Mobility Robotics Operation Platform and Service!
        <br /> The Future of Mobility Robotics Operations through One Integrated Solution.
      </p>
      <video poster={BACKGROUND}></video>
      <div className={cx('bottom')}>
        <img src={TEXT} alt="" />
      </div>
    </div>
  );
};

export default S01;
