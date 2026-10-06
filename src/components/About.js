import React, { useEffect } from "react";
import {Page} from "./Page";

export const About = () => {
  return (
    <>
      <Page title="About Joanna">
        <h1 className="centered-text">About Joanna</h1>
        <p>
          Joanna is a full stack developer with a love for good design. From working with databases to crafting user experiences, she's always thinking of ways to make things work better. When not at a computer, she enjoys reading, writing, studying psychology, and taking small adventures around Cleveland.
        </p>
      </Page>
    </>
  );
}
