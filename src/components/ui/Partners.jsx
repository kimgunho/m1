import classNames from 'classnames/bind';

import BTE from 'assets/images/partners/bte.png';
import DOOSAN from 'assets/images/partners/doosan.png';
import NAMYANG from 'assets/images/partners/namyang.png';
import GHOST_ROBOTICS from 'assets/images/partners/ghost_robotics.png';
import WEFLO from 'assets/images/partners/weflo.png';
import SMATII from 'assets/images/partners/smatii.png';
import AERO_SPACE_UNI from 'assets/images/partners/aerospace_uni.png';
import FLYGROUND from 'assets/images/partners/flyground.png';
import FEELTEK from 'assets/images/partners/feeltek.png';
import RIFATRON from 'assets/images/partners/rifatron.png';
import AIRON from 'assets/images/partners/airon.png';
import DRSYS from 'assets/images/partners/drsys.png';
import DSPECTER from 'assets/images/partners/dspecter.png';
import ASSETTA from 'assets/images/partners/assetta.png';
import ARDENT from 'assets/images/partners/ardent.png';
import SHECO from 'assets/images/partners/sheco.png';
import GLOBAL_KOREA from 'assets/images/partners/globalkorea.png';
import QUATERNION from 'assets/images/partners/quaternion.png';
import RENEU from 'assets/images/partners/reneu.png';
import NEUROMEKA from 'assets/images/partners/neuromeka.png';
import RKM from 'assets/images/partners/krm.png';
import THIRDEYE from 'assets/images/partners/thirdeye.png';

import styles from './Partners.module.scss';

const cx = classNames.bind(styles);

const Partners = () => {
  return (
    <div className={cx('container')}>
      {Array(2)
        .fill()
        .map((_, i) => (
          <ul key={i} className={cx('list')}>
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
              <img src={AERO_SPACE_UNI} alt="" />
            </li>
            <li>
              <img src={FLYGROUND} alt="" />
            </li>
            <li>
              <img src={FEELTEK} alt="" />
            </li>
            <li>
              <img src={RIFATRON} alt="" />
            </li>
            <li>
              <img src={AIRON} alt="" />
            </li>
            <li>
              <img src={DRSYS} alt="" />
            </li>
            <li>
              <img src={DSPECTER} alt="" />
            </li>
            <li>
              <img src={ASSETTA} alt="" />
            </li>
            <li>
              <img src={ARDENT} alt="" />
            </li>
            <li>
              <img src={SHECO} alt="" />
            </li>
            <li>
              <img src={GLOBAL_KOREA} alt="" />
            </li>
            <li>
              <img src={QUATERNION} alt="" />
            </li>
            <li>
              <img src={RENEU} alt="" />
            </li>
            <li>
              <img src={NEUROMEKA} alt="" />
            </li>
            <li>
              <img src={RKM} alt="" />
            </li>
            <li>
              <img src={THIRDEYE} alt="" />
            </li>
          </ul>
        ))}
    </div>
  );
};

export default Partners;
