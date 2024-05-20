import classNames from 'classnames/bind';

import styles from './index.module.scss';
import S01 from './S01';
import S02 from './S02';
import S03 from './S03';
import S04 from './S04';
import S05 from './S05';
import S06 from './S06';

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
      <S05 />
      <S06 />
    </div>
  );
};

export default index;
