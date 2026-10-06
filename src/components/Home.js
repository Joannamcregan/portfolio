import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Page} from "./Page";
import {ProjectOverview} from "./ProjectOverview";

export function Home(props) {
  return (
    <Page title="Work">
      <ProjectOverview projectTitle="Better Safety Redirect" projectDescription="A simple but valuable site to demonstrate safety redirect functionality that can help keep DV victims safer" fullscreen="./img/safetyRedirectMainFull.jpg" fullscreen_alt="a screenshot on a desktop" smallscreen="./img/safetyRedirectMainSmall.jpg" smallscreen_alt="a screenshot on a mobile screen" link_destination="mightbetime.netlify.app" link_text="visit site" />
    </Page>
  );
}