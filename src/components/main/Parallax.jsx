import { useRef } from 'react';
import classNames from 'classnames/bind';

import useRefObserver from 'hooks/useRefObserver';
import styles from './Parallax.module.scss';

const cx = classNames.bind(styles);

const Parallax = ({ subTitle, title, desc, icon }) => {
  const containerRef = useRef();
  const observer = useRefObserver(containerRef);

  return (
    <div ref={containerRef} className={cx('container')}>
      <div className={cx('wrapper')}>
        <div className={cx('left')}>
          <div className={cx('box')}>
            <p className={cx('text')}>{subTitle}</p>
            <p className={cx('title')}>
              {title.split('/').map((text) => (
                <span key={text}>{text}</span>
              ))}
            </p>
          </div>
          {icon && <img className={cx('icon', { hide: observer.bottom })} src={icon} alt="" />}
        </div>
        <div className={cx('right')}>
          <p className={cx('desc', { visible: observer.center })}>{desc}</p>
        </div>
      </div>
      <div className={cx('noise')} />
    </div>
  );
};

export default Parallax;
