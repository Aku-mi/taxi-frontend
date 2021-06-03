import React, { useState } from "react";
import {
  GoogleMap,
  Marker,
  useLoadScript,
  Polyline,
  InfoWindow,
} from "@react-google-maps/api";
import { MapParams } from "./interfaces";
import { Coord } from "./interfaces";
import { polyOptions } from "./options";

const libraries: ["drawing"] = ["drawing"];

export const Map: React.FC<MapParams> = (props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBkZh15pan7fKGaZ1xhnkNMdMW2KiGojGk",
    libraries,
  });

  const [select, setSelect] = useState<Coord | null>(null);

  if (isLoaded) {
    return (
      <GoogleMap
        onClick={(e) => {
          if (props.isClick && props.onClick) {
            props.onClick(e);
          }
        }}
        mapContainerStyle={props.mapOptions.containerStyle}
        zoom={props.mapOptions.zoom}
        center={
          props.isAdmin
            ? props.mapOptions.center
            : props.coordsM[props.coordsM.length - 1]
        }
        options={props.mapOptions.options}
      >
        {props.isMarker &&
          props.coordsM.map((m) => (
            <Marker
              key={m.tmp}
              position={m}
              options={props.markerOptions}
              onClick={() => setSelect(m)}
            />
          ))}

        {select ? (
          <InfoWindow
            position={{ lat: select.lat, lng: select.lng }}
            onCloseClick={() => setSelect(null)}
          >
            <div>
              <p>User:{select.uid}</p>
              <p>Lat: {select.lat}</p>
              <p>Lng: {select.lng}</p>
              <p>
                Date: {new Date(parseInt(select.tmp as any)).toLocaleString()}
              </p>
            </div>
          </InfoWindow>
        ) : null}

        {props.isPoly &&
          props.coordsP.map((mp) => {
            if (
              mp.length > 1 &&
              mp[mp.length - 1].tmp !== mp[mp.length - 2].tmp
            ) {
              let k: any[] = [];
              for (let i = 0; i < mp.length; i++) {
                k.push({ lat: mp[i].lat, lng: mp[i].lng });
              }
              return (
                <Polyline
                  path={k}
                  options={{ ...polyOptions, strokeColor: mp[0].pathColor }}
                  key={mp[0].uid}
                  onClick={() => setSelect(mp[0])}
                />
              );
            } else {
              return <div></div>;
            }
          })}
      </GoogleMap>
    );
  } else {
    return <div>Map is not ready!</div>;
  }
};
