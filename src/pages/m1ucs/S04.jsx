import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import PREVIEWER_IMG01 from 'assets/images/m1ucs/mission_previewer01.jpg';
import PREVIEWER_PICTOGRAM from 'assets/images/m1ucs/previewer_pictogram.png';
import PREVIEWER_IMG02 from 'assets/images/m1ucs/mission_previewer02.jpg';

import List from 'components/ui/List';
import styles from './S04.module.scss';

const cx = classNames.bind(styles);

const S04 = () => {
  const { t } = useTranslation();

  return (
    <div className={cx('container')}>
      <strong className={cx('title')}>MISSION PREVIEWER</strong>
      <p className={cx('desc')}>Light and Intuitive</p>
      <div className={cx('contents')}>
        <div className={cx('top')}>
          <img src={PREVIEWER_IMG01} alt="" />
          <div className={cx('pictogram')}>
            <div className={cx('image')}>
              <div className={cx('arrow')} />
              <img src={PREVIEWER_PICTOGRAM} alt="" />
            </div>
            <p>{t('m1ucs.S04_desc')}</p>
          </div>
          <img src={PREVIEWER_IMG02} alt="" />
        </div>
        <div className={cx('bottom')}>
          <div className={cx('left')}>
            <strong className={cx('title')}>{t('m1ucs.S04_list01_title')}</strong>
            <List list={[t('m1ucs.S04_list01_01'), t('m1ucs.S04_list01_02'), t('m1ucs.S04_list01_03')]} />
          </div>
          <div className={cx('right')}>
            <strong className={cx('title')}>{t('m1ucs.S04_list02_title')}</strong>
            <List list={[t('m1ucs.S04_list02_01'), t('m1ucs.S04_list02_02')]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default S04;
