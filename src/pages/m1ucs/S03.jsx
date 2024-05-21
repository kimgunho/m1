import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import MISSION_HUB from 'assets/images/m1ucs/mission_hub.png';

import List from 'components/ui/List';
import styles from './S03.module.scss';

const cx = classNames.bind(styles);

const S03 = () => {
  const { t } = useTranslation();

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
            <strong className={cx('title')}>{t('m1ucs.S03_list01_title')}</strong>
            <List
              list={[
                t('m1ucs.S03_list01_01'),
                t('m1ucs.S03_list01_02'),
                t('m1ucs.S03_list01_03'),
                t('m1ucs.S03_list01_04'),
              ]}
            />
          </div>
          <div className={cx('bottom')}>
            <strong className={cx('title')}>{t('m1ucs.S03_list02_title')}</strong>
            <List list={[t('m1ucs.S03_list02_01'), t('m1ucs.S03_list02_02'), t('m1ucs.S03_list02_03')]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default S03;
