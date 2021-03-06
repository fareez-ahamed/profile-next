import data from "../data/data.json";
import React from "react";

const Experience: React.FC<{}> = props => (
  <section className="bg-gray-200">
    <div className="container mx-auto md:p-16 p-8 flex flex-col">
      <p className="font-condensed font-bold text-4xl mb-8">Experience</p>
      <div
        className="max-w-lg"
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gridTemplateRows: "auto",
          gridColumnGap: "2rem",
          justifyContent: "center",
          alignSelf: "center"
        }}
      >
        {data.experience.map((edu, i) => (
          <React.Fragment>
            <div className="flex">
              <p
                className="font-condensed font-medium text-xl"
                style={{ marginTop: "1.75rem" }}
              >
                {edu.joining_year}
              </p>
              <div className="flex flex-col px-3 items-center justify-stretch">
                <div
                  className={
                    i === 0 ? "" : `border-r-2 border-dotted border-gray-500`
                  }
                  style={{ height: "2.5rem" }}
                ></div>
                <div className="h-2 w-2 rounded-lg bg-black"></div>
                <div className="border-r-2 border-dotted border-gray-500 flex-grow"></div>
              </div>
            </div>
            <div className="flex flex-col pt-4 md:ml-8">
              <p className="font-sans font-semibold text-3xl">{edu.title}</p>
              <p className="font-sans text-xl">{edu.company}</p>
              <p className="font-sans text-gray-700 text-lg">{edu.location}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
