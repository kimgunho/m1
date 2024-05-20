import { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';

import M1_LOGO from 'assets/images/company/logo_bg.jpg';

import styles from './S03.module.scss';

const HISTORY = [
  {
    years: '1998 - 2018',
    heading: 'IT 경험',
    list: [{ title: 'Application Architecture,  SW Modeling,\nProject PM / LGCNS & DOOSAN' }],
  },
  {
    years: '2019 - 2022',
    heading: '무인이동체 실증 경험',
    list: [
      {
        title: '드론 실증도시/샌드박스 사업 참여 / DOOSAN',
        desc: '드론 실증도시/샌드박스 사업 참여 7회, 국토부장관 표창수상(2021)',
      },
    ],
  },
  {
    years: '2021 - 2022',
    heading: '관제솔루션 개발/ 사업화 경험',
    list: [
      {
        title: '사족로봇 원격제어 및 드론 영상분석 시스템 개발 / DOOSAN ',
        desc: '사족로봇 원격제어 시스템 개발 (고스트로보틱스 Vision60)\n가스배관 매립도로 드론순찰 영상감시 시스템 개발 (굴착기 자동인식)\n 태양광 패널 검사 시스템 개발(결함분석, 위치확인, 결과 리포트)',
      },
    ],
  },
  {
    years: '2022',
    heading: '창업',
    list: [{ title: '12월 12일 (주)모빌리티원 설립', img: M1_LOGO }],
  },
  {
    years: '2023',
    heading: '솔루션 개발 및 실증',
    list: [
      { title: '통합 원격제어 플랫폼 개발 및 이기종 적용', desc: 'UGV(Wheel, Quadruped),UAV-Copter, UAV-VTOL, USV' },
      { title: 'M1UCS 공급', desc: '(주)스마티, (주)글로벌코리아, 제주자치경찰단 ITS, (주)이화트론 등' },
      { title: '창업 지원/대회', desc: '중기부 디딤돌 서비스 R&D, 서울창조경제 Startup TechBlaze 우수상' },
    ],
  },
  {
    years: '2024',
    heading: '솔루션 고도화 및 적용 확대',
    list: [
      { title: '솔루션 고도화 및 적용 확대', desc: '특허 제10-2638951호' },
      { title: 'M1UCS 공급(예정)', desc: '남원시, 김천시, 구미시, (주)아쎄따, (주)쿼터니언,  (주)프리뉴 등' },
      { title: '오픈이노베이션', desc: '수소UGV 원격제어(실 내/외 통합), VTOL 드론 다중운영(항공데이터 취득)' },
      { title: '국가과제', desc: '대규모 로봇융합 실증 등 ' },
      { title: '해외사업추진', desc: '사우디(수상로봇), 방글라데시(VTOL)' },
    ],
  },
];
const cx = classNames.bind(styles);

const S03 = () => {
  const trackRef = useRef();
  const historyRef = useRef();
  const isDrag = useRef(false);
  const startX = useRef(0);
  const [scrollPercent, setScrollPercent] = useState(0);

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
              <li key={data.heading}>
                <div className={cx('top')}>
                  <p className={cx('years')}>{data.years}</p>
                  <p className={cx('heading')}>{data.heading}</p>
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
          <div onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} className={cx('scrollbar')}>
            <div ref={trackRef} className={cx('track')}>
              <div
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                style={{ left: `${scrollPercent}%` }}
                className={cx('thumb')}>
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
