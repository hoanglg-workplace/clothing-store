import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-0 text " style={{fontWeight: '600', marginBottom: 50}}>New Season Arrivals</h5>
              <p className="card-text fs-5 d-none d-sm-block " style={{textAlign: 'center'}}>
                Discover our latest arrivals, a timeless collection of new season luxury essentials. From lightweight tailoring to effortless silk dresses and skirts, complimented by seasonal knitwear in crisp cottons.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
