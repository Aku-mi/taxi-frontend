import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Map } from "../components/Map";
import { Coord } from "../components/Map/interfaces";
import { mapOptions } from "../components/Map/options";
import { Auth } from "../services/auth";
import { DateP } from "../components/Date";

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
  const [coords, setCoords] = useState<Coord[]>([
    {
      lat: 10.9878,
      lng: -74.7889,
      tmp: 0,
    },
    {
      lat: 10.987801,
      lng: -74.7889,
      tmp: 0,
    },
  ]);

  useEffect(() => {
    console.log(coords);
    Auth(setAuth, history);
  }, [auth, history]);

  if (auth) {
    return (
      <div>
        <DateP coords={setCoords} />
        <Map
          coords={coords}
          isPoly={coords.length > 1}
          isMarker={coords.length < 2}
          mapOptions={mapOptions}
          polyOptions={polyOptions}
        />
      </div>
    );
  } else {
    return <div>401</div>;
  }
};
