import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import CONTROL_CENTER from 'assets/images/m1ucs/control_center.jpg';

import List from 'components/ui/List';
import styles from './S02.module.scss';

const cx = classNames.bind(styles);

const S02 = () => {
  const { t } = useTranslation();

  return (
    <div className={cx('container')}>
      <strong className={cx('title')}>Control Center</strong>
      <p className={cx('desc')}>Unified and Flexible</p>
      <div className={cx('contents')}>
        <div className={cx('left')}>
          <div className={cx('top')}>
            <strong className={cx('title')}>Unified Control</strong>
            <ul className={cx('row')}>
              <li>
                <p>
                  <span>UAV</span>
                </p>
                <ul>
                  <li>Multi Copter</li>
                  <li>VTOL</li>
                </ul>
              </li>
              <li>
                <p>
                  <span>UGV</span>
                </p>
                <ul>
                  <li>Wheel</li>
                  <li>Tracked</li>
                  <li>Quadruped</li>
                </ul>
              </li>
              <li>
                <p>
                  <span>USV</span>
                </p>
                <ul>
                  <li>Motor</li>
                  <li>Fan/Air</li>
                </ul>
              </li>
              <li>
                <p>
                  <span>ETC</span>
                </p>
                <ul>
                  <li>Station</li>
                  <li>Robot Arm</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className={cx('bottom')}>
            <strong className={cx('title')}>Flexible UI/UX</strong>
            <List list={[t('m1ucs.S02_list_01'), t('m1ucs.S02_list_02')]} />
          </div>
        </div>
        <div className={cx('right')}>
          <img src={CONTROL_CENTER} alt="" />
        </div>
      </div>
    </div>
  );
};

export default S02;
