import { useState } from "react";
import According from "./According";
import { useTranslation } from "react-i18next";

function FaqSection() {
  const { t } = useTranslation(); // Hook pentru traduceri
  const [collapse, setCollapse] = useState(1);

  const handleCollapse = (id) => {
    setCollapse(id === collapse ? false : id);
  };

  return (
    <section
      className="homec-bg-cover pd-top-90 pd-btm-120"
      style={{
        backgroundImage: "url('img/bg-shape-five.svg')",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div className="container homec-container-medium">
        <div className="row homec-container-medium__row align-items-center">
          <div
            className="col-lg-6 col-md-6 col-12 mg-top-30"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="homec-section__head">
              <div className="homec-section__shape">
                <span
                  className="homec-section__badge homec-section__badge--shape homec-section__badge--shape--v2"
                  style={{ backgroundImage: "url('img/shape-3.svg')" }}
                >
                  {t("faq_badge")}
                </span>
              </div>
              <h2 className="homec-section__title">
                {t("faq_title_line1")}
                <br />
                {t("faq_title_line2")}
              </h2>
            </div>
            <div
              className="homec-accordion accordion accordion-flush"
              id="homec-accordion"
            >
              <According
                heading={t("faq_question1_heading")}
                desc={t("faq_question1_desc")}
                collapse={collapse}
                handleCollapse={handleCollapse}
                id={1}
              />
              <According
                heading={t("faq_question2_heading")}
                desc={t("faq_question2_desc")}
                collapse={collapse}
                handleCollapse={handleCollapse}
                id={2}
              />
              <According
                heading={t("faq_question3_heading")}
                desc={t("faq_question3_desc")}
                collapse={collapse}
                handleCollapse={handleCollapse}
                id={3}
              />
              <According
                heading={t("faq_question4_heading")}
                desc={t("faq_question4_desc")}
                collapse={collapse}
                handleCollapse={handleCollapse}
                id={4}
              />
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 col-12 mg-top-30"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {/* Support Img */}
            <div className="homec-support-img">
              <img src="img/image-university-3.png" alt="#" />
              <div className="homec-support-img__content">
                <img src="img/support-icon-white.svg" alt="#" />
                <h4 className="homec-support-img__title">
                  {t("faq_support_title")} <span>{t("faq_support_subtitle")}</span>
                </h4>
              </div>
            </div>
            {/* End Support Img */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
