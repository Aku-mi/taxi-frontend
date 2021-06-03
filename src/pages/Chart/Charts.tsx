import React, { useEffect, useState, useCallback } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Chart1, Chart2 } from "../../components/Chart";
import { DateP, Users } from "../../components/Date";
import { Auth } from "../../services/auth";
import { Get, Post } from "../../services";
import { Container } from "./Elements";
import { storage } from "../../services/storage";

export const Charts: React.FC<RouteComponentProps> = ({ history }) => {
  const [auth, setAuth] = useState<boolean>(false);
  const [dataSet1, setDataSet1] = useState([]);
  const [dataSet2, setDataSet2] = useState([]);
  const [lbls, setlbls] = useState([]);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [users, setUsers] = useState<Users[]>();
  const [isLine, setIsLine] = useState<boolean>(false);
  const [speedA, setSpeedA] = useState(0);
  const [rpmA, setRpmA] = useState(0);

  const clickHandler = useCallback(async (uid_, date) => {
    setIsLine(uid_ !== "all");

    if (uid_ === "all") {
      setIsLine(false);
      const res = await Post(`https://akumi.me/api/data/admin/chart-all`, date);
      if (res.data.data) {
        setSpeedA(res.data.data.speedA);
        setRpmA(res.data.data.rpmA);
      }
    } else {
      setIsLine(true);
      const res = await Post(
        `https://akumi.me/api/data/admin/chart/${uid_}`,
        date
      );
      if ((res.data.data as []).length === 0) {
        alert("There's no data to show in this time interval.");
        setDataSet1([]);
        setDataSet2([]);
        setlbls([]);
      } else {
        setDataSet1(res.data.data.map((d: any) => d.speed));
        setDataSet2(res.data.data.map((d: any) => d.rpm));
        setlbls(
          res.data.data.map((d: any) => new Date(d.tmp).toLocaleString())
        );
      }
    }
  }, []);

  useEffect(() => {
    Auth(setAuth, history);
    if (auth) {
      if (storage.user().role === "admin") {
        setIsAdmin(true);
        (async () => {
          const res = await Get(`/data/${storage.user().userName}/users`);
          if (res.data.data) {
            setUsers(res.data.data);
          }
        })();
      }
    }
  }, [history, auth]);

  if (auth) {
    return (
      <Container>
        <div className="date">
          <DateP isAdmin={isAdmin} users={users} clickHandler={clickHandler} />
        </div>
        <div className="lines">
          {isLine ? (
            <Chart1
              labels={lbls}
              sets={[
                {
                  data: dataSet1,
                  backgroundColor: "#333ffa",
                  borderColor: "#333ffa",
                  label: "Speed",
                },
                {
                  data: dataSet2,
                  backgroundColor: "#fa33be",
                  borderColor: "#fa33be",
                  label: "rpm",
                },
              ]}
            />
          ) : (
            <Chart2 rpmA={rpmA} speedA={speedA} />
          )}
        </div>
      </Container>
    );
  } else {
    return <div>401</div>;
  }
};
