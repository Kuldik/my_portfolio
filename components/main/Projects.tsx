import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 z-100"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col gap-10 px-10 text-3xl">
        <ProjectCard
          src="./OP.jpg"
          title="Organic people"
          href="https://organic-people.com/blog/"
          description="The project consisted of two interconnected parts. The first part was built with Astro and React.js (TS, SASS) for fast, static product pages. The second part utilized WordPress and PHP, integrated with the Directus API. The header navigation links to the blog — which belongs to the WordPress (PHP) part — serving as a central hub providing access to all other pages I developed. "
        />
        <ProjectCard
          src="./Instoria.png"
          title="Instoria Website"
          description="This is multipage website build using HTML SASS, JS, PHP and WordPress. Also, in this website we use WooCommerce plugins as well. I did this project with my mentor. The task was to completely redesign the site and create additional functionality and pages in JS and PHP."
          href="https://instoria.ru"
        />
        <ProjectCard
          src="./history.gif"
          title="Historical Dates"
          description="Developed an interactive Historical Dates widget from scratch based on technical specifications and Figma designs. The component features a rotating timeline with six 5-year categories (1996-2025), synchronized year animations using GSAP, and a responsive event slider (Swiper). Built with React 18, TypeScript, and Sass, it ensures full accessibility and is designed as an independent, reusable block for multiple instances on a page."
          href="https://kuldik.github.io/historical_dates/"
        />
        <ProjectCard
          src="./BankDash.png"
          title="BankDash app"
          href="https://kuldik.github.io/Dashboard_UI_Kit/"
          description="This is online bank application. It is created using React.js. The goal of this project was to create a banking app that allows users to transfer money between accounts, check their balance, and make transactions."
        />
        <ProjectCard
          src="./Planner.png"
          title="Planner app"
          href="https://github.com/Kuldik/Planner"
          description="This is an application for planning tasks, with user authorization / registration functionality, a Pomodoro timer for monitoring concentration, a page for organizing a daily routine, and account settings."
        />
        <ProjectCard
          src="./Canvas.png"
          title="Canvas"
          href="https://codepen.io/Klimenko-Tim/pens/public"
          description="This is some canvas projects I have done. You can look at them on my codepen page."
        />
        <ProjectCard
          src="./EmailEditor.png"
          title="Email-Editor"
          href="https://github.com/Kuldik/Email-editor"
          description="This application allows you to type text, display it in a separate block, and apply different styles to it using the buttons on the panel below the text field."
        />
        <ProjectCard
          src="./Blog-project.png"
          title="Blog-project app"
          href="https://github.com/Kuldik/Blog-project"
          description="This app was build using React.js and MongoDB. It is a blog app where you can create, read, update and delete blog posts.And thanks to MongoDB server, u can register you account and log in it"
        />
      </div>
    </div>
  );
};

export default Projects;
