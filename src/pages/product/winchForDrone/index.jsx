import classNames from 'classnames/bind';

import M1Winch from 'assets/images/product/winchForDrone/m1_winch.png';
import M1Winch_Item from 'assets/images/product/winchForDrone/winch_item.png';

import List from 'components/ui/List';
import SubTop from 'components/ui/SubTop';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  return (
    <div className={cx('container')}>
      <SubTop title="M1 Winch for Drone" subTitle="PRODUCT - H/W" />
      <div className={cx('wrapper')}>
        <div className={cx('contents')}>
          <div className={cx('top')}>
            <strong className={cx('title')}>M1 Winch</strong>
            <img src={M1Winch} alt="" />
          </div>
          <div className={cx('center')}>
            <div className={cx('left')}>
              <img src={M1Winch_Item} alt="" />
            </div>
            <div className={cx('middle')}>
              <p className={cx('title')}>SPEC</p>
              <ul className={cx('list')}>
                <li>
                  <span className={cx('bold')}>Size</span>
                  <span>W140 X D65 X H75 mm</span>
                </li>
                <li>
                  <span className={cx('bold')}>Weight</span>
                  <span>800g</span>
                </li>
                <li>
                  <span className={cx('bold')}>Working voltage</span>
                  <span>5V</span>
                </li>
                <li>
                  <span className={cx('bold')}>Motor type</span>
                  <span>BLDC MOTOR(ENCONDER)</span>
                </li>
                <li>
                  <span className={cx('bold')}>Motor power</span>
                  <span>~84W</span>
                </li>
                <li>
                  <span className={cx('bold')}>Motor revolution</span>
                  <span>10,873RPM</span>
                </li>
              </ul>
            </div>
            <div className={cx('right')}>
              <ul>
                <li>
                  <span className={cx('bold')}>Output revolution</span>
                  <span>83RPM</span>
                </li>
                <li>
                  <span className={cx('bold')}>Reduction ratio</span>
                  <span>131:1</span>
                </li>
                <li>
                  <span className={cx('bold')}>Throw-line length</span>
                  <span>10~80m</span>
                </li>
                <li>
                  <span className={cx('bold')}>Control mode</span>
                  <span>AUTO</span>
                </li>
                <li>
                  <span className={cx('bold')}>Signal mode</span>
                  <span>PWM signal</span>
                </li>
                <li>
                  <span className={cx('bold')}>Control distance</span>
                  <span> 10~80m</span>
                </li>
                <li>
                  <span className={cx('bold')}>Mas.payload</span>
                  <span>1kg</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={cx('bottom')}>
            <List
              list={[
                'Small Winch for Small VTOL and Multi-copter for Delivery Purposes',
                'Remote Control via MavLink Protocol - Speed, Direction, etc.',
                'Compatible with PX4/APM',
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
