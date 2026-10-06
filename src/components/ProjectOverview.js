import React, { useEffect} from "react";

export const ProjectOverview = (props) => {
    return <div className="project-section">
        <div className="screen-group">
            <div  className="fullscreen">
                <img src={props.fullscreen} alt={props.fullscreen_alt} />
            </div>
            <div  className="smallscreen">
                <img src={props.smallscreen} alt={props.smallscreen} />
            </div>
        </div>
        <h1>{props.projectTitle}</h1>
        <p>{props.projectDescription}</p>
        <p><a target="_blank" rel="noreferrer" href={props.link_destination}>{props.link_text}</a></p>
    </div>;
}