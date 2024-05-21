import classNames from 'classnames/bind';

import Partners from 'components/ui/Partners';
import styles from './S06.module.scss';

const cx = classNames.bind(styles);

const S06 = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('wrapper')}>
        <strong className={cx('title')}>Partners</strong>
      </div>
      <Partners />
    </div>
  );
};

export default S06;
