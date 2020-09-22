import React from "react";
import { Blank } from "./styled";

interface FullPageProps {
  description: string;
}

export default function (props: FullPageProps) {
  const { description } = props;
  return (
    <Blank>
      <p>{description}</p>
    </Blank>
  );
}
