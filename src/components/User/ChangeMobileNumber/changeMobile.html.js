import React from 'react';
import ChangeMobilestep1 from './changeMobilestep1.html';
import ChangeMobilestep2 from './changeMobilestep2.html';

const ChangeMobile = ({
  mobileNumber,
  isStep1,
  changeMobileStep1,
  changeMobileStep2
}) => {
  return (
    <div>
      <header class="d-flex align-items-center justify-content-between mb-3">
        <div class="d-flex align-items-center">
          <img
            src="assets1/image/icon/phone.svg"
            class="ml-2"
            width="50"
            height="50"
            alt="راهنمای سامانه"
          />
          <h1 class="h4 text-primary mb-0">تغییر شماره همراه</h1>
        </div>
      </header>

      <section>
        <form class="card" autocomplete="off" name="changeMobileNumberForm">
          <header class="card-header border-secondary bg-secondary">
            <div class="clearfix d-block py-4">&nbsp;</div>
          </header>

          <main class="card-body">
            <div class="text-center modal-avatar-margin mb-5">
              <img
                src="assets1/image/icon/iphone.svg"
                class="rounded-circle border border-white mb-2 animation-hover animated rubberBand"
                width="100"
                height="100"
              />
              {isStep1 && (
                <h5 class="m-0">کد ارسال شده به شماره جدید خود را وارد کنید</h5>
              )}
            </div>

            {isStep1 && <ChangeMobilestep1 mobileNumber={mobileNumber} changeMobileStep1={changeMobileStep1} />}
            {!isStep1 && <ChangeMobilestep2 mobileNumber={mobileNumber} changeMobileStep2 ={changeMobileStep2} />}
          </main>

          
        </form>
      </section>
    </div>
  );
};

export default ChangeMobile;
