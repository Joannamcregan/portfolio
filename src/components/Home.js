import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Page} from "./Page";
import {ProjectOverview} from "./ProjectOverview";

export function Home(props) {
  return (
   <>
    <Page title="Work">
        <ProjectOverview projectTitle="Better Safety Redirect" projectDescription="A simple but valuable site to demonstrate safety redirect functionality that can help keep DV victims safer" fullscreen={`${process.env.PUBLIC_URL}/img/safetyRedirectMainFull.jpg`} fullscreen_alt="a screenshot on a desktop view of an overlay with information and options to help domestic violence victims stay safe while visiting a site" smallscreen={`${process.env.PUBLIC_URL}/img/safetyRedirectMainSmall.jpg`} smallscreen_alt="a screenshot on a mobile screen of an overlay with information and options to help domestic violence victims stay safe while visiting a site" link_destination="https://mightbetime.netlify.app" link_text="visit site" />
        <ProjectOverview projectTitle="People Who Freelance" projectDescription="A proof of concept site for a freelancing platform" fullscreen={`${process.env.PUBLIC_URL}/img/pwfMainFull.jpg`} fullscreen_alt="a screenshot on a desktop view of a freelancing platform homepage" smallscreen={`${process.env.PUBLIC_URL}/img/pwfMainSmall.jpg`} smallscreen_alt="a screenshot on a mobile screen of a freelancing platform homepage" link_destination="https://peoplewhofreelance.org/" link_text="visit site" />
        <ProjectOverview projectTitle="Trunk of My Car" projectDescription="A proof multi-vendor marketplace WooCommerce site for authors and book lovers" fullscreen={`${process.env.PUBLIC_URL}/img/tomcMainFull.jpg`} fullscreen_alt="a screenshot on a desktop view of a book lovers' marketplace" smallscreen={`${process.env.PUBLIC_URL}/img/tomcMainSmall.jpg`} smallscreen_alt="a screenshot on a mobile screen of a book lovers' marketplace store page" link_destination="https://github.com/Joannamcregan/ebookMarketplace" link_text="view custom theme code" />
        <ProjectOverview projectTitle="Maggie Cregan Personal Site" projectDescription="A personal site for an up-and-coming playwright" fullscreen={`${process.env.PUBLIC_URL}/img/maggieMainFull.jpg`} fullscreen_alt="a screenshot on a desktop view of a playwright's personal site, featuring a photo and text" smallscreen={`${process.env.PUBLIC_URL}/img/maggieMainSmall.jpg`} smallscreen_alt="a screenshot on a mobile screen of a playwright's personal site, featuring a photo and text" link_destination="https://maggiecregan.com/" link_text="visit site" />
        <ProjectOverview projectTitle="McGee Waterproofing" projectDescription="An eye-catching site for a local waterproofing company" fullscreen={`${process.env.PUBLIC_URL}/img/mwMainFull.jpg`} fullscreen_alt="a screenshot on a desktop view of a waterproofing company website" smallscreen={`${process.env.PUBLIC_URL}/img/mwMainSmall.jpg`} smallscreen_alt="a screenshot on a mobile screen of a waterproofing company website" link_destination="https://mcgeewaterproofing.com/" link_text="visit site" />
    </Page>
    </>
  );
}