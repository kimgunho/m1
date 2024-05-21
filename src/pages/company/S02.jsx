import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import COMPANY from 'assets/images/company/company.png';

import styles from './S02.module.scss';

const cx = classNames.bind(styles);

const S02 = () => {
  const { t } = useTranslation();

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
                  <p>{t('company.S02_vision_desc')}</p>
                </div>
              </div>
              <div className={cx('card')}>
                <div className={cx('box')}>
                  <strong>MISSION</strong>
                  <p>{t('company.S02_mission_desc')}</p>
                </div>
              </div>
              <div className={cx('card')}>
                <div className={cx('box')}>
                  <strong>VALUE</strong>
                  <p>{t('company.S02_value_desc')}</p>
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
