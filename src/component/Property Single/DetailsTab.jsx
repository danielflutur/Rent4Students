import ProtoTypes from "prop-types";

function DetailsTab({ text, isActive, children }) {
  return (
    <div
      className={`tab-pane fade ${isActive && "show active"}`}
      id="homec-pd-tab1"
      role="tabpanel"
    >
      <div className="homec-pdetails-tab__inner">
        <p>{text}</p>
        {/* Homec Features  */}
        {children}
      </div>
    </div>
  );
}

DetailsTab.propTypes = {
  children: ProtoTypes.node.isRequired,
  isActive: ProtoTypes.bool.isRequired,
};

export default DetailsTab;
