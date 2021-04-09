import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Link } from "react-router-dom";
import { Auth } from "../services/auth";
import "bootstrap/dist/css/bootstrap.min.css";

export const Home: React.FC<RouteComponentProps> = ({ history }) => {
  const [auth, setAuth] = useState<boolean>(false);

  useEffect(() => {
    Auth(setAuth, history);
  }, [auth, history]);

  if (auth) {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-12 col-md-4 my-2">
            <div
              className="card shadow p-3 mb-5 bg-body rounded"
              style={{ width: "18rem" }}
            >
              <img src="./mapl.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Track Taxis</h5>
                <p className="card-text">
                  see the location of your taxis in real time, it give you some
                  information like the date, latitude and longitude.
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
              <img src="./maph.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Track History</h5>
                <p className="card-text">
                  see the location of your taxis in real time, it also give you
                  the the rutes that the taxis took every day.
                </p>
                <Link to="/history" className="btn btn-secondary">
                  History
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque quam impedit labore, quod reprehenderit quia ipsam vitae
                  deleniti amet fugit. Sapiente quos debitis, laudantium
                  inventore testing this.
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
  } else {
    return <div>401</div>;
  }
};
