import classNames from 'classnames/bind';
import { RiPhoneLine, RiMap2Line } from 'react-icons/ri';

import styles from './S05.module.scss';

const cx = classNames.bind(styles);

const S05 = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('wrapper')}>
        <iframe
          className={cx('map')}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.4020169542728!2d127.05421715689127!3d37.545591167120975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca49666f0a995%3A0xe7705c1afb2be2ca!2z7ISc7Jq47Yq567OE7IucIOyEseuPmeq1rCDshLHsiJjsnbzroZw46ri4IDM5LTEgMzAy!5e0!3m2!1sko!2skr!4v1716185130628!5m2!1sko!2skr"
          allowFullScreen=""
          loading="lazy"
          title="mobilityOne Map"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
        <div className={cx('info')}>
          <a href="tel:01020590246">
            <RiPhoneLine size={32} />
            +82 10 2059 0246
          </a>
          <p>
            <RiMap2Line size={32} />
            302, 39-1, Seongsuil-ro 8-gil, Seongdong-gu, Seoul, Republic of Korea
          </p>
        </div>
      </div>
    </div>
  );
};

export default S05;
