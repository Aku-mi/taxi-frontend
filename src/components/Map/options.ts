import { MapOptions } from "./interfaces";
import styles from "./MapStyles/mapStyle";

export const mapOptions: MapOptions = {
  containerStyle: {
    width: "100%",
    height: "92vh",
  },
  zoom: 12,
  center: {
    lat: 10.9878,
    lng: -74.7889,
  },
  options: {
    styles,
    disableDoubleClickZoom: true,
    fullscreenControl: false,
    mapTypeControl: false,
  },
};

export const polyOptions = {
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF0000",
  fillOpacity: 0.35,
  clickable: true,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
};
