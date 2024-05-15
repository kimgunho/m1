import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Section02_PICTOGRAM from 'assets/images/main/integration_img.png';
import Section03_PICTOGRAM from 'assets/images/main/safety_img.png';
import Section04_PICTOGRAM from 'assets/images/main/extensibility_img.png';
import Section05_PICTOGRAM from 'assets/images/main/easyToUse_img.png';

import styles from './S02.module.scss';

const cx = classNames.bind(styles);

const S02 = () => {
  const { t } = useTranslation();
  const [process, setProcess] = useState(0);
  const containerRef = useRef();
  const sectionsRef = useRef([]);
  const noiseRef = useRef();

  const sections = [
    {
      subTitle: 'MOBILITYONE',
      title: 'WHO WE ARE',
      desc: t('main.whoWeAre'),
      pictogram: null,
    },
    {
      subTitle: 'OUR ADVANTAGE 01',
      title: 'INTEGRATION',
      desc: t('main.integration'),
      pictogram: Section02_PICTOGRAM,
    },
    {
      subTitle: 'OUR ADVANTAGE 02',
      title: 'SAFETY',
      desc: t('main.safety'),
      pictogram: Section03_PICTOGRAM,
    },
    {
      subTitle: 'OUR ADVANTAGE 03',
      title: 'EXTENSIBILITY/&COMPATIBILITY',
      desc: t('main.extensibility'),
      pictogram: Section04_PICTOGRAM,
    },
    {
      subTitle: 'OUR ADVANTAGE 04',
      title: 'EASY TO USE',
      desc: t('main.easyToUse'),
      pictogram: Section05_PICTOGRAM,
    },
  ];

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      const isLast = index === sectionsRef.current.length - 1;
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          scrub: true,
          start: 'center bottom',
          end: 'center center',
        },
      });

      if (isLast) {
        timeline.to(noiseRef.current, { opacity: 0 }, 0);
      }
      timeline.to(section, { className: cx(['section', 'overlap']) }, 0);
    });

    updatePercent();
  }, []);

  const updatePercent = () => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top bottom',
      end: 'bottom bottom',
      onUpdate: (self) => {
        setProcess(self.progress * 100);
      },
    });
  };

  return (
    <div ref={containerRef} className={cx('container')}>
      <div className={cx('scrollbar')}>
        <div className={cx('thumb')}>
          <div className={cx('process')} style={{ height: `${process}%` }} />
        </div>
      </div>
      {sections.map((section, index) => (
        <div key={section.title} ref={(el) => (sectionsRef.current[index] = el)} className={cx('section')}>
          <div className={cx('left')}>
            <div className={cx('top')}>
              <p className={cx('subTitle')}>{section.subTitle}</p>
              <strong className={cx('title')}>
                {section.title.split('/').map((text) => (
                  <span key={text}>{text}</span>
                ))}
              </strong>
            </div>
            {section.pictogram && <img className={cx('pictogram')} src={section.pictogram} alt="" />}
          </div>
          <div className={cx('right')}>
            <p>{section.desc}</p>
          </div>
        </div>
      ))}
      <div ref={noiseRef} className={cx('noise')} />
    </div>
  );
};

export default S02;
