import React from 'react'
import { Link  } from 'react-router-dom'
import logo from '../../../assets1/image/logo/logo.png'
const Header = ({logout}) => {
  return (
       <header className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
              <a className="navbar-brand" href="#">
                <img
                  src={logo}
                  height="35"
                  alt="پاتوقی سامانه باربری آنلاین"
                />
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li
                    className="nav-item"
                    className="{'active': activeIndex==0}"
                  >
                    <Link className="nav-link" to="/Orders">
                      بارهای من

                    
                    </Link>
                  </li>

                  <li className="nav-item" className="{'active':activeIndex==1}">
                    <Link className="nav-link" to="/Case">
                      ثبت و پیگیری سوالات، پیشنهادات و انتقادات{' '}
                    </Link>
                  </li>

                  <li className="nav-item" className="{'active':activeIndex==2}">
                    <Link className="nav-link" to="/Help">
                      پشتیبانی و راهنما
                    </Link>
                  </li>

                  <li className="nav-item" className="{'active':activeIndex==3}">
                    <Link className="nav-link" to="/About">
                      درباره پاتوقی
                    </Link>
                  </li>
                </ul>

                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle d-flex align-items-center"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        src="{{imagePath == null || imagePath=='' ? 'assets1/image/icon/user-holder.svg' :  imagePath}}"
                        className="ml-2 rounded-circle img-fit"
                        width="35"
                        height="35"
                      />
                      <span>212313</span>
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right py-1"
                      aria-labelledby="navbarDropdown"
                    >
                      <a
                        className="dropdown-item p-1"
                        to="['/admin/broker/Edit']"
                      >
                        <i className="la la-gear la-lg la-fw" />ویرایش حساب کاربری
                      </a>
                      <div className="dropdown-divider my-1" />
                      <Link
                        className="dropdown-item p-1"
                        to="/orders/history"
                      >
                        <i className="la la-cube la-lg la-fw" />تاریخچه بارهای من
                      </Link>
                      <div className="dropdown-divider my-1" />
                      <Link
                        className="dropdown-item p-1"
                        to="/ChangePassword"
                      >
                        <i className="la la-lock la-lg la-fw" />تغییر رمز
                      </Link>
                      <div className="dropdown-divider my-1" />
                      <Link
                        className="dropdown-item p-1"
                        to="/ChangeMobile"
                      >
                        <i className="la la-lock la-lg la-fw" />تغییر شماره همراه
                      </Link>
                      <div className="dropdown-divider my-1" />
                      <a
                        className="dropdown-item p-1 text-danger"
                        style={{ cursor: 'pointer' }}
                        onClick={logout}
                      >
                        <i className="la la-sign-out la-lg la-fw" />خروج از سیستم
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
  )
}

export default Header
