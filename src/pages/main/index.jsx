import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';

import Parallax01_ICON from 'assets/images/main/integration_img.png';
import Parallax02_ICON from 'assets/images/main/safety_img.png';
import Parallax03_ICON from 'assets/images/main/extensibility_img.png';
import Parallax04_ICON from 'assets/images/main/easyToUse_img.png';
import styles from './index.module.scss';
import Parallax from 'components/main/Parallax';
import S01 from './S01';

const cx = classNames.bind(styles);

const Page = () => {
  const [percent, setPercent] = useState(0);
  const parallaxesRef = useRef();

  useEffect(() => {
    const scroll = () => {
      changePercent();
    };
    window.addEventListener('mousewheel', scroll, { passive: false });

    return () => {
      window.removeEventListener('mousewheel', scroll, { passive: false });
    };
  }, []);

  const changePercent = () => {
    const height = parallaxesRef.current.clientHeight;
    const topOffset = parallaxesRef.current.offsetTop;
    const centerY = window.scrollY + window.innerHeight / 2;
    const scrollOffset = centerY - topOffset;
    const percent = scrollOffset > 0 ? Math.min((scrollOffset / height) * 100, 100) : 0;
    setPercent(percent);
  };

  return (
    <div className={cx('container')}>
      <S01 />
      <div ref={parallaxesRef} className={cx('parallaxes')}>
        <div className={cx('scrollbar')}>
          <div className={cx('thumb')}>
            <div className={cx('process')} style={{ height: `${percent}%` }} />
          </div>
        </div>
        <Parallax
          subTitle="MOBILITYONE"
          title="WHO WE ARE"
          desc="MOBILITYONE is a specialized solution and service company that integrates essential devices and technologies centered around on-site work and provides a work application that anyone can easily operate, aiming to make the world more efficient. With MobilityOne's solutions and services, you no longer have to waste time learning how to use devices, allowing you to focus solely on your work."
        />
        <Parallax
          subTitle="OUR ADVANTAGE 01"
          title="INTEGRATION"
          desc="Various types of unmanned vehicles such as robots and drones can be integrated into a single application, enabling systematic governance-centric operations."
          icon={Parallax01_ICON}
        />
        <Parallax
          subTitle="OUR ADVANTAGE 02"
          title="SAFETY"
          desc="Safety operation processes are in place to eliminate user errors, and it is possible to conduct safety inspections and predictive maintenance of critical components."
          icon={Parallax02_ICON}
        />
        <Parallax
          subTitle="OUR ADVANTAGE 03"
          title="EXTENSIBILITY/&COMPATIBILITY"
          desc="Based on the latest web technologies, it ensures excellent scalability and device compatibility, and is capable of providing services in all forms, including cloud, on-premise/stand-alone, and mobile."
          icon={Parallax03_ICON}
        />
        <Parallax
          subTitle="OUR ADVANTAGE 04"
          title="EASY TO USE"
          desc="The UI/UX of the solution is designed to be operated without any knowledge of the devices, allowing existing staff to use it easily without the need for additional training."
          icon={Parallax04_ICON}
        />
      </div>
    </div>
  );
};

export default Page;
