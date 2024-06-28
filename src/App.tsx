import React from "react";
import CardSlider from "./components/CardSlider";
import { sampleCards } from "./data/sampleData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faDollarSign,
  faSnowflake,
  faBan,
} from "@fortawesome/free-solid-svg-icons";

const App: React.FC = () => {
  return (
    <div className="App flex flex-col min-h-screen">
      <header className="App-header text-center py-4 bg-gray-200">
        <h1 className="text-2xl font-bold">Card Slider</h1>
      </header>
      <nav className="flex justify-between items-center p-4 bg-gray-200 rounded-lg mb-4 font-bold">
        <span>Cards ({sampleCards.length})</span>
        <div>
          <button className="mx-2 text-blue-800 py-1 px-3 rounded">
            + Add Card
          </button>
          <button className="mx-2 text-blue-800 py-1 px-3 rounded">
            Show All
          </button>
        </div>
      </nav>
      <main className="flex-grow flex items-center justify-center">
        <div className="frame-container w-full">
          <CardSlider cards={sampleCards} />
        </div>
      </main>
      <footer className="p-4 bg-gray-200 mt-4 font-bold">
        <div className="flex justify-around items-center">
          <button className="flex flex-col items-center">
            <div
              className="border border-gray-400 p-2 mb-2 flex items-center justify-center rounded-lg"
              style={{ width: "4rem", height: "3rem" }}
            >
              <FontAwesomeIcon icon={faInfoCircle} size="lg" />
            </div>
            <span>Card Details</span>
          </button>
          <button className="flex flex-col items-center">
            <div
              className="border border-gray-400 p-2 mb-2 flex items-center justify-center rounded-lg"
              style={{ width: "4rem", height: "3rem" }}
            >
              <FontAwesomeIcon icon={faDollarSign} size="lg" />
            </div>
            <span>Limit</span>
          </button>
          <button className="flex flex-col items-center">
            <div
              className="border border-gray-400 p-2 mb-2 flex items-center justify-center rounded-lg"
              style={{ width: "4rem", height: "3rem" }}
            >
              <FontAwesomeIcon icon={faSnowflake} size="lg" />
            </div>
            <span>Freeze</span>
          </button>
          <button className="flex flex-col items-center">
            <div
              className="border border-gray-400 p-2 mb-2 flex items-center justify-center rounded-lg"
              style={{ width: "4rem", height: "3rem" }}
            >
              <FontAwesomeIcon icon={faBan} size="lg" />
            </div>
            <span>Block Card</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default App;
