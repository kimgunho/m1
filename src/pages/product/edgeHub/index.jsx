import classNames from 'classnames/bind';

import M1EdgeHub from 'assets/images/product/m1EdgeHub/m1EdgeHub.png';

import List from 'components/ui/List';
import SubTop from 'components/ui/SubTop';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  return (
    <div className={cx('container')}>
      <SubTop title="M1 EdgeHub" subTitle="PRODUCT - H/W" />
      <div className={cx('wrapper')}>
        <div className={cx('contents')}>
          <div className={cx('top')}>
            <img src={M1EdgeHub} alt="" />
            <ul className={cx('aside')}>
              <li>
                <strong>Flight Controller</strong>
                <p>PX4 / Ardupilot / Custom</p>
              </li>
              <li>
                <strong>Camera</strong>
                <p>Models that come with an SDK</p>
              </li>
              <li>
                <strong>Other Payload</strong>
                <p>Winch / RTK / Sensors</p>
              </li>
              <li>
                <strong>Communication Modem</strong>
                <p>RF / LTE</p>
              </li>
            </ul>
          </div>
          <div className={cx('bottom')}>
            <List
              list={[
                'Telemetry transmission and reception for drone remote control. ',
                'Compatible with both RF and LTE ',
                'Control of various camera models with provided SDK. ',
                'Control of various equipment for mission execution such as gimbal, RTK, sensors, etc. ',
                'Seamless integration with M1UCS for unified operation.',
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
