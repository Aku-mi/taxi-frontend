import React, { useState } from "react";
import {
  GoogleMap,
  Marker,
  LoadScript,
  Polyline,
  InfoWindow,
} from "@react-google-maps/api";
import { MapParams } from "./interfaces";
import { Coord } from "./interfaces";

export const Map: React.FC<MapParams> = (props) => {
  const [select, setSelect] = useState<Coord | null>(null);

  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyBTiR4vsuaY8Fw5lIaH7uOiIL2qG5qxGFM">
        <GoogleMap
          mapContainerStyle={props.mapOptions.containerStyle}
          zoom={props.mapOptions.zoom}
          center={props.mapOptions.center}
          options={props.mapOptions.options}
        >
          {props.isMarker &&
            props.coords.map((m) => (
              <Marker
                key={m.lat}
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
                <p>Lat: {select.lat}</p>
                <p>Lng: {select.lng}</p>
                <p>Date: {new Date(select.tmp as any).toLocaleString()}</p>
              </div>
            </InfoWindow>
          ) : null}

          {props.isPoly && (
            <Polyline
              path={props.coords}
              options={props.polyOptions}
              key={props.coords[0].lng}
            />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};
