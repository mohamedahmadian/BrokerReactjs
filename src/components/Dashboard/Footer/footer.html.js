import React, { Component } from 'react';
const Footer = ({ footer }) => (
  <footer className="mt-auto align-items-end container">
    <hr className="m-0 line-separator" />
    <div className="d-flex flex-lg-row flex-xl-row flex-md-row flex-column align-items-center justify-content-between">
      <div className="my-2">
        {footer.showGigsInfo && (
          <p>
            کلیه حقوق مادی و معنوی این سایت محفوظ و متعلق به
            <a href="//golrang.com/">گروه صنعتی گلرنگ</a> است. ۱۳۹۷ ©
            &nbsp;&nbsp; توسعه توسط{' '}
            <a href="//www.golrangsystem.com/">گلرنگ سیستم</a>
          </p>
        )}
      </div>

      <ul className="list-inline my-2">
        <li className="list-inline-item">
          <a href="AppDefaultSetting.telegramAddress">
            <img
              src="assets1/image/icon/telegram.svg"
              className="animation-hover animated jello"
              width="40"
              height="40"
              title="با ما در تلگرام"
            />
          </a>
        </li>
        <li className="list-inline-item">
          <img
            src="assets1/image/icon/phone.svg"
            className="animation-hover animated jello"
            width="40"
            height="40"
            title="پشتیبانی"


            
          />




          <span>شماره پشتیبانی:</span>
          <a href={`tel:${footer.backupPhoneOffice}`} dir="ltr">
            {footer.backupPhoneOffice}
          </a>
        </li>
      </ul>
    </div>
  </footer>
);
export default Footer;
