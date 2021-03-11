import { MapOptions } from "./interfaces";
import styles from "./MapStyles/mapStyle";

export const mapOptions: MapOptions = {
  center: {
    lat: 10.9878,
    lng: -74.7889,
  },
  containerStyle: {
    width: "100%",
    height: "92vh",
  },
  zoom: 12,
  options: {
    styles,
    disableDoubleClickZoom: true,
    fullscreenControl: false,
    mapTypeControl: false,
  },
};
