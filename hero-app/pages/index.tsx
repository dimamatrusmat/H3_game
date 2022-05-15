import React from "react";
import { Htag, Button } from "../components";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">Текс</Htag>
      <Button appearance="primary">Click</Button>
      <Button appearance="ghost">Click</Button>

    </div>
  );
}
