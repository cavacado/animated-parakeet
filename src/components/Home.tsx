import React from "react";

interface HomeProps {
  name: string;
}
export default function (props: HomeProps) {
  const { name } = props;
  return (
    <div>
      Home
      {name}
    </div>
  );
}
