import { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';

import M1_LOGO from 'assets/images/company/logo_bg.jpg';

import styles from './S03.module.scss';

const cx = classNames.bind(styles);

const S03 = () => {
  const { t } = useTranslation();
  const trackRef = useRef();
  const historyRef = useRef();
  const isDrag = useRef(false);
  const startX = useRef(0);
  const [scrollPercent, setScrollPercent] = useState(0);

  const HISTORY = [
    {
      years: '2022',
      summary: t('company.S03_2022_summary'),
      list: [{ title: t('company.S03_2022_list01_title'), img: M1_LOGO }],
    },
    {
      years: '2023',
      summary: t('company.S03_2023_summary'),
      list: [
        {
          title: t('company.S03_2023_list01_title'),
          desc: t('company.S03_2023_list01_desc'),
        },
        {
          title: t('company.S03_2023_list02_title'),
          desc: t('company.S03_2023_list02_desc'),
        },
        {
          title: t('company.S03_2023_list03_title'),
          desc: t('company.S03_2023_list03_desc'),
        },
      ],
    },
    {
      years: '2024',
      summary: t('company.S03_2024_summary'),
      list: [
        {
          title: t('company.S03_2024_list01_title'),
          desc: t('company.S03_2024_list01_desc'),
        },
        {
          title: t('company.S03_2024_list02_title'),
          desc: t('company.S03_2024_list02_desc'),
        },
        {
          title: t('company.S03_2024_list03_title'),
          desc: t('company.S03_2024_list03_desc'),
        },
        {
          title: t('company.S03_2024_list04_title'),
          desc: t('company.S03_2024_list04_desc'),
        },
        {
          title: t('company.S03_2024_list05_title'),
          desc: t('company.S03_2024_list05_desc'),
        },
        {
          title: t('company.S03_2024_list06_title'),
          desc: t('company.S03_2024_list06_desc'),
        },
      ],
    },
  ];

  const onMouseMove = (e) => {
    if (isDrag.current) {
      e.preventDefault();
      const trackWidth = trackRef.current.clientWidth;
      const offset = e.clientX - startX.current;
      const percent = Math.min(Math.max(scrollPercent + (offset / trackWidth) * 100, 0), 100);

      setScrollPercent(percent);
      scrollHistory(percent);
      startX.current = e.clientX;
    }
  };

  const scrollHistory = (percent) => {
    const historyWidth = historyRef.current.scrollWidth - historyRef.current.clientWidth;
    const result = (historyWidth * percent) / 100;
    historyRef.current.scrollLeft = result;
  };

  const onMouseLeave = () => {
    if (isDrag.current) {
      isDrag.current = false;
    }
  };

  const onScroll = (e) => {
    const width = historyRef.current.scrollWidth - historyRef.current.clientWidth;
    const scrollX = e.target.scrollLeft;
    setScrollPercent((scrollX / width) * 100);
  };

  const onMouseDown = (e) => {
    isDrag.current = true;
    startX.current = e.clientX;
  };

  const onMouseUp = () => {
    isDrag.current = false;
  };

  return (
    <div className={cx('container')}>
      <div className={cx('wrapper')}>
        <strong className={cx('title')}>HISTORY</strong>
      </div>
      <div className={cx('swipe')}>
        <ul onScroll={onScroll} ref={historyRef} className={cx('history')}>
          {HISTORY.map((data) => {
            return (
              <li key={data.summary}>
                <div className={cx('top')}>
                  <p className={cx('years')}>{data.years}</p>
                  <p className={cx('summary')}>{data.summary}</p>
                </div>
                <ul className={cx('list')}>
                  {data.list.map((item) => (
                    <li key={item.title}>
                      <strong className={cx('title')}>{item.title}</strong>
                      {item.img && <img src={item.img} alt="" />}
                      {item.desc && <p className={cx('desc')}>{item.desc}</p>}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
        <div className={cx('controls')}>
          <div onMouseUp={onMouseUp} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} className={cx('scrollbar')}>
            <div ref={trackRef} className={cx('track')}>
              <div onMouseDown={onMouseDown} style={{ left: `${scrollPercent}%` }} className={cx('thumb')}>
                <div className={cx('button')}>
                  <RiArrowLeftLine size={24} />
                </div>
                <div className={cx('button')}>
                  <RiArrowRightLine size={24} />
                </div>
              </div>
              <p className={cx('text')}>Swipe To Explore</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default S03;
