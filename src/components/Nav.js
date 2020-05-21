import React from 'react';
import '../assets/styles/nav.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import jwt from 'jsonwebtoken';
import env from 'dotenv';
import logo from '../assets/images/logo@2x.png';
import Languages from './Languages';
import notificationIcon from '../assets/images/notification.svg';
import AddProfile from './AddProfile';

env.config();
const Nav = () => {
  const { tokenForTesting } = process.env;
  let token;
  process.env.NODE_ENV === 'test'
    ? (token = tokenForTesting)
    : (token = localStorage.getItem('user-token'));
  const { firstName, profileImage } = jwt.decode(token);
  const { t } = useTranslation();
  return (
    <div className="nav__background">
      <Languages />
      <Link to="/">
        <img className="logo" src={logo} />
      </Link>
      <div className="nav-auth">
        <ul>
          <li>
            <Link to="/Home">{t('Home.1')}</Link>
          </li>
          <li>
            <Link to="/pending">{t('Requests.1')}</Link>
          </li>
          <li>
            <Link to="/Bookings">{t('Bookings.1')}</Link>
          </li>
          <li>
            <Link to="/Stats">{t('Stats.1')}</Link>
          </li>
          <li className="notification">
            <Link to="/notification">
              <img src={notificationIcon} className="notification__icon" />
              <h6 className="notification__message">5</h6>
            </Link>
          </li>
          <AddProfile firstName={firstName} profileImage={profileImage} translate={t} />
        </ul>
      </div>
    </div>
  );
};

export default Nav;
