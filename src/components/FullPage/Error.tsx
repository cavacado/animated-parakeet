import React from "react";
import { Blank } from "./styled";
import { Button } from "sgds-govtech-react";

interface ErrorProps {
  onRetry: () => void;
}

export default function (props: ErrorProps) {
  const { onRetry } = props;
  return (
    <Blank>
      <p>there was an error loading this page</p>
      <Button onClick={onRetry} isPrimary isRounded>
        Click here to retry
      </Button>
    </Blank>
  );
}
