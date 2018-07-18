import React from 'react';
import CityService from './../../utils/CityService';
import { AboutService } from './about.service';

const About = ({
  model,
  backupPhoneOffice,
  officeAddress,
  infoEmailAddress
}) => {

  function set()
  {
    AboutService.sub.next("d");
    AboutService.res({p:"hello 123132132123",y:"bye bye"});
  }
  return (
    <div>
      <header className="d-flex align-items-center mb-3">
        <img
          src="assets1/image/icon/workplace.svg"
          className="ml-2"
          width="60"
          height="60"
          alt="راهنمای سامانه"
        />
        <h1 className="h3 text-primary mb-0">درباره پاتوقی</h1>
        
      </header>

      <section>
        <div className="card mb-4">
          <div className="row align-items-center p-5">
            <div className="col-xl-4 col-lg-5 col-md-12">
              <div className="img-frame w-100-lg w-75-md mx-auto">
                {model.images != null && (
                  <img src={model.images[0].path} className="img-fluid" />
                )}
              </div>
            </div>

            <article className="col-xl-8 col-lg-7 col-md-12 text-justify">
              <h3 className="h4">{model.title}</h3>
              <hr className="line-separator w-10 m-b3 d-inline-flex" />
              <p className="mb-4 text-muted">{model.message}</p>
            </article>
          </div>

          <address className="row p-5">
            <div className="col-md-6 col-sm-12 my-3">
              <div className="d-flex flex-xl-row flex-lg-row flex-md-row flex-column align-items-center w-100 justify-content-center">
                <img
                  src="assets1/image/icon/iphone.svg"
                  className="ml-3 animation-hover animated jello"
                  width="100"
                  height="100"
                />
                <div className="my-2">
                  <a
                    className="h2 text-info"
                    href="tel:{{setting.backupPhoneOffice}}"
                    dir="ltr"
                  >
                    {backupPhoneOffice}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-12 my-3">
              <div className="d-flex flex-xl-row flex-lg-row flex-md-row flex-column align-items-center w-100 justify-content-center">
                <img
                  src="assets1/image/icon/letter.svg"
                  className="ml-3 animation-hover animated jello"
                  width="100"
                  height="100"
                />
                <div className="my-2">
                  <small className="d-block">
                    انتقاد ، پیشنهاد ، در اولین فرصت پاسخ خواهیم داد
                  </small>
                  <a className="h2 text-info" href="mailto:" dir="ltr">
                    {infoEmailAddress}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 my-3">
              <div className="d-flex flex-xl-row flex-lg-row flex-md-row flex-column align-items-center w-100 justify-content-center">
                <img
                  src="assets1/image/icon/pointer.svg"
                  className="ml-3 animation-hover animated jello"
                  width="100"
                  height="100"
                />
                <div className="my-2">
                  <small className="d-block">دفتر مرکزی پاتوقی</small>
                  <span className="h5">{officeAddress}</span>
                </div>
              </div>
            </div>
          </address>
        </div>
      </section>
    </div>
  );
};

export default About;
