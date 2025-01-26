import FeaturesCardV2 from "../Cards/FeaturesCardV2";
import Title from "../Title";
import { useTranslation } from "react-i18next";

function Features() {
  const { t } = useTranslation(); // Hook pentru traduceri

  return (
    <section className="homec-bg-primary-color pd-top-110 pd-btm-110">
      <div
        className="homec-bg homec-bg__opacity"
        style={{ backgroundImage: "url(img/features-list-bg.svg)" }}
      ></div>
      <div className="container">
        <div className="row">
          <Title
            firstText={t("features_title_first")}
            secondText={t("features_title_second")}
            marginSize="40"
            styleFirst={{ color: "#ffff" }}
            styleSecond={{ color: "#ffff" }}
          />
        </div>
        <div className="row">
          <div className="col-12">
            <div className="homec-features-list">
              {/* Features Single */}
              <FeaturesCardV2
                icon="img/hand-icon.svg"
                serial="01"
                title={t("feature_trust")}
              />
              <FeaturesCardV2
                icon="img/support-icon.svg"
                serial="02"
                title={t("feature_support_24")}
              />
              <FeaturesCardV2
                icon="img/finance-icon.svg"
                serial="03"
                title={t("feature_easy_finance")}
              />
              <FeaturesCardV2
                icon="img/wide-house-icon.svg"
                serial="04"
                title={t("feature_wide_range")}
              />
              {/* End Features Single */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
