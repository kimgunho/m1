import classNames from 'classnames/bind';

import COMPANY from 'assets/images/company/company.png';

import styles from './S02.module.scss';

const cx = classNames.bind(styles);

const S02 = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('wrapper')}>
        <div className={cx('top')}>
          <p className={cx('company')}>MOBILITYONE</p>
          <div className={cx('box')}>
            <div className={cx('left')}>
              <strong>
                CORE Value,
                <br />
                Mission, Vision
              </strong>
            </div>
            <div className={cx('right')}>
              <div className={cx('card')}>
                <div className={cx('box')}>
                  <strong>VISION</strong>
                  <p>
                    Global Top Tier / Asia No.1
                    <br /> UxV Operation Platform Company
                  </p>
                </div>
              </div>
              <div className={cx('card')}>
                <div className={cx('box')}>
                  <strong>MISSION</strong>
                  <p>Integrating UxV into Daily Life</p>
                </div>
              </div>
              <div className={cx('card')}>
                <div className={cx('box')}>
                  <strong>VALUE</strong>
                  <p>Human Safety and Work Efficiency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={COMPANY} alt="" />
      </div>
    </div>
  );
};

export default S02;
