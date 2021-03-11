import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const Home: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-sm-12 col-md-4 my-2">
          <div
            className="card shadow p-3 mb-5 bg-body rounded"
            style={{ width: "18rem" }}
          >
            <img src="./taxi.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Track Taxis</h5>
              <p className="card-text">
                see the location of your taxes in real time, it give you some
                information like the date, latitude and longitude. It shows you
                an icon for every taxi that uses our system.
              </p>
              <Link to="/live" className="btn btn-secondary">
                Live Track
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 my-2">
          <div
            className="card shadow p-3 mb-5 bg-body rounded"
            style={{ width: "18rem" }}
          >
            <img src="./taxi.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Coming Soon...</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                numquam deleniti suscipit et excepturi molestiae deserunt ab
                pariatur dolor. Consequatur?
              </p>
              <Link to="#" className="btn btn-secondary">
                Coming Soon...
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 my-2">
          <div
            className="card shadow p-3 mb-5 bg-body rounded"
            style={{ width: "18rem" }}
          >
            <img src="./taxi.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Coming Soon...</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Exercitationem veritatis aliquam iste labore eos vitae cum eaque
                asperiores unde consectetur!
              </p>
              <Link to="#" className="btn btn-secondary">
                Coming Soon...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
