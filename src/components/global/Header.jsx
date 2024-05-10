import { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import LOGO from 'assets/images/global/logo.png';
import menus from 'define/menus';
import { M1UCS_DOMAIN } from 'config';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
  const [selectMenu, setSelectMenu] = useState();

  const select = (_menu) => {
    if (selectMenu === _menu) {
      setSelectMenu();
    } else {
      setSelectMenu(_menu);
    }
  };

  return (
    <header className={cx('container')}>
      <Link className={cx('logo')} to={'/'}>
        <img src={LOGO} alt="" />
      </Link>
      <div className={cx('wrapper')}>
        <ul className={cx('gnb')}>
          {menus.map((menu) => {
            if (menu.sub) {
              const active = selectMenu?.title === menu.title;
              return (
                <li onClick={() => select(menu)} key={menu.title} className={cx({ active })}>
                  {menu.title}
                </li>
              );
            }
            return (
              <li key={menu.title}>
                <Link to={menu.url}>{menu.title}</Link>
              </li>
            );
          })}
          <li className={cx('gotoM1ucs')}>
            <a className={cx('link')} href={M1UCS_DOMAIN} target="_blank" rel="noreferrer">
              M1UCS
            </a>
          </li>
        </ul>
        <div className={cx('subBox', { visible: selectMenu })}>
          {selectMenu &&
            Object.values(selectMenu.sub).map((_sub) => {
              if (_sub.pages) {
                return (
                  <div key={_sub.title} className={cx('row')}>
                    <strong className={cx('title')}>{_sub.title}</strong>
                    <ul className={cx('list')}>
                      {_sub.pages.map((page) => (
                        <li key={page.title}>
                          {<Link to={`${selectMenu.url}${_sub.url}${page.url}`}>{page.title}</Link>}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }
              return (
                <Link className={cx('link')} to={`${selectMenu.url}${_sub.url}`} key={_sub.title}>
                  {_sub.title}
                </Link>
              );
            })}
        </div>
      </div>
      <button className={cx('button')} type="button">
        KR
      </button>
    </header>
  );
};

export default Header;
