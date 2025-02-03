import ProtoTypes from "prop-types";
import { Link } from 'react-router-dom'; // Importă Link

function DashboardCard({ image, text, count, to }) {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="homec-dashboard__single">
        <Link to={to} className="homec-dashboard__link">
          <div className="homec-dashboard__icon">
            <img src={image} alt="#" />
          </div>
          <div className="homec-dashboard__label">{text}</div>
          <div className="homec-dashboard__title">{count}</div>
        </Link>
      </div>
    </div>
  );
}

DashboardCard.propTypes = {
  image: ProtoTypes.string.isRequired,
  text: ProtoTypes.string.isRequired,
  count: ProtoTypes.number.isRequired,
  to: ProtoTypes.string.isRequired, // Adaugă un nou prop 'to' pentru URL
};

export default DashboardCard;
