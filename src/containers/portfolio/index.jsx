import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";

import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";

import "./styles.scss";

const portfolioData = [
  {
    id: 2,
    name: "AI Agency",
    image: ImageOne,
    link: "https://agency-ai-lilac-eight.vercel.app/",
  },
  {
    id: 2,
    name: "Content Management System",
    image: ImageTwo,
    link: "",
  },
  {
    id: 2,
    name: "Netflix Clone",
    image: ImageThree,
    link: "https://github.com/DevRaj-2405/Frontend-Project",
  },
  {
    id: 2,
    name: "AI Student Performance Predictor",
    image: ImageFour,
    link: "https://ai-student-predictor-website-nine.vercel.app/",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>

        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a
                  href={item.link || undefined}
                  target={item.link ? "_blank" : undefined}
                  rel={item.link ? "noopener noreferrer" : undefined}
                >
                  <img alt={item.name} src={item.image} />
                </a>
              </div>

              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>

                    {item.link ? (
                      <button
                        onClick={() => window.open(
                          item.link,
                          "_blank",
                          "noopener,noreferrer"
                        )}
                      >
                        Visit
                      </button>
                    ) : (
                      <button disabled>
                        Visit
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;