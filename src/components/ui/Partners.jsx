import classNames from 'classnames/bind';

import BTE from 'assets/images/partners/bte.png';
import DOOSAN from 'assets/images/partners/doosan.png';
import NAMYANG from 'assets/images/partners/namyang.png';
import GHOST_ROBOTICS from 'assets/images/partners/ghost_robotics.png';
import WEFLO from 'assets/images/partners/weflo.png';
import SMATII from 'assets/images/partners/smatii.png';

import styles from './Partners.module.scss';

const cx = classNames.bind(styles);

const Partners = () => {
  return (
    <div className={cx('container')}>
      <ul className={cx('list')}>
        <li>
          <img src={BTE} alt="" />
        </li>
        <li>
          <img src={DOOSAN} alt="" />
        </li>
        <li>
          <img src={NAMYANG} alt="" />
        </li>
        <li>
          <img src={GHOST_ROBOTICS} alt="" />
        </li>
        <li>
          <img src={WEFLO} alt="" />
        </li>
        <li>
          <img src={SMATII} alt="" />
        </li>
        <li>
          <img src={BTE} alt="" />
        </li>
        <li>
          <img src={DOOSAN} alt="" />
        </li>
        <li>
          <img src={NAMYANG} alt="" />
        </li>
        <li>
          <img src={GHOST_ROBOTICS} alt="" />
        </li>
        <li>
          <img src={WEFLO} alt="" />
        </li>
        <li>
          <img src={SMATII} alt="" />
        </li>
      </ul>
      <ul className={cx('list')}>
        <li>
          <img src={BTE} alt="" />
        </li>
        <li>
          <img src={DOOSAN} alt="" />
        </li>
        <li>
          <img src={NAMYANG} alt="" />
        </li>
        <li>
          <img src={GHOST_ROBOTICS} alt="" />
        </li>
        <li>
          <img src={WEFLO} alt="" />
        </li>
        <li>
          <img src={SMATII} alt="" />
        </li>
        <li>
          <img src={BTE} alt="" />
        </li>
        <li>
          <img src={DOOSAN} alt="" />
        </li>
        <li>
          <img src={NAMYANG} alt="" />
        </li>
        <li>
          <img src={GHOST_ROBOTICS} alt="" />
        </li>
        <li>
          <img src={WEFLO} alt="" />
        </li>
        <li>
          <img src={SMATII} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default Partners;
