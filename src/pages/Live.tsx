import React, { useEffect, useState, useCallback } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Map } from "../components/Map";
import { Coord } from "../components/Map/interfaces";
import { mapOptions } from "../components/Map/options";
import { Get } from "../services";
import { Auth } from "../services/auth";
import { storage } from "../services/storage";

export const Live: React.FC<RouteComponentProps> = ({ history }) => {
  const [auth, setAuth] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [init, setInit] = useState(0);
  const [coordsM, setCoordsM] = useState<Coord[]>([
    { lat: 10.9878, lng: -74.7889, tmp: 11 },
  ]);
  const [coordsP, setCoordsP] = useState<Coord[][]>([
    [
      { lat: 10.9878, lng: -74.7889, tmp: 11 },
      { lat: 10.987801, lng: -74.7889, tmp: 12 },
    ],
  ]);

  const getData1 = useCallback(async () => {
    const res = await Get(`/data/${storage.user().userName}/last-one`);
    if (res.data.data) {
      if (init === 0) {
        setCoordsM([res.data.data]);
        setCoordsP([[res.data.data]]);
      }

      if (init === 1 && coordsM[coordsM.length - 1].tmp !== res.data.data.tmp) {
        setCoordsM([res.data.data]);
        setCoordsP((c) => {
          return [[...c[0], res.data.data]];
        });
      }
    }
  }, [coordsM, init]);

  const getData2 = useCallback(async () => {
    const res = await Get(`/data/${storage.user().userName}/all-last`);
    if (res.data.data) {
      setCoordsM(res.data.data);
      if (init === 1) {
        setCoordsP(() => {
          const newMarkers = res.data.data;
          let dk: Coord[][] = [];
          for (let i = 0; i < newMarkers.length; i++) {
            dk.push([newMarkers[i]]);
          }
          return dk;
        });

        setInit(2);
      }
      if (init === 2) {
        setCoordsP((c) => {
          const newMarkers = res.data.data;
          let k = [...c];
          for (let i = 0; i < newMarkers.length; i++) {
            if (
              k[i][k[i].length - 1].lat !== newMarkers[i].lat ||
              k[i][k[i].length - 1].lng !== newMarkers[i].lng
            ) {
              k[i].push(newMarkers[i]);
            }
          }
          return k;
        });
      }
    }
  }, [init]);

  useEffect(() => {
    Auth(setAuth, history);
    setIsAdmin(storage.user().role === "admin");
    if (auth) {
      const interval = setInterval(async () => {
        if (isAdmin) await getData2();
        else await getData1();
        setInit((c) => (c === 0 ? 1 : c));
      }, 400);
      return () => clearInterval(interval);
    }
  }, [auth, isAdmin, history, getData1, getData2]);

  if (auth) {
    return (
      <div>
        <Map
          isPoly
          isMarker
          isAdmin={isAdmin}
          coordsM={coordsM}
          coordsP={coordsP}
          mapOptions={mapOptions}
        />
      </div>
    );
  } else {
    return <div>401</div>;
  }
};
