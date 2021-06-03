import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";

interface Set {
  data: number[];
  label: string;
  borderColor: string;
  backgroundColor: string;
}

interface DataSet {
  sets: Set[];
  labels: string[];
}

export const Chart1: React.FC<DataSet> = (props) => {
  const [sets, setSets] = useState<Set[]>([
    { data: [1], backgroundColor: "", borderColor: "", label: "" },
  ]);
  useEffect(() => {
    setSets(
      props.sets.map((ds) => ({
        data: ds.data,
        borderColor: ds.borderColor,
        backgroundColor: ds.backgroundColor,
        label: ds.label,
      }))
    );
  }, [props.sets]);

  return (
    <Line
      type="line"
      data={{
        datasets: sets,
        labels: props.labels,
      }}
    />
  );
};

interface BarC {
  speedA: number;
  rpmA: number;
}

export const Chart2: React.FC<BarC> = (props) => {
  return (
    <Bar
      type="bar"
      data={{
        labels: ["Speed", "rpm"],
        datasets: [
          {
            label: "Average",
            backgroundColor: ["#333ffa", "#fa33be"],
            data: [props.speedA, props.rpmA],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: {
          display: true,
          text: "Total",
        },
      }}
    />
  );
};
