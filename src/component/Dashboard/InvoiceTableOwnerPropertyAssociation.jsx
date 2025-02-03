import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PageLayout from "../PageLayout/PageLayout";
import Breadcrumbs from "../Breadcrumbs";
import Preloader from "../Loader";
import GoTopBtn from "../Button/GoTopBtn";
import Layout from "./Layout";
import TableData from "./TableData";
import InvoiceView from "../Modal";
import InvoiceViewPaymentAssociation from "../ModalOwnerInfoPaymentAssociation";
import Pagination from "../Pagination";
import TableDataOwnerPropertyAssociation from "./TableDataOwnerPropertyAssociation";

function InvoiceTableOwnerPropertyAssociation() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 24;
  const [viewInvoice, setViewInvoice] = useState(false);

  const toggleModal = () => {
    setViewInvoice(!viewInvoice);
  };

  const handlePage = (page) => {
    if (page === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (page === "next" && currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const component = isLoading ? (
    <Preloader />
  ) : (
    <PageLayout>
      <Breadcrumbs
        title={t("my_properties_title")}
        titlePosition="bottom"
        background="url(img/bread-overlay.jpg)"
      />
      <section className="breadcrumbs__content">
        <Layout title="Invoice">
        <InvoiceViewPaymentAssociation
          isOpen={viewInvoice}
          handleModal={toggleModal}
          invoice={{
            name: "Abdullah Mamun",
            number: "+0938 4937 23",
            year:"2024",
            month:"Februarie",
            amount: 600,
            status:"Plătit",
            paymentDate:"05.02.2024",
            receiptImage: "/img/chitanta.jpg", // Add receiptImage here
            tableImage: "/img/tabel-asociatie.jpg" // Add tableImage here
          }}
/>

          <div className="homec-invoices">
            <table className="homec-invoice-table">
              <thead className="homec-invoice-table__head">
                <tr>
                  <th>An</th>
                  <th>Lună</th>
                  <th>Sumă</th>
                  <th>Status</th>
                  <th>Dată plată</th>
                  <th>Factura</th>
                </tr>
              </thead>
              <tbody className="homec-invoice-table__body">
                <TableDataOwnerPropertyAssociation
                  year="2024"
                  month="Februarie"
                  amount={145}
                  status="Plătit"
                  paymentDate="05.02.2024"
                  dueDate="10.02.2024"
                  receiptImage="/img/chitanta.jpg"
                  tableImage="/img/tabel-asociatie.jpg"
                  invoiceButtonText="Vezi factură"
                  openModal={toggleModal}
                />
                <TableDataOwnerPropertyAssociation
                  year="2024"
                  month="Februarie"
                  amount={145}
                  status="Plătit"
                  paymentDate="05.02.2024"
                  dueDate="10.02.2024"
                  receiptImage="/img/chitanta.jpg"
                  tableImage="/img/tabel-asociatie.jpg"
                  invoiceButtonText="Vezi factură"
                  openModal={toggleModal}
                />
                <TableDataOwnerPropertyAssociation
                  year="2024"
                  month="Februarie"
                  amount={145}
                  status="Plătit"
                  paymentDate="05.02.2024"
                  dueDate="10.02.2024"
                  receiptImage="/img/chitanta.jpg"
                  tableImage="/img/tabel-asociatie.jpg"
                  invoiceButtonText="Vezi factură"
                  openModal={toggleModal}
                />
              </tbody>
            </table>
          </div>
          <Pagination
            totalPage={totalPage}
            currentPage={currentPage}
            handlePage={handlePage}
          />
        </Layout>
      </section>
    </PageLayout>
  );

  return component;
}

export default InvoiceTableOwnerPropertyAssociation;
