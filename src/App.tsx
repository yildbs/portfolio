// App.tsx
import React from "react";
import Header from "./components/headers/Header"; // Import the Header component
import AboutMe from "./components/contents/AboutMe";
import Education from "./components/contents/Education";
import Experience from "./components/contents/Experience";
import EmailTag from "./components/headers/EmailTag";
import Timeline from "./components/contents/Timeline";
import history from "./MyHistory.ts"

const App: React.FC = () => {
  return (
    <div className="bg-background h-full">
      <div className="flex flex-col items-center">
        <Header />

        <EmailTag></EmailTag>

        <main className="max-w-90 max-w-7xl px-10 py-20">
          <div className="flex h-fit px-10 py-20">
            <AboutMe></AboutMe>
          </div>

          <div className="flex h-fit px-10 py-10">
            <Education></Education>
          </div>

          <div className="flex h-fit px-10 py-10">
            <Timeline history={history} />
          </div>

          <div className="flex h-fit px-10 py-10">
            <Experience history={history}/>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
