import { Item } from "../Navbar/interfaces";

export interface RouteProp extends Item {
  component: React.FC;
}

export interface RouteProps {
  data: RouteProp[];
}
