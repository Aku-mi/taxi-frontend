export interface Coord {
  lat?: number;
  lng?: number;
  tmp?: number;
}

export interface MapOptions {
  containerStyle: object;
  zoom: number;
  center: Coord;
  options: object;
}

export interface MapParams {
  coords: Coord[];
  isPoly?: boolean;
  isMarker?: boolean;
  mapOptions: MapOptions;
  markerOptions?: object;
  polyOptions?: object;
}
