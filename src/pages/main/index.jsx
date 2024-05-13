import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import Parallax01_ICON from 'assets/images/main/integration_img.png';
import Parallax02_ICON from 'assets/images/main/safety_img.png';
import Parallax03_ICON from 'assets/images/main/extensibility_img.png';
import Parallax04_ICON from 'assets/images/main/easyToUse_img.png';

import Parallax from 'components/main/Parallax';
import { SCROLL_SPEED } from 'config';
import S01 from './S01';
import S02 from './S02';
import S03 from './S03';
import S04 from './S04';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  const { t } = useTranslation();
  const [percent, setPercent] = useState(0);
  const parallaxesRef = useRef();

  useEffect(() => {
    const mousewheel = (e) => {
      changePercent();
      handleScroll(e);
    };
    window.addEventListener('mousewheel', mousewheel, { passive: false });

    return () => {
      window.removeEventListener('mousewheel', mousewheel, { passive: false });
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

  const handleScroll = (e) => {
    e.preventDefault();
    window.scrollBy({
      top: e.deltaY * SCROLL_SPEED,
    });
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
        <Parallax subTitle="MOBILITYONE" title="WHO WE ARE" desc={t('main.whoWeAre')} />
        <Parallax subTitle="OUR ADVANTAGE 01" title="INTEGRATION" desc={t('main.integration')} icon={Parallax01_ICON} />
        <Parallax subTitle="OUR ADVANTAGE 02" title="SAFETY" desc={t('main.safety')} icon={Parallax02_ICON} />
        <Parallax
          subTitle="OUR ADVANTAGE 03"
          title="EXTENSIBILITY/&COMPATIBILITY"
          desc={t('main.extensibility')}
          icon={Parallax03_ICON}
        />
        <Parallax subTitle="OUR ADVANTAGE 04" title="EASY TO USE" desc={t('main.easyToUse')} icon={Parallax04_ICON} />
      </div>
      <S02 />
      <S03 />
      <S04 />
    </div>
  );
};

export default Page;
