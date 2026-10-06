import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Page} from "./Page";
import {ProjectOverview} from "./ProjectOverview";

export function Home(props) {
  return (
    <Page title="Work">
      <ProjectOverview projectTitle="Better Safety Redirect" projectDescription="A simple but valuable site to demonstrate safety redirect functionality that can help keep DV victims safer" fullscreen="./img/safetyRedirectMainFull.jpg" fullscreen_alt="a screenshot on a desktop of an overlay with information and options to help domestic violence victims stay safe while visiting a site" smallscreen="./img/safetyRedirectMainSmall.jpg" smallscreen_alt="a screenshot on a mobile screen of an overlay with information and options to help domestic violence victims stay safe while visiting a site" link_destination="mightbetime.netlify.app" link_text="visit site" />
      <ProjectOverview projectTitle="People Who Freelance" projectDescription="A proof of concept site for a freelancing platform" fullscreen="./img/pwfMainFull.jpg" fullscreen_alt="a screenshot on a desktop of a freelancing platform homepage" smallscreen="./img/pwfMainSmall.jpg" smallscreen_alt="a screenshot on a mobile screen of a freelancing platform homepage" link_destination="peoplewhofreelance.com" link_text="visit site" />
    </Page>
  );
}