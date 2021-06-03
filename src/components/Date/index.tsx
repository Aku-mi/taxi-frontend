import React, { useState, useEffect } from "react";
import { Container, Btn } from "./Elements";
import { storage } from "../../services/storage";

export interface Datee {
  tmp1: number;
  tmp2: number;
}

export interface Users {
  name: string;
  id: string;
}

interface Params {
  clickHandler: (uid_: string, date: Datee) => void;
  isAdmin: boolean;
  users?: Users[];
}

export const DateP: React.FC<Params> = (props) => {
  const [date, setDate] = useState<Datee>({ tmp1: 0, tmp2: 0 });
  const [uid, setUid] = useState<string>("all");

  useEffect(() => {
    setUid((c) => (props.isAdmin ? c : storage.user().id));
  }, [props.isAdmin]);

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
                tmp1: new Date(e.target.value).getTime(),
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
                tmp2: new Date(e.target.value).getTime(),
              };
            });
          }}
          id="d2"
        />
        <br />

        {props.isAdmin && (
          <div>
            <label htmlFor="slt" id="d3">
              User
            </label>
            <select
              id="slt"
              value={uid}
              onChange={(e) => setUid(e.target.value)}
            >
              <option value="all">All Users</option>
              {props.users?.map((u) => (
                <option value={u.id} key={u.id}>
                  {u.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </form>
      <Btn onClick={() => props.clickHandler(uid, date)}>View</Btn>
    </Container>
  );
};
