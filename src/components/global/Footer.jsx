import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiArrowRightUpLine } from 'react-icons/ri';

import TEXT_BG from 'assets/images/global/mobilityone_text.png';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const Footer = () => {
  const [position, setPosition] = useState(null);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onMouseMove = (e) => {
    const { clientX: left, clientY: top } = e;
    setPosition({ left, top });
  };

  const onMouseLeave = () => {
    setPosition(null);
  };

  return (
    <footer className={cx('container')}>
      <div className={cx('wrapper')}>
        <div className={cx('top')}>
          <Link to="/company#form" className={cx('box')}>
            <span className={cx('text')}>
              CONNECT WITH MOBILITYONE <RiArrowRightUpLine size={28} />
            </span>
            <span className={cx('email')}>sales@themobilityone.com</span>
          </Link>
          <div className={cx('box')}>
            <p className={cx('addr')}>
              302, 39-1, Seongsuil-ro 8-gil,
              <br />
              Seongdong-gu, Seoul, Republic of Korea
            </p>
            <a className={cx('tel')} href="tel:821020590246">
              +82 10 2059 0246
            </a>
          </div>
        </div>
        <div className={cx('bottom')} onClick={scrollTop} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
          <img className={cx('text')} src={TEXT_BG} alt="" />
          <div
            className={cx('cursor', { visible: position })}
            type="button"
            style={{ left: position?.left, top: position?.top }}>
            SCROLL TO TOP
          </div>
        </div>
      </div>

      <div className={cx('noise')} />
    </footer>
  );
};

export default Footer;
