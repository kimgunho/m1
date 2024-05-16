import classNames from 'classnames/bind';

import styles from './List.module.scss';

const cx = classNames.bind(styles);

const List = ({ list }) => {
  return (
    <ul className={cx('container')}>
      {list.map((line) => (
        <li key={line}>{line}</li>
      ))}
    </ul>
  );
};

export default List;
