/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Makes } from "../../../public/make/makesArr";
import Image from "next/image";

interface Props {
  props: Makes;
}

const Content: React.FC<Props> = ({ props }) => {
  const [screenSize, setScreenSize] = React.useState<string | null>(null);

  React.useEffect(() => {
    // Determine screen size and update state
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScreenSize("small");
      } else if (window.innerWidth < 1024) {
        setScreenSize("medium");
      } else {
        setScreenSize("large");
      }
    };

    handleResize(); // Initialize screen size
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imageSources: Record<string, string> = {
    small: "/make/road-lines-s.png",
    medium: "/make/road-lines-m.png",
    large: "/make/road_lines.png",
  };

  const currentImageSource = screenSize ? imageSources[screenSize] : "";

  return (
    <div className="text-black flex flex-col">
      <div className=" mx-4 md:mx-auto mt-12 md:px-6 lg:px-0 md:flex md:flex-col lg:flex-row lg:justify-center lg:items-start md:mt-32">
        <div
          id="header"
          className="mt-6 lg:ml-auto  lg:mr-32 font-headerFont lg:text-right"
        >
          <h2 className="text-#121214 text-[38px] leading-[44px] lg:text-[38px] lg:mb-2 ">
            Drive a {props.name}
          </h2>
          <div className="font-headerFont">{props.subTitle}</div>
        </div>

        <div
          id="paragraphs"
          className="pt-2 md:mt-4 md:w-[400px] lg:w-[400px] font-sans"
        >
          {" "}
          {/* Apply custom font stack */}
          <p className="font-normal m-0 mb-4 text-sm/[16px] leading-5">
            {props.intro}
          </p>
          <p className="font-normal m-0 text-sm/[16px] leading-5">
            {props.intro2}
          </p>
        </div>
      </div>

      <div>
        {currentImageSource && (
          <img
            src={currentImageSource}
            alt="Image"
            className="mx-0 w-full sm:my-14"
          />
        )}
      </div>

      <div className="flex md:items-center md:justify-center">
        <div
          id="DescriptionSection"
          className="flex sm:flex-col items-center justify-center lg:flex-row my-8 mx-4 lg:mx-6 md:w-[400px] lg:w-full"
        >
          {props.subDesc.map((desc, index) => (
            <div key={index} className="sm:pb-10 lg:px-6 lg:w-[333px]">
              <h4 className="m-0 text-#121214 mb-3 font-sans font-semibold text-xl tracking-normal leading-5">
                {desc.title}
              </h4>
              <p className="sm:text-xs lg:text-[15px] font-sans lg:leading-6">
                {desc.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        id="allAbout"
        className="md:flex md:flex-row lg:justify-evenly pb-[7.5%]"
      >
        <div className="md:w-1/2 flex items-center justify-center">
          <img src={props.image} alt="" className="w-full md:w-auto" />
        </div>
        <div className="pt-[2%] md:w-[400px] md:px-4 md:flex md:items-start md:justify-center md:flex-col xl:mr-[15%]">
          <h1 className="font-headerFont font-black text-2xl lg:text-5xl tracking-wide leading-[44px] mx-4 lg:leading-[60px]">
            {props.allAboutTitle}
          </h1>
          <p className="font-sans text-sm mx-4 lg:leading-6">
            {props.allAboutParagraph}
          </p>
        </div>
      </div>

      <div className="flex flex-col md:items-center md:justify-center mt-8">
        <div className="font-headerFont mb-3 mx-4 md:flex md:justify-center md:items-center md:flex-col">
          {" "}
          <h1 className="mb-3 text-3xl md:text-4xl">Top {props.name} Models</h1>
          <img src="/make/modelLines.png" alt="" />
        </div>
        <div
          id="models"
          className="flex sm:flex-col items-center justify-center lg:flex-row my-8 mx-4 lg:mx-6 md:w-[400px] lg:w-full"
        >
          {props.models.map((model) => (
            <div
              key={props.models.indexOf(model)}
              className="sm:pb-10 lg:px-6 lg:w-[333px]"
            >
              <h4 className="m-0 text-#121214 mb-3 font-sans font-semibold text-xl tracking-normal leading-5">
                {model.model}
              </h4>
              <p className="sm:text-xs lg:text-[15px] font-sans lg:leading-6">
                {model.modelDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
