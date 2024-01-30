// App.tsx
import React from 'react';
import Header from './components/headers/Header'; // Import the Header component

const App: React.FC = () => {
    return (
        <div className="App">
            <Header /> {/* Use the Header component */}
            <main className="pt-16">
                {/* Your main content here */}
                <p className="p-4">Your page content goes here</p>
            </main>
        </div>
    );
};

export default App;
