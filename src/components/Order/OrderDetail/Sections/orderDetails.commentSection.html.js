import React from 'react';

const OrderDetailCommentSection = () => {
  return (
    <div>
      <hr className="mt-4" />

      <p className="m-0">
        <a
          href=""
          className="collapsed-icon collapsed-right"
          data-toggle="collapse"
          data-target="#collapseDescription"
          aria-expanded="false"
          aria-controls="collapseDescription"
        >
          {' '}
          توضیحات بیشتر
        </a>
      </p>
    </div>
  );
};

export default OrderDetailCommentSection;
