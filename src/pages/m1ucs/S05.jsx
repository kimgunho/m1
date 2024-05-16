import { useRef } from 'react';
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import SURVEY_BG from 'assets/images/m1ucs/survey_bg.png';
import VIDEO_POSTER01 from 'assets/images/m1ucs/video_bg01.png';
import VIDEO_POSTER02 from 'assets/images/m1ucs/video_bg02.png';

import styles from './S05.module.scss';

const cx = classNames.bind(styles);

const S05 = () => {
  const slickRef = useRef();

  const settings = {
    centerMode: true,
    arrows: false,
    centerPadding: '100px',
    slidesToShow: 1,
    speed: 500,
  };

  const prev = () => {
    slickRef.current.slickPrev();
  };

  const next = () => {
    slickRef.current.slickNext();
  };

  return (
    <div className={cx('container')}>
      <div className={cx('slick')}>
        <div className={cx('controls')}>
          <button onClick={prev} className={cx('button', 'prev')} type="">
            <RiArrowLeftSLine size={48} />
          </button>
          <button onClick={next} className={cx('button', 'next')} type="">
            <RiArrowRightSLine size={48} />
          </button>
        </div>
        <Slider ref={(slider) => (slickRef.current = slider)} {...settings}>
          {Array(5)
            .fill()
            .map((_, i) => (
              <div key={i}>
                <div className={cx('card')}>
                  <div className={cx('left')}>
                    <div className={cx('top')}>
                      <p className={cx('subTitle')}>Use case</p>
                      <strong className={cx('title')}>
                        Efficiency in Surveying through the Simultaneous Operation of Multiple Drones
                      </strong>
                    </div>
                    <div className={cx('bottom')}>
                      <ul className={cx('list')}>
                        <li>
                          <strong>Work efficiency increased by up to 500%</strong>
                          <p>
                            Operating 5 drones simultaneously can yield a fivefold efficiency compared to single-drone
                            operations.
                          </p>
                        </li>
                        <li>
                          <strong>Labor costs reduced by up to 70%</strong>
                          <p>
                            A minimum of 5 drones (no maximum limit) can be operated simultaneously by a single person,
                            potentially reducing labor input from 2-3 people by up to 70%
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={cx('right')}>
                    <div className={cx('top')}>
                      <img src={SURVEY_BG} alt="" />
                    </div>
                    <div className={cx('bottom')}>
                      <div className={cx('left')}>
                        <button className={cx('play')}>PLAY</button>
                        <video poster={VIDEO_POSTER01}>{/* <source src={VIDEO} type="video/mp4" /> */}</video>
                      </div>
                      <div className={cx('right')}>
                        <button className={cx('play')}>PLAY</button>
                        <video poster={VIDEO_POSTER02}>{/* <source src={VIDEO} type="video/mp4" /> */}</video>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default S05;
