import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  return <div className={cx('container')}>svMax</div>;
};

export default Page;
