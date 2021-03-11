import React, { useEffect, useState } from "react";
import { Map } from "../components/Map";
import { Coord } from "../components/Map/interfaces";
import { mapOptions } from "../components/Map/options";
import { Get } from "../services";

export const Live: React.FC = () => {
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
        return [newMarker];
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      await getData();
    }, 400);
    return () => clearInterval(interval);
  }, [coords]);

  return (
    <div>
      <Map coords={coords} isMarker mapOptions={mapOptions} />
    </div>
  );
};
