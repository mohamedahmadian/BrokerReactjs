import React from 'react'
import { createMapWith2Markers } from '../../../../utils/MapService.js';
export default class OrderDetailSection2 extends React.Component {
    constructor(props) {
      super(props);
    }
  
    componentDidMount() {
      const model = this.props.model;
      createMapWith2Markers(
        'map_destination',
        {
          lat: model.orderDetail.originSpanLat,
          lng: model.orderDetail.originSpanLong
        },
        { lat: model.orderDetail.destinationSpanLat, lng:model.orderDetail.destinationSpanLong }
      );
    }
    render() 
    {
      const { model } = this.props;
      return (
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-2">
            <div>
              <dl className="m-0">
                <dt className="text-info small">
                  <i className="la la-map-marker la-lg la-fw" />مبدا بار
                </dt>
                <dd>{model.orderDetail.originCityTitle}</dd>
                <dt className="text-info small">
                  <i className="la la-map-marker la-lg la-fw" />محدوده مبدا
                </dt>
                <dd>{model.orderDetail.originSpan}</dd>
                <dt className="text-info small">
                  <i className="la la-user la-lg la-fw" />فرستنده
                </dt>
                <dd>{model.orderDetail.senderName}</dd>
                <dt className="text-info small">
                  <i className="la la-phone la-lg la-flip-horizontal la-fw" />تلفن
                  تماس
                </dt>
                <dd>{model.orderDetail.senderMobilePhone}</dd>
              </dl>
            </div>
          </div>
  
          <div className="col-lg-4 col-md-6 mb-2">
            <div>
              <dl className="m-0">
                <dt className="text-danger small">
                  <i className="la la-map-marker la-lg la-fw" />مقصد بار
                </dt>
                <dd>{model.orderDetail.destinationCityTitle}</dd>
                <dt className="text-danger small">
                  <i className="la la-map-marker la-lg la-fw" />محدوده مقصد
                </dt>
                <dd>{model.orderDetail.destinationSpan}</dd>
                <dt className="text-danger small">
                  <i className="la la-user la-lg la-fw" />گیرنده
                </dt>
                <dd>{model.orderDetail.transfereeName}</dd>
                <dt className="text-danger small">
                  <i className="la la-phone la-lg la-flip-horizontal la-fw" />تلفن
                  تماس
                </dt>
                <dd>{model.orderDetail.transfereeMobilePhone}</dd>
              </dl>
            </div>
          </div>
  
          <div className="col-lg-4 col-md-12 mb-2">
            <div
              id="map_destination"
              tabIndex="-1"
              className="w-100 border rounded text-center"
              style={{ height: '200px' }}
            >
              <span>
                <i className="fa fa-spinner fa-spin " /> در حال بارگزاری نقشه
              </span>
            </div>
          </div>
        </div>
      );
    }
  }