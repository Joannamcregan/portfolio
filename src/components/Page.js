import React, { useEffect} from "react";

export const Page = (props) => {
  useEffect(() => {
    document.title = `Joanna's Portfolio | ${props.title}`;
    window.scrollTo(0, 0);
  }, []);

  return <main>{props.children}</main>;
}