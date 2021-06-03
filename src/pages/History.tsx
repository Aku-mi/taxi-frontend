import React, { useEffect, useState, useCallback } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Map } from "../components/Map";
import { Coord } from "../components/Map/interfaces";
import { mapOptions } from "../components/Map/options";
import { Auth } from "../services/auth";
import { Datee, DateP, Users } from "../components/Date";
import { Get, Post } from "../services";
import { storage } from "../services/storage";

export const History: React.FC<RouteComponentProps> = ({ history }) => {
  const [auth, setAuth] = useState<boolean>(false);
  const [isM, setIsM] = useState<boolean>(false);
  const [canClick, setCanClick] = useState<boolean>(false);
  const [uid, setUid] = useState<string>("all");
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [users, setUsers] = useState<Users[]>();
  const [tmps, setTmps] = useState<Datee>({ tmp1: 0, tmp2: 0 });
  const [coordsM, setCoordsM] = useState<Coord[]>([
    { lat: 10.9878, lng: -74.7889, tmp: 11 },
  ]);
  const [coordsP, setCoordsP] = useState<Coord[][]>([
    [
      { lat: 10.9878, lng: -74.7889, tmp: 11 },
      { lat: 10.987801, lng: -74.7889, tmp: 12 },
    ],
  ]);

  const dateClick = useCallback(
    async (uid_, date) => {
      setUid(isAdmin ? uid_ : storage.user().id);
      let ss = "";

      if (uid_ === "all") {
        ss = `time-all`;
      } else {
        ss = `time-set/${uid_}`;
      }

      const res = await Post(`/data/${storage.user().userName}/${ss}`, date);
      if ((res.data.data as []).length === 0) {
        alert("There's no data to show in this time interval.");
        setCanClick(false);
      } else {
        if (res.data.data.length === 1) {
          setIsM(true);
          setCoordsM(res.data.data);
        } else {
          if (uid_ !== "all") setCoordsP([res.data.data]);
          else setCoordsP(res.data.data);
          setIsM(false);
        }
        setCanClick(true);
        setTmps(date);
      }
    },
    [isAdmin]
  );

  const clickHandler = useCallback(
    async (e) => {
      if (canClick) {
        const res = await Post(
          `/data/${storage.user().userName}/area-set/${uid}`,
          {
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
            tmp1: tmps.tmp1,
            tmp2: tmps.tmp2,
          }
        );

        if (res.data.data) {
          setCoordsM(res.data.data);
          setIsM(true);
        }
      }
    },
    [tmps.tmp1, tmps.tmp2, canClick, uid]
  );

  useEffect(() => {
    Auth(setAuth, history);
    if (storage.user().role === "admin") {
      setIsAdmin(true);
      (async () => {
        const res = await Get(`/data/${storage.user().userName}/users`);
        if (res.data.data) {
          setUsers(res.data.data);
        }
      })();
    }
  }, [auth, history]);

  if (auth) {
    return (
      <div>
        <DateP isAdmin={isAdmin} users={users} clickHandler={dateClick} />
        <Map
          isAdmin={isAdmin}
          onClick={clickHandler}
          coordsM={coordsM}
          coordsP={coordsP}
          isPoly
          isMarker={isM}
          isClick
          mapOptions={mapOptions}
        />
      </div>
    );
  } else {
    return <div>401</div>;
  }
};
