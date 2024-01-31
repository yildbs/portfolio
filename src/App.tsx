// App.tsx
import React from "react";
import Header from "./components/headers/Header"; // Import the Header component
import AboutMe from "./components/contents/AboutMe";

const App: React.FC = () => {
  return (
    <div className="bg-emerald-200 h-screen ">
      <div className="flex flex-col items-center">
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div className="w-full max-w-4xl ">
          <Header /> {/* Use the Header component */}
        </div>
        <main className="w-full max-w-7xl px-10">
          <div>Main content</div>
          <AboutMe></AboutMe>
        </main>
      </div>
    </div>
  );
};

export default App;
