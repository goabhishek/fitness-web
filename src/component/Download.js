import React from "react";

const DownloadApp = () => {
  return (
    <section
      id="download"
      className="download-area second-download pt-120 pb-120 "
      
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="download-title section-title mb-60">
              <h1 style={{color:"#fff" }}>Download App</h1>
              <p style={{color:"#fff" }}>
                Get the latest and hottest Fitness, Diet, Building, Blockchain and
                other happening of Decentralized world. Be the first one to know
                and tak action. Download Our Fitness Application for free, now.
              </p>
            </div>
            <div className="get-app">
              {/* <a
                href="https://play.google.com/store/apps/details?id=com.newsshorts"
                className="mb-10"
                target="_blank"
                rel="noreferrer"
              > */}
                <i className="ti-google" />
                <p>
                  Avaliable on <br /> <b>Google Store</b>
                </p>
              {/* </a> */}
            </div>
          </div>
          <div className="col-xl-5 offset-xl-1 col-lg-6 text-center d-none d-lg-block">
            <div
              className="download-img second-download-img wow fadeInRight"
              data-wow-delay="0.2s"
            >
              <img src="../logo.svg" alt="app" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DownloadApp;