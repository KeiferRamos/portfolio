import React, { useState } from "react";
import ReactPlayer from "react-player";
import { BiFullscreen, BiRightArrow } from "react-icons/bi";
import { BsPauseFill } from "react-icons/bs";

function Video({
  link,
  applink,
  title,
  description,
  source: { server, client },
  tools,
}) {
  const [isfullScreen, setisfullScreen] = useState(false);

  const setFullScreen = () => setisfullScreen(!isfullScreen);

  return (
    <div className="project-info">
      <div className={`${isfullScreen && "fullscreen"} video-holder`}>
        <ReactPlayer url={link} width="100%" height="90%" />
        <div className="btn-holder">
          <BiFullscreen onClick={() => setFullScreen()} />
        </div>
      </div>
      <div className="info">
        <h3>{title}</h3>
        {applink && (
          <button className="applink">
            <a href={applink} target="_blank">
              GO TO APP
            </a>
          </button>
        )}
        <p>{description}</p>
        <div className="source">
          <h3>source code</h3>
          {server && (
            <>
              server:<a href={server}> {server}</a>
            </>
          )}
          <br />
          client:<a href={client}> {client}</a>
        </div>
        <h3>Tools</h3>
        <div className="tools">
          {tools.map((tool, i) => (
            <div key={i}>{tool}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Video;
