import classNames from 'classnames/bind';
import { useState } from 'react';
import { RiArrowRightUpLine } from 'react-icons/ri';

import styles from './Footer.module.scss';
import TEXT_BG from 'assets/images/global/mobilityone_text.png';

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
      <div className={cx('top')}>
        <div className={cx('box')}>
          <p className={cx('text')}>
            CONNECT WITH MOBILITYONE <RiArrowRightUpLine size={28} />
          </p>
          <a className={cx('mail')} href="mailto:sales@themobilityone.com">
            sales@themobilityone.com
          </a>
        </div>
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
      <div className={cx('noise')} />
    </footer>
  );
};

export default Footer;
