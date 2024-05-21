import classNames from 'classnames/bind';

import AERO_LENZE from 'assets/images/service/aerolenze/aero_lenze.png';
import AERO_LENZE_MAIN_01 from 'assets/images/service/aerolenze/AeroLens_main_01.png';
import AERO_LENZE_MAIN_02 from 'assets/images/service/aerolenze/AeroLens_main_02.png';
import AERO_LENZE_MAIN_03 from 'assets/images/service/aerolenze/AeroLens_main_03.png';

import SubTop from 'components/ui/SubTop';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  return (
    <div className={cx('container')}>
      <SubTop title="AeroLenze" subTitle="SERVICE" />
      <div className={cx('wrapper')}>
        <div className={cx('contents')}>
          <strong className={cx('title')}>AeroLenze</strong>
          <p className={cx('desc')}>
            AeroLenze is a service for easily capturing stunning aerial shots without the need to carry a drone, by
            summoning nearby drones for filming.
          </p>
          <div className={cx('top')}>
            <img src={AERO_LENZE} alt="" />
          </div>
          <div className={cx('bottom')}>
            <div className={cx('left')}>
              <p className={cx('desc')}>
                For this service, autonomous drones and unmanned operation stations are managed through Mobility One's
                M1UCS. Starting with a pilot service on Jeju Island in 2024, we plan to gradually expand.
              </p>
              <div className={cx('image')}>
                <p className={cx('desc')}>Capture Your Special Moments with Drones!</p>
                <img src={AERO_LENZE_MAIN_01} alt="" />
              </div>
            </div>
            <div className={cx('right')}>
              <div className={cx('image')}>
                <p className={cx('desc')}>No need to carry a drone around, just AeroLenze is enough!</p>
                <img src={AERO_LENZE_MAIN_02} alt="" />
              </div>
              <div className={cx('image')}>
                <p className={cx('desc')}>How about we start with AeroLens right now?</p>
                <img src={AERO_LENZE_MAIN_03} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
