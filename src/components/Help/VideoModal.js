import React from 'react';

const VideoModal = ({ selectedVideo }) => {
  function pause(){
    document.getElementById('current-video').pause();
  }
  return (
    <div id="videoModal" className="modal fade" tabindex="-1" role="dialog" data-backdrop="static">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            




            
            
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <video id="current-video" width="100%" height="100%" controls>
              <source src={selectedVideo} type="video/mp4" />
              مرورگر شما منقرض شده است و این تکنولوژی رو پشتیبانی نمی نماید
            </video>
          </div>


          
          <footer class="modal-footer d-flex justify-content-between">
            <button
              type="button"
              class="btn btn-warning"
              data-dismiss="modal"
              onClick={pause}
            >
              <span>بازگشت</span>
              <i class="la la-lg la-fw la-arrow-left" />
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
