/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/socials/Laptoptable.jpg";

const imageAltText = "Desktop with accessories and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My blog website",
    description:
      "This is my blog website where I breifly explained my expertise and growth toward technology.",
    url: "https://coder-abdulhanan.github.io/MlsaTask/",
  },
  {
    title: "Introduction to AI",
    description:
      "Artificial intelligence is getting important to know day by day for humans, basics explained in this video.",
    url: "https://youtu.be/ad79nYk2keg?si=rw_at6E0hqV0l3H2",
  },
  {
    title: "My linkedIn profile",
    description:
      "Linked in much important as it is your updated resume which show your abilities.",
    url: "https://www.linkedin.com/in/abdul-hanan-81ba64237/",
  },
  {
    title: "How to use Github",
    description:
      "Concept of github and its uses is explained in this video.",
    url: "https://youtu.be/PQsJR8ci3J0?si=mZufxV4F2gIsvTvZ",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
