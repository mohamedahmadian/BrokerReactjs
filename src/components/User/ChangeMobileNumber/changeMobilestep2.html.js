import React from 'react';

const ChangeMobilestep2 = ({ changeMobileStep2 }) => {
  let verificationCode;
  return (
    <div>
      <div className="d-flex flex-column justify-content-center w-100 my-4">
        <div class="col-xl-4 col-lg-6 col-md-8 col-sm-12 offset-xl-4 offset-lg-3 offset-md-2">
          <div
            class="form-inline w-100 d-flex justify-content-center mb-5"
            dir="ltr"
          >
            <input
              type="text"
              className="form-control-plaintext form-control-lg text-center verify-digit bg-light w-75 btn-rounded"
              name="code"
              maxlength="5"
              required
              ref={input => (verificationCode = input)}
            />
          </div>
        </div>
      </div>

      <footer class="card-footer">
        <div class="text-center">
          <button
            type="button"
            class="btn btn-success"
            onClick={() => changeMobileStep2(verificationCode.value)}
          >
            <i class="la la-check la-lg la-fw" /> تایید
          </button>
        </div>
        <div class="col-md-12" style={{ marginTop: '50px' }}>
          <div class="form-group row">
            <div class="col-md-12 alert alert-info text-center">
              در صورت عدم دریافت کد، لطفا عملیات تغییر شماره همراه را مجددا
              انجام دهید
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChangeMobilestep2;
