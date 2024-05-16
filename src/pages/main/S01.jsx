import { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import gsap from 'gsap';

import POSTER from 'assets/images/temp/01_banner_bg.png';
import TEXT from 'assets/images/global/mobilityone_text.png';
import VIDEO from 'assets/video/main.mp4';

import styles from './S01.module.scss';

const cx = classNames.bind(styles);

const S01 = () => {
  const containerRef = useRef();

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });

    timeline.to(containerRef.current, { opacity: 0 }, 0);
  }, []);

  return (
    <div ref={containerRef} className={cx('container')}>
      <p className={cx('center')}>
        Mobility Robotics Operation Platform and Service!
        <br /> The Future of Mobility Robotics Operations through One Integrated Solution.
      </p>
      <video poster={POSTER} autoPlay muted loop>
        <source src={VIDEO} type="video/mp4" />
      </video>
      <div className={cx('bottom')}>
        <img src={TEXT} alt="" />
      </div>
      <div className={cx('dimmed')} />
    </div>
  );
};

export default S01;
