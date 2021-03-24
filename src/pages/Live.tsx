import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Map } from "../components/Map";
import { Coord } from "../components/Map/interfaces";
import { mapOptions } from "../components/Map/options";
import { Get } from "../services";
import { Auth } from "../services/auth";

export const Live: React.FC<RouteComponentProps> = ({ history }) => {
  const [auth, setAuth] = useState<boolean>(false);

  const [coords, setCoords] = useState<Coord[]>([
    {
      lat: 10.9878,
      lng: -74.7889,
      tmp: 0,
    },
  ]);

  const getData = async () => {
    const res = await Get(`/datos`);
    if (res.data.data) {
      setCoords((c) => {
        const newMarker = {
          lat: res.data.data.lat,
          lng: res.data.data.lng,
          tmp: res.data.data.tmp,
        };
        return [newMarker];
      });
    }
  };

  useEffect(() => {
    Auth(setAuth, history);
    if (auth) {
      const interval = setInterval(async () => {
        await getData();
      }, 400);
      return () => clearInterval(interval);
    }
  }, [auth, history, coords]);

  if (auth) {
    return (
      <div>
        <Map coords={coords} isMarker mapOptions={mapOptions} />
      </div>
    );
  } else {
    return <div>401</div>;
  }
};
