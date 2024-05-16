import classNames from 'classnames/bind';

import PREVIEWER_IMG01 from 'assets/images/m1ucs/mission_previewer01.jpg';
import PREVIEWER_PICTOGRAM from 'assets/images/m1ucs/previewer_pictogram.png';
import PREVIEWER_IMG02 from 'assets/images/m1ucs/mission_previewer02.jpg';

import List from 'components/ui/List';
import styles from './S04.module.scss';

const cx = classNames.bind(styles);

const S04 = () => {
  return (
    <div className={cx('container')}>
      <strong className={cx('title')}>MISSION PREVIEWER</strong>
      <p className={cx('desc')}>Light and Intuitive</p>
      <div className={cx('contents')}>
        <div className={cx('top')}>
          <img src={PREVIEWER_IMG01} alt="" />
          <div className={cx('pictogram')}>
            <div className={cx('image')}>
              <div className={cx('arrow')} />
              <img src={PREVIEWER_PICTOGRAM} alt="" />
            </div>
            <p>
              Simulation Data
              <br />
              Generation Algorithm
            </p>
          </div>
          <img src={PREVIEWER_IMG02} alt="" />
        </div>
        <div className={cx('bottom')}>
          <div className={cx('left')}>
            <strong className={cx('title')}>SW based Simulation</strong>
            <List
              list={[
                'Cloud-based simulator powered by proprietary algorithms',
                '3D-based flight/operation preview',
                'Video controls such as skip, rewind, etc.',
              ]}
            />
          </div>
          <div className={cx('right')}>
            <strong className={cx('title')}>Advance Verification of Weather and Other Hazardous Conditions</strong>
            <List
              list={[
                'Pre-verification of mission stability through the setting of environmental variables such as wind direction and wind speed',
                'Advance verification of high-rise buildings, artificial structures, and hazardous facilities',
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default S04;
