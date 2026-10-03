import React, { useEffect } from "react";
import {Page} from "./Page";

export const About = () => {
  return (
    <>
      <Page title="About Joanna">
        <h1 className="centered-text">Joanna is a Person.</h1>
        <p>
          And she does person things.
        </p>
      </Page>
    </>
  );
}
