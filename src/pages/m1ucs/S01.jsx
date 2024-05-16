import classNames from 'classnames/bind';

import M1UCS_IMG from 'assets/images/m1ucs/m1ucs.jpg';

import { M1UCS_DOMAIN } from 'config';
import RoundButton from 'components/ui/RoundButton';
import styles from './S01.module.scss';

const cx = classNames.bind(styles);

const S01 = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('image')}>
        <div className={cx('button')}>
          <p>Let’s Start</p>
          <a className={cx('link')} href={M1UCS_DOMAIN} target="_blank" rel="noreferrer">
            M1UCS
          </a>
        </div>
        <img src={M1UCS_IMG} alt="" />
      </div>
      <strong className={cx('bold')}>
        Solution for remotely monitoring and
        <br /> controlling various types of unmanned vehicles.
      </strong>
      <p className={cx('desc')}>
        Individual/integrated operation of each device, integrated monitoring
        <br />
        with diagnostic sensors.
      </p>
      <div className={cx('box')}>
        <RoundButton text="START M1UCS" href={M1UCS_DOMAIN} />
      </div>
    </div>
  );
};

export default S01;
