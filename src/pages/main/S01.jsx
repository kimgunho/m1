import classNames from 'classnames/bind';

import styles from './S01.module.scss';
import BACKGROUND from 'assets/images/temp/01_banner_bg.png';
import TEXT from 'assets/images/global/mobilityone_text.png';

const cx = classNames.bind(styles);

const S01 = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('center')}>
        <p>
          Solution Provider for Remote Works
          <br />
          Safe and Easy Remote Works using Uncrewed Mobilities.
        </p>
      </div>
      <video poster={BACKGROUND}></video>
      <div className={cx('bottom')}>
        <img src={TEXT} alt="" />
      </div>
    </div>
  );
};

export default S01;
