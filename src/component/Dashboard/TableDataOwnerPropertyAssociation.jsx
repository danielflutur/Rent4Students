import ProtoTypes from "prop-types";

function TableDataOwnerPropertyAssociation({
  year,
  month,
  amount,
  status,
  invoiceButtonText,
  paymentDate,
  dueDate,
  openModal,
}) {
  return (
    <tr>
      <td className="homec-invoice-table__column1">
        <p className="homec-invoice-table__text">{year}</p>
      </td>
      <td className="homec-invoice-table__column2">
        <p className="homec-invoice-table__text">{month}</p>
      </td>
      <td className="homec-invoice-table__column3">
        <p className="homec-invoice-table__text">{amount} RON</p>
      </td>
      <td className="homec-invoice-table__column4">
        <p className="homec-invoice-table__text">{status}</p>
      </td>
      <td className="homec-invoice-table__column5">
        <p className="homec-invoice-table__text">{paymentDate}</p>
      </td>
      <td className="homec-invoice-table__column6">
        <button
          data-bs-toggle="modal"
          data-bs-target="#invoice_view"
          className="homec-invoice-table--btn"
          onClick={() => openModal()}
        >
          {invoiceButtonText}
        </button>
      </td>
    </tr>
  );
}

TableDataOwnerPropertyAssociation.propTypes = {
  year: ProtoTypes.string.isRequired,
  month: ProtoTypes.string.isRequired,
  amount: ProtoTypes.number.isRequired,
  status: ProtoTypes.string.isRequired,
  invoiceButtonText: ProtoTypes.string.isRequired,
  paymentDate: ProtoTypes.string, // Data de plată (opțional)
  dueDate: ProtoTypes.string.isRequired, // Data scadentă
  openModal: ProtoTypes.func.isRequired,
};

export default TableDataOwnerPropertyAssociation;
