import classNames from 'classnames/bind';

import MISSION_HUB from 'assets/images/m1ucs/mission_hub.png';

import List from 'components/ui/List';
import styles from './S03.module.scss';

const cx = classNames.bind(styles);

const S03 = () => {
  return (
    <div className={cx('container')}>
      <strong className={cx('title')}>MISSION HUB</strong>
      <p className={cx('desc')}>Efficient and Integrated</p>
      <div className={cx('contents')}>
        <div className={cx('left')}>
          <img src={MISSION_HUB} alt="" />
        </div>
        <div className={cx('right')}>
          <div className={cx('top')}>
            <strong className={cx('title')}>Fast Mission Planning</strong>
            <List
              list={[
                'Point, Polygon, Draw Line/Area',
                'Camera and Mission Equipment Config',
                'Graphic Altitude Correction/Editing',
                'Support/Compatibility for Various Types of Maps',
              ]}
            />
          </div>
          <div className={cx('bottom')}>
            <strong className={cx('title')}>Easy Integration with Other Systems</strong>
            <List
              list={[
                'Device-independent Standalone - 1 Mission Multi-use',
                'Compatible with DJI Enterprise Series',
                'Export/Import Mission Files',
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default S03;
