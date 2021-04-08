import React, { useState } from "react";
import { Container, Btn } from "./Elements";
import { Post } from "../../services";
import { Coord } from "../Map/interfaces";

export interface Datee {
  tmp1: number;
  tmp2: number;
}
export const DateP: React.FC<{ coords: (c: Coord[]) => void }> = (props) => {
  const [date, setDate] = useState<Datee>({ tmp1: 0, tmp2: 0 });
  return (
    <Container>
      <form>
        <label htmlFor="d1" id="d11">
          From
        </label>
        <input
          type="datetime-local"
          onChange={(e) => {
            setDate((c) => {
              return {
                tmp1: new Date(e.target.value).getTime() / 1000,
                tmp2: c.tmp2,
              };
            });
          }}
          id="d1"
        />
        <br />
        <label htmlFor="d2" id="d22">
          To
        </label>
        <input
          type="datetime-local"
          onChange={(e) => {
            setDate((c) => {
              return {
                tmp1: c.tmp1,
                tmp2: new Date(e.target.value).getTime() / 1000,
              };
            });
          }}
          id="d2"
        />
        <br />
      </form>
      <Btn
        onClick={async () => {
          const res = await Post("/time-set", date);
          if ((res.data.data as []).length < 1) {
            props.coords([{ lat: 0, lng: 0, tmp: 0 }]);
          } else {
            props.coords(res.data.data);
          }
          // props.coords([
          //   { lat: 10.9878, tmp: 0, lng: -74.7889 },
          //   { lat: 10.9878, tmp: 0, lng: -74.789 },
          // ]);
        }}
      >
        View
      </Btn>
    </Container>
  );
};
