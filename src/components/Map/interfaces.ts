export interface Coord {
  lat?: number;
  lng?: number;
  tmp?: number;
  id?: number;
  uid?: string;
  pathColor?: string;
}

export interface MapOptions {
  containerStyle: object;
  zoom: number;
  options: object;
  center: object;
}

export interface MapParams {
  coordsM: Coord[];
  coordsP: Coord[][];
  isPoly?: boolean;
  isMarker?: boolean;
  mapOptions: MapOptions;
  markerOptions?: object;
  polyOptions?: object;
  isLive?: boolean;
  isHistory?: boolean;
  isClick?: boolean;
  onClick?: (e: any) => void;
  isAdmin: boolean;
}
