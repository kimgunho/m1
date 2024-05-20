import classNames from 'classnames/bind';

import styles from './index.module.scss';
import S01 from './S01';
import S02 from './S02';
import S03 from './S03';
import S04 from './S04';

const cx = classNames.bind(styles);

const index = () => {
  return (
    <div className={cx('container')}>
      <S01 />
      <div className={cx('wrapper')}>
        <S02 />
        <S03 />
      </div>
      <S04 />
    </div>
  );
};

export default index;
