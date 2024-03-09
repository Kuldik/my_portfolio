import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col gap-10 px-10 text-3xl">
        <ProjectCard
          src="./Canvas.png"
          title="Canvas"
          description="This is some canvas projects I have done. You can look at them on my codepen page."
        />
        <ProjectCard
          src="./Blog-project.png"
          title="Blog-project app"
          description="This app was build using React.js and MongoDB. It is a blog app where you can create, read, update and delete blog posts.And thanks to MongoDB server, u can register you account and log in it"
        />
        <ProjectCard
          src="./Instoria.png"
          title="Instoria Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
};

export default Projects;
