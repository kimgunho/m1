import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import WIDE_RANGE_SURVEY from 'assets/images/service/survey/wide_range_survey.jpg';
import JI_HO_V2 from 'assets/images/service/survey/ji_ho_v2.png';
import REACH_M2_UAV from 'assets/images/service/survey/reach_M2_UAV.png';
import ILX_LR1 from 'assets/images/service/survey/ILX_LR1.png';

import List from 'components/ui/List';
import SubTop from 'components/ui/SubTop';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  const { t } = useTranslation();

  return (
    <div className={cx('container')}>
      <SubTop title="WIDE RANGE SURVEY" subTitle="SERVICE" />
      <div className={cx('wrapper')}>
        <div className={cx('contents')}>
          <strong className={cx('title')}>Wide Range Survey</strong>
          <div className={cx('top')}>
            <img src={WIDE_RANGE_SURVEY} alt="" />
          </div>
          <div className={cx('center')}>
            <div className={cx('left')}>
              <strong className={cx('title')}>
                Utility Drone<span className={cx('line')}></span>
              </strong>
              <div className={cx('row')}>
                <div className={cx('item')}>
                  <div className={cx('image')}>
                    <img src={JI_HO_V2} alt="" />
                  </div>
                  <p className={cx('name')}>JI-HO V2</p>
                </div>
              </div>
            </div>
            <div className={cx('right')}>
              <strong className={cx('title')}>
                Utility Equipment<span className={cx('line')}></span>
              </strong>
              <div className={cx('row')}>
                <div className={cx('item')}>
                  <div className={cx('image')}>
                    <img src={REACH_M2_UAV} alt="" />
                  </div>
                  <p className={cx('name')}>Reach M2 UAV Mapping Kit</p>
                </div>
                <div className={cx('item')}>
                  <div className={cx('image')}>
                    <img src={ILX_LR1} alt="" />
                  </div>
                  <p className={cx('name')}>ILX-LR1 - Sony Pro</p>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('bottom')}>
            <List
              list={[
                t('wideRangeSurvey.list_01'),
                t('wideRangeSurvey.list_02'),
                t('wideRangeSurvey.list_03'),
                t('wideRangeSurvey.list_04'),
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
