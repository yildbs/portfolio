// App.tsx
import React from "react";
import Header from "./components/headers/Header"; // Import the Header component
import AboutMe from "./components/contents/AboutMe";
import Education from "./components/contents/Education";
import Experience from "./components/contents/Experience";
import EmailTag from "./components/headers/EmailTag";

const App: React.FC = () => {
  return (
    <div className="bg-background h-screen ">
      <div className="flex flex-col items-center">
        <div className="flex w-full max-w-6xl ">
          <Header /> 
        </div>

        <EmailTag></EmailTag>

        <main className="max-w-90 max-w-7xl px-10 py-20">

          <div className="flex h-fit px-10 py-10">
            <AboutMe></AboutMe>
          </div>

          <div className="flex h-fit px-10 py-10">
            <Education></Education>
          </div>

          <div className="flex h-fit px-10 py-10">
            <Experience />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
