import { Link } from "react-router-dom";
import { printers } from "../data/printerData";

function Home() {
  return (
    <div className="App">
      <div className="App-container">
        <h1 className="App-title">Hello new printer app</h1>
        <p className="App-description">
          Select your printer type from the options below
        </p>
        <div className="App-card-grid">
          {printers.map((printer) => (
            <Link
              to={`/printers/${printer.id}`}
              className="App-card"
              key={printer.id}
            >
              <h3>{printer.name}</h3>
              <span className="App-card-arrow">→</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
