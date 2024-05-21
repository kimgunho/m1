import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import TEMP from 'assets/images/temp/drone.jpg';

import RoundButton from 'components/ui/RoundButton';
import SubTop from 'components/ui/SubTop';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  return (
    <div className={cx('container')}>
      <SubTop title="NEWS" subTitle="MOBILITIYONE" />
      <div className={cx('wrapper')}>
        <p className={cx('text')}>
          NEWS <span className={cx('total')}>(24)</span>
        </p>
        <ul className={cx('list')}>
          {Array(10)
            .fill()
            .map((_, i) => (
              <li key={i}>
                <Link to={'/news/aaa'}>
                  <div className={cx('info')}>
                    <p className={cx('publishedAt')}>AUG 17, 2024</p>
                    <strong className={cx('title')}>Extensibility & Compatibility</strong>
                  </div>
                  <img src={TEMP} alt="" />
                </Link>
              </li>
            ))}
        </ul>
        <RoundButton text="MORE VIEW" onClick={() => console.log('more...')} />
      </div>
    </div>
  );
};

export default Page;
