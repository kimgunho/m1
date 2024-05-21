import classNames from 'classnames/bind';

import Partners from 'components/ui/Partners';
import styles from './S04.module.scss';

const cx = classNames.bind(styles);

const S04 = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('box')}>
        <strong className={cx('title')}>PARTNERS</strong>
      </div>
      <Partners />
    </div>
  );
};

export default S04;
