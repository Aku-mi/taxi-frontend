import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Map } from "../components/Map";
import { Coord } from "../components/Map/interfaces";
import { mapOptions } from "../components/Map/options";
import { Get } from "../services";
import { Auth } from "../services/auth";

const polyOptions = {
  strokeColor: "#000090",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF0000",
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
};

export const History: React.FC<RouteComponentProps> = ({ history }) => {
  const [auth, setAuth] = useState<boolean>(false);
  const [ft, setFt] = useState<number>(0);

  const [coords, setCoords] = useState<Coord[]>([
    {
      lat: 10.9878,
      lng: -74.7889,
      tmp: 0,
    },
  ]);

  const getData = async () => {
    const res = await Get(`/datos`);
    if (res) {
      setCoords((c) => {
        const newMarker = {
          lat: res.data.data.lat,
          lng: res.data.data.lng,
          tmp: res.data.data.tmp,
        };
        return [...c, newMarker];
      });
    }
  };

  useEffect(() => {
    if (ft === 0) {
      (async () => {
        const res = await Get("/datos2");
        setCoords(res.data.data);
      })();
      setFt(1);
    }

    Auth(setAuth, history);
    if (auth) {
      const interval = setInterval(async () => {
        await getData();
      }, 400);
      return () => clearInterval(interval);
    }
  }, [auth, history, coords, ft]);

  if (auth) {
    return (
      <div>
        <Map
          coords={coords}
          isPoly
          mapOptions={mapOptions}
          polyOptions={polyOptions}
        />
      </div>
    );
  } else {
    return <div>401</div>;
  }
};
