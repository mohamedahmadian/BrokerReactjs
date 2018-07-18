import React from 'react';
import VideoModal from './VideoModal';
var _ = require('lodash');

export default class HelpItems extends React.Component {
  constructor() {
    super();
    this.state = { videoAddress: '' };
    this.selectVideo = this.selectVideo.bind(this);
  }
  selectVideo(address) {
    this.setState({ videoAddress: address });
  }

  render = () => (
    <div>
      <div className="row mb-5">
        <div className="col-lg-10 offset-lg-1 col-12">
          {_(this.props.model)
            .groupBy(p => p.staticTextFunctionalityTitle)
            .map((value, key) => (
              <div className="mb-4">
                <h4 className="text-primary mb-3">
                  <i className="la la-question-circle la-fw la-2x" />
                  {key}
                </h4>
                <div
                  className="accordion accordion-default accordion-solid"
                  id="m_accordion_3"
                  role="tablist"
                >
                  {value.map(help => (
                    <article className="accordion-item">
                      <div
                        className="accordion-item-head collapsed"
                        role="tab"
                        id={`m_accordion_3_item_1_head${help.id}`}
                        data-toggle="collapse"
                        href={`#m_accordion_3_item_1_body${help.id}`}
                        aria-expanded="false"
                      >
                        <span className="accordion-item-icon">
                          {(help.images.length === 0 ||
                            help.images.filter(p => p.type == 'Thumbnail')
                              .length == 0) && (
                            <img
                              src="assets1/image/icon/delivery.svg"
                              width="32"
                              height="32"
                            />
                          )}
                          {help.images.length !== 0 &&
                            help.images.filter(p => p.type == 'Thumbnail')
                              .length != 0 && (
                              <img
                                src={
                                  help.images.filter(
                                    p => p.type == 'Thumbnail'
                                  )[0].path
                                }
                                width="32"
                                height="32"
                              />
                            )}
                        </span>
                        <span className="accordion-item-title">
                          {help.title} {help.thumbnail}
                          {help.videoLink && (
                            <small className="mr-2">
                              <a
                                href=""
                                data-toggle="modal"
                                data-target="#videoModal"
                                className="badge badge-danger badge-pill d-inline-flex align-items-center"
                                onClick={() =>
                                  this.selectVideo(help.videoLink)
                                }
                              >
                                <i className="la la-play la-lg la-fw la-flip-horizontal" />نمایش
                                ویدئو
                              </a>
                            </small>
                          )}
                        </span>
                        <span className="accordion-item-mode" />
                      </div>
                      <div
                        className="accordion-item-body collapse"
                        id={`m_accordion_3_item_1_body${help.id}`}
                        role="tabpanel"
                        aria-labelledby="m_accordion_3_item_1_head"
                        data-parent="#m_accordion_3"
                      >
                        <div className="accordion-item-content text-justify">
                          <p innerHTML="{{help.message}}" />

                          <div
                            id={`carouselExampleIndicators${help.id}`}
                            className="carousel slide mb-3"
                            data-ride="carousel"
                          >
                            <ol className="carousel-indicators">
                              {help.images
                                .filter(p => p.type == 'WebSlider')
                                .map((s, i) => (
                                  <li
                                    data-target={`'carouselExampleIndicators'${
                                      help.id
                                    }`}
                                    data-slide-to="i"
                                    className={'active' ? i == 0 : ''}
                                  />
                                ))}
                            </ol>
                            <div className="carousel-inner">
                              {help.images
                                .filter(p => p.type == 'WebSlider')
                                .map((s, i) => (
                                  <div
                                    className="carousel-item "
                                    className={'active' ? i == 0 : ''}
                                  >
                                    <img
                                      className="d-block img-fluid img-fit"
                                      src={s.path}
                                    />
                                  </div>
                                ))}
                            </div>
                            <a
                              className="carousel-control-prev"
                              href={`#carouselExampleIndicators${help.id}`}
                              role="button"
                              data-slide="prev"
                            >
                              <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                              />
                              <span className="sr-only">Previous</span>
                            </a>
                            <a
                              className="carousel-control-next"
                              href={`#carouselExampleIndicators${help.id}`}
                              role="button"
                              data-slide="next"
                            >
                              <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                              />
                              <span className="sr-only">Next</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))
            .value()}
        </div>
      </div>
      <VideoModal selectedVideo={'https://hw19.cdn.asset.aparat.com/aparat-video/f9c2a96eaebdd3024c1e5c80ebf682a711116164-144p__52766.mp4'} />
    </div>
  );
}
