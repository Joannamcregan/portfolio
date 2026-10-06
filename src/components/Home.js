import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Page} from "./Page";
import {ProjectOverview} from "./ProjectOverview";

export function Home(props) {
  return (
   <>
    <Page title="Work">
        <ProjectOverview projectTitle="Better Safety Redirect" projectDescription="A simple but valuable site to demonstrate safety redirect functionality that can help keep DV victims safer" fullscreen={`${process.env.PUBLIC_URL}/img/safetyRedirectMainFull.jpg`} fullscreen_alt="a screenshot on a desktop view of an overlay with information and options to help domestic violence victims stay safe while visiting a site" smallscreen={`${process.env.PUBLIC_URL}/img/safetyRedirectMainSmall.jpg`} smallscreen_alt="a screenshot on a mobile screen of an overlay with information and options to help domestic violence victims stay safe while visiting a site" link_destination="https://mightbetime.netlify.app" link_text="visit site" />
        <ProjectOverview projectTitle="People Who Freelance" projectDescription="A proof of concept site for a freelancing platform" fullscreen={`${process.env.PUBLIC_URL}/img/pwfMainFull.jpg`} fullscreen_alt="a screenshot on a desktop view of a freelancing platform homepage" smallscreen={`${process.env.PUBLIC_URL}/img/pwfMainSmall.jpg`} smallscreen_alt="a screenshot on a mobile screen of a freelancing platform homepage" link_destination="https://peoplewhofreelance.com" link_text="visit site" />
        <ProjectOverview projectTitle="Trunk of My Car" projectDescription="A proof multi-vendor marketplace WooCommerce site for authors and book lovers" fullscreen={`${process.env.PUBLIC_URL}/img/tomcMainFull.jpg`} fullscreen_alt="a screenshot on a desktop view of a book lovers' marketplace" smallscreen={`${process.env.PUBLIC_URL}/img/tomcMainSmall.jpg`} smallscreen_alt="a screenshot on a mobile screen of a book lovers' marketplace store page" link_destination="https://github.com/Joannamcregan/ebookMarketplace" link_text="view custom theme code" />
    </Page>
    </>
  );
}