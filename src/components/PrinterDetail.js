import { useParams, Link } from "react-router-dom";
import { printers } from "../data/printerData";
import "./PrinterDetail.css";

function PrinterDetail() {
  const { id } = useParams();
  const printer = printers.find((printer) => printer.id === parseInt(id));

  if (!printer) {
    return (
      <div className="printer-not-found">
        <h2>Printer Not Found</h2>
        <p>We couldn't find the printer you're looking for.</p>
        <Link to="/" className="back-link">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="printer-detail">
      <div className="printer-detail-container">
        <Link to="/" className="back-link">
          ← Back to all printers
        </Link>

        <div className="printer-header">
          <h1>{printer.name}</h1>
        </div>

        <div className="printer-content">
          <div className="printer-image">
            <img src={printer.imageUrl} alt={printer.name} />
          </div>

          <div className="printer-info">
            <div className="description-section">
              <h2>Description</h2>
              <p>{printer.description}</p>
            </div>

            <div className="capabilities-section">
              <h2>Capabilities</h2>
              <ul className="capabilities-list">
                {printer.capabilities.map((capability, index) => (
                  <li key={index}>
                    <span className="capability-bullet">•</span>
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrinterDetail;
