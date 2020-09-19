import React from "react";

interface DetailsProps {
  name: string;
}
export default function (props: DetailsProps) {
  const { name } = props;
  return (
    <div>
      Details
      {name}
    </div>
  );
}
