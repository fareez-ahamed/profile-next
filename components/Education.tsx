import data from "../data/data.json";
import React from "react";

const Education: React.FC<{}> = props => (
  <section>
    <div className="container mx-auto md:p-16 p-8">
      <p className="font-condensed font-bold text-4xl mb-8">Education</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gridTemplateRows: "auto",
          gridColumnGap: "2rem"
        }}
      >
        {data.education.map((edu, i) => (
          <React.Fragment>
            <div className="flex">
              <p
                className="font-condensed font-medium text-xl"
                style={{ marginTop: "1.75rem" }}
              >
                {edu.graduated_year}
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
            <div className="flex flex-col pt-4">
              <p className="font-sans font-semibold text-3xl">{edu.degree}</p>
              <p className="font-sans text-xl">{edu.speciality}</p>
              <p className="font-sans text-gray-700 text-lg">{edu.institute}</p>
              <p className="font-sans text-gray-700 text-lg">{edu.location}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
