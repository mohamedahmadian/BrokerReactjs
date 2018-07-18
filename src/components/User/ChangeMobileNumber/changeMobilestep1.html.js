import React from 'react';

const ChangeMobilestep1 = ({ mobileNumber, changeMobileStep1 }) => {
  let currentPass, newMobile;
  return (
    <div class="d-flex flex-column justify-content-center w-100 my-4">
      <div class="col-xl-4 col-lg-6 col-md-8 col-sm-12 offset-xl-4 offset-lg-3 offset-md-2">
        <div class="form-group row">
          <label class="col-md-3 col-form-label">شماره فعلی</label>
          <div class="col-md-9">
            <input
              type="text"
              class="form-control"
              value={mobileNumber}
              disabled
              readonly
            />
          </div>
        </div>
      </div>

      <div class="col-xl-4 col-lg-6 col-md-8 col-sm-12 offset-xl-4 offset-lg-3 offset-md-2">
        <div class="form-group row">
          <label class="col-md-3 col-form-label">رمز عبور</label>
          <div class="col-md-9">
            <input
              type="password"
              class="form-control"
              name="password"
              autocomplete="new-password"
              ref={input => (currentPass = input)}
            />
          </div>
        </div>
      </div>

      <div class="col-xl-4 col-lg-6 col-md-8 col-sm-12 offset-xl-4 offset-lg-3 offset-md-2">
        <div class="form-group row">
          <label class="col-md-3 col-form-label">شماره جدید</label>
          <div class="col-md-9">
            <input
              type="text"
              maxlength="11"
              class="form-control"
              name="newMobilePhone"
              autocomplete="nope"
              ref={input => (newMobile = input)}
            />
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <div class="text-center">
          <button
            type="button"
            class="btn btn-success"
            onClick={() => changeMobileStep1({ currentPass: currentPass.value, newMobile:newMobile.value  })}
          >
            ادامه
            <i class="la la-arrow-left la-lg la-fw" />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ChangeMobilestep1;
