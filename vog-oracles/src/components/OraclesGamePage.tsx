import React, { useState } from 'react';  // add use state to store variables
import './OraclesGamePage.css';           // add style for component

// make game component
const OraclesGamePage: React.FC = () => {
    // Add states
    // setGameState for setting the game state
    const [gameState, setGameState] = useState<'menu' | 'instructions' | 'game'>('menu');

    // handleButtonClick function for changes state on click
    const handleButtonClick = (state: 'menu' | 'instructions' | 'game') => {
        setGameState(state);
    };

    // renderContent displays the game based on the state
    const renderContent = () => {
        switch (gameState) {
            case 'instructions':
                return (
                    <div className="instructions-container">
                        <h2>How to Play</h2>
                        <div className="instructions">
                            <p> Welcome to the Vault of Glass, where the Vex bend and break Time...:</p>
                            <ol>
                                <li>Oracles will kill you unless you destory them.</li>
                                <li>But beware they will Mark you if you kill them out of... Time.</li>
                                <li>There is light to Cleanse the Mark, but only once.</li>
                                <li>Defeat the Oracles before they Erase you from the Time!</li>
                            </ol>
                            <p>Controls:</p>
                            <ul>
                                <li>Use WASD or arrow keys to move your character.</li>
                                <li>Left Click or Space bar to shoot.</li>
                                <li>Press J, K, or L to switch weapons.</li>
                                <li>Press ESC to paus the game.</li>
                            </ul>
                        </div>
                        <button className="button" onClick={() => handleButtonClick('menu')}>
                            Back to Menu
                        </button>
                    </div>
                );
            case 'game':
                return (
                    <div className="game-container">
                        {/* Game Canvas */}
                        <div className="game-canvas">
                            <p>Game Content</p>
                            {/*Actual Game Stuff*/}
                        </div>
                        <button className="button pause-button" onClick={() => handleButtonClick('menu')}>
                            Back to Menu
                        </button>
                    </div>
                );
            default:
                return (
                    <div className="menu-container">
                        <div className="menu-options">
                            <button className="button start-button" onClick={() => handleButtonClick('game')}>
                                Start Game
                            </button>
                            <button className="button" onClick={() => handleButtonClick('instructions')}>
                                How to Play
                            </button>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="oracles-game-page">
            <header className="game-banner">
                <h1>Oracles of the Vault</h1>
                <div className="subtitle">A 2D Rendition Inspired by Destiny's Vault of Glass</div>
            </header>
            <main className="game-content">
                {renderContent()}
            </main>
            <footer className="game-footer">
                <p>Created with React and Typescript | Destiny 2 Fan Project</p>
            </footer>
        </div>
    );
};

export default OraclesGamePage;

