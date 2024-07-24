import EducationCard from "../../components/education-card";
import ProjectCard from "../../components/project-card";
import avatar from "../../assets/avatar.png";
import  { useState } from "react";

interface Project {
  name: string;
  year: string;
  description: string;
}
interface Education {
  name: string;
  summary: string;
}
const LandingPage = () => {
  const [increment, setIncrement] = useState<number>(0);
  const [toggle, setToggle] = useState<boolean>(false);

  const projects: Project[] = [
    {
      name: "Project A",
      year: "2019-2020",
      description: "lorem A",
    },
    {
      name: "Project B",
      year: "2019-2021",
      description: "lorem B",
    },
    {
      name: "Project C",
      year: "2019-2022",
      description: "lorem C",
    },
  ];

  const educations: Education[] = [
    {
      name: "Education A",
      summary: "2019-2020",
    },
    {
      name: "Education B",
      summary: "2019-2021",
    },
    {
      name: "Education C",
      summary: "2019-2022",
    },
  ];
  const handleIncrement = () => {
    setIncrement((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setIncrement((prev) => (prev > 0 ? prev - 1 : prev));
  };
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col justify-center items-center">
        <p>{increment} Increment</p>
        <div className="flex flex-row gap-5">
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        {toggle ? <div> show hide component</div> : <></>}
        <button onClick={handleToggle}>{toggle ? "hide" : "show"}</button>
      </div>
      <section className="flex flex-row justify-evenly items-center m-5">
        <div className="flex flex-col">
          <h1 className="">Hello World</h1>
          <p className="font-semibold">Riadi Wibowo</p>
        </div>
        <img src={avatar} className="w-60 rounded-sm scale-x-[-1]" />
      </section>

      <section className="flex flex-col p-3 bg-gray-100 gap-5">
        <label className="font-bold text-lg">Summary</label>
        <p className="font-semibold text-base text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis maxime architecto autem enim obcaecati laboriosam. Dolores incidunt, repudiandae voluptatibus porro ipsam maiores tempore nulla aliquam quam, iure, autem at minus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi iure perferendis ex blanditiis quibusdam laborum, qui ipsam, itaque iste et, hic provident voluptatum omnis sequi a impedit reiciendis placeat non?
        </p>
      </section>
      <section className="flex flex-col py-10">
        <label className="font-bold text-lg p-3">Projects</label>
        {projects.map((item: Project, index: number) => (
          <ProjectCard key={index} name={item.name} year={item.year} description={item.description} bgColor={`${index % 2 === 0 ? "bg-gray-100" : ""}`} />
        ))}
      </section>
      <section className="flex flex-col py-10">
        <label className="font-bold text-lg p-3">Education</label>
        {educations.map((item: Education, index: number) => (
          <EducationCard key={index} name={item.name} summary={item.summary} bgColor={`${index % 2 === 0 ? "bg-gray-100" : ""}`} />
        ))}
      </section>
    </div>
  );
};

export default LandingPage;
