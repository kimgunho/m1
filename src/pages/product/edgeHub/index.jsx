import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import M1EdgeHub from 'assets/images/product/m1EdgeHub/m1EdgeHub.png';

import List from 'components/ui/List';
import SubTop from 'components/ui/SubTop';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  const { t } = useTranslation();

  return (
    <div className={cx('container')}>
      <SubTop title="M1 EdgeHub" subTitle="PRODUCT - H/W" />
      <div className={cx('wrapper')}>
        <div className={cx('contents')}>
          <div className={cx('top')}>
            <img src={M1EdgeHub} alt="" />
            <ul className={cx('aside')}>
              <li>
                <strong>Flight Controller</strong>
                <p>PX4 / Ardupilot / Custom</p>
              </li>
              <li>
                <strong>Camera</strong>
                <p>Models that come with an SDK</p>
              </li>
              <li>
                <strong>Other Payload</strong>
                <p>Winch / RTK / Sensors</p>
              </li>
              <li>
                <strong>Communication Modem</strong>
                <p>RF / LTE</p>
              </li>
            </ul>
          </div>
          <div className={cx('bottom')}>
            <List
              list={[
                t('edgeHub.list_01'),
                t('edgeHub.list_02'),
                t('edgeHub.list_03'),
                t('edgeHub.list_04'),
                t('edgeHub.list_05'),
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
