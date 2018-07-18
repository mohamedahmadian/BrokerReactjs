import React from 'react';
import HelpItems from './helpItem.html';
const Help = ({ model = [], backupPhoneOffice }) => {
  return (
    <div>
      <header class="d-flex align-items-center mb-3">
        <img
          src="assets1/image/icon/support.svg"
          class="ml-2"
          width="60"
          height="60"
          alt="راهنمای سامانه"
        />
        <h1 class="h3 text-primary mb-0">راهنمای سامانه</h1>
      </header>
      <section>
        <div class="card mb-4">
          <div class="card-body text-center mt-4 mb-5 smooth-scroll">
            <h3 class="h4">توضیح استفاده از سامانه پاتوقی</h3>
            <hr class="line-separator w-10 m-b3" />
            <p class="mb-4 text-muted">
              برای استفاده از سامانه پاتوقی در صورت هر گونه مشکل می توانید فایل
              راهنمای تصویری را دانلود نمایید و یا از قسمت سوالات متداول مشکل
              خود را برطرف نمایید.
            </p>

            <a
              href="#FAQ"
              class="btn btn-secondary btn-rounded m-2 d-inline-block"
              style={{ color: 'white !important' }}
            >
              <i class="la la-lg la-fw la-question-circle" />بخش پشتیبانی و
              راهنمای صفحات
            </a>
          </div>

          <div class="text-center">
            <img
              src="assets1/image/icon/help.svg"
              class="w-50-xl w-60-lg w-75-sm w-80"
            />
          </div>
        </div>
        <div class="card card-body" id="FAQ">
          <div class="text-center my-4">
            <h2 class="h4">بخش پشتیبانی و راهنمای صفحات</h2>
            <hr class="line-separator w-10 m-b3" />
            <p class="mb-4 text-muted">
              این بخش مجموعه ای سوالاتی است که برای بیشتر کاربران رخ داده است.
              امید است که پاسخ این سوالات بتواند در رفع ابهام شما در خصوص سامانه
              پاتوقی موثر واقع گردد.
            </p>
          </div>

          <HelpItems model={model}  />

          <div class="d-flex align-items-center w-100 justify-content-center">
            <img
              src="assets1/image/icon/flashlight.svg"
              class="ml-3"
              width="100"
              height="100"
            />
            <div>
              <small class="d-block">جوابتو پیدا نکردی ؟ با ما تماس بگیر</small>
              <a class="h2 text-info" href="tel:0212343535" dir="ltr">
                {backupPhoneOffice}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;
