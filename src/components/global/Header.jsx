import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import LOGO from 'assets/images/global/logo.png';

import menus from 'define/menus';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    window.addEventListener('mousewheel', scroll);

    return () => {
      window.removeChild('mousewheel', scroll);
    };
  }, []);

  const scroll = (e) => {
    if (window.scrollY === 0) {
      setHide(false);
      return;
    }

    e.deltaY > 0 ? setHide(true) : setHide(false);
  };

  const toggle = () => {
    if (lang === 'ko') {
      i18n.changeLanguage('en');
      localStorage.setItem('@m1/lang', 'en');
      setLang('en');
    } else {
      i18n.changeLanguage('ko');
      localStorage.setItem('@m1/lang', 'ko');
      setLang('ko');
    }
  };

  return (
    <header className={cx('container', { hide })}>
      <Link className={cx('logo')} to={'/'}>
        <img src={LOGO} alt="" />
      </Link>
      <div className={cx('wrapper')}>
        <ul className={cx('gnb')}>
          {menus.map((menu) => {
            if (menu.sub) {
              return (
                <li key={menu.title}>
                  <Link to={`${menu.url}${menu.sub[0].url}`}>{menu.title}</Link>
                  <ul className={cx('sub')}>
                    {menu.sub.map((_sub) => (
                      <li key={_sub.title}>
                        <Link to={`${menu.url}${_sub.url}`}>{_sub.title}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }
            return (
              <li key={menu.title}>
                <Link to={menu.url}>{menu.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <button onClick={toggle} className={cx('button')} type="button">
        {lang === 'ko' ? 'EN' : 'KR'}
      </button>
    </header>
  );
};

export default Header;
