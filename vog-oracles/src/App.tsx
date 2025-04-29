import React from 'react';                          // import react
import OraclesGamePage from './components/OraclesGamePage.tsx';    // import game component
import './App.css';                                 // css for this component

// create the app component and set it to the oracles game page component
const App: React.FC = () => {
    return (
        <div className="App">
            <OraclesGamePage />
        </div>
    );
};

// make importable
export default App;