import classNames from 'classnames/bind';

import styles from './SubTop.module.scss';

const cx = classNames.bind(styles);

const SubTop = ({ subTitle, title }) => {
  return (
    <div className={cx('container')}>
      <p className={cx('subTitle')}>{subTitle}</p>
      <strong className={cx('title')}>{title}</strong>
    </div>
  );
};

export default SubTop;
