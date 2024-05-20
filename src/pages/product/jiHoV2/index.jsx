import classNames from 'classnames/bind';

import JI_HO_V2 from 'assets/images/product/jiHoV2/jiHoV2.png';
import Mapping01 from 'assets/images/product/jiHoV2/mapping01.png';
import Mapping02 from 'assets/images/product/jiHoV2/mapping02.png';
import Mapping03 from 'assets/images/product/jiHoV2/mapping03.png';
import Mapping04 from 'assets/images/product/jiHoV2/mapping04.png';
import Mapping05 from 'assets/images/product/jiHoV2/mapping05.png';
import Inspection01 from 'assets/images/product/jiHoV2/inspection01.png';
import Inspection02 from 'assets/images/product/jiHoV2/inspection02.png';

import SubTop from 'components/ui/SubTop';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  return (
    <div className={cx('container')}>
      <SubTop title="JI-HO V2" subTitle="PRODUCT - H/W" />
      <div className={cx('wrapper')}>
        <div className={cx('contents')}>
          <div className={cx('top')}>
            <strong className={cx('title')}>JI-HO V2</strong>
            <p className={cx('desc')}>
              Equipped with the capability for long-duration flights, excels in aerial surveying,{'\n'}
              high-precision military/surveillance, and night flights.
            </p>
          </div>
          <div className={cx('bottom')}>
            <img src={JI_HO_V2} alt="" />
            <ul className={cx('list')}>
              <li>
                <span className={cx('bold')}>Material</span>
                <span>EPO Foam / White</span>
              </li>
              <li>
                <span className={cx('bold')}>Size</span>
                <span> 2170mm x 992mm x 300mm</span>
              </li>
              <li>
                <span className={cx('bold')}>Run Time</span>
                <span> 60 ~90Min</span>
              </li>
              <li>
                <span className={cx('bold')}>Operation Method</span>
                <span> Waypoint Flight</span>
              </li>
              <li>
                <span className={cx('bold')}>Flying Method</span>
                <span> Vertical Take Off and Landing, Fixed wing Flying</span>
              </li>
              <li>
                <span className={cx('bold')}>Take Off Weight</span>
                <span> 8kg</span>
              </li>
              <li>
                <span className={cx('bold')}>Max Payload</span>
                <span> 3kg</span>
              </li>
              <li>
                <span className={cx('bold')}>Cruise Flight Speed</span>
                <span> 60 ~ 120km/h </span>
              </li>
            </ul>
          </div>
        </div>
        <div className={cx('contents')}>
          <strong className={cx('title')}>Most Suitable Applications</strong>
          <div className={cx('row')}>
            <div className={cx('left')}>
              <p className={cx('title')}>Wide Area Mapping</p>
              <div className={cx('top')}>
                <img src={Mapping01} alt="" />
              </div>
              <div className={cx('bottom')}>
                <div className={cx('row')}>
                  <div className={cx('image')}>
                    <img src={Mapping02} alt="" />
                  </div>
                  <div className={cx('image')}>
                    <img src={Mapping03} alt="" />
                  </div>
                </div>
                <div className={cx('row')}>
                  <div className={cx('image')}>
                    <img src={Mapping04} alt="" />
                  </div>
                  <div className={cx('image')}>
                    <img src={Mapping05} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className={cx('right')}>
              <p className={cx('title')}>Wide Area Inspection</p>
              <div className={cx('top')}>
                <img src={Inspection01} alt="" />
              </div>
              <div className={cx('bottom')}>
                <img src={Inspection02} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
