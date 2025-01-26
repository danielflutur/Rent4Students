import { useTranslation } from "react-i18next";
import PricingCard from "../Cards/PricingCard";

function PricingUniversity() {
  const { t } = useTranslation(); // Hook pentru traduceri

  return (
    <section className="pd-top-90 pd-btm-20">
      <div className="container-sm">
        <h3 className="ecom-wc__form-title ecom-wc__form-title__one">
          {t("pricing_title")}
          <span>
            {t("pricing_subtitle")}
          </span>
        </h3>
        <div className="row justify-content-md-center">
          <PricingCard
            title={t("annual_plan_title")}
            price="49"
            period={t("annual_plan_period")}
            isActive={true}
            features={[
              { name: t("feature_support"), value: true },
              { name: t("feature_full_price"), value: true },
              { name: t("feature_discounts"), value: false },
              { name: t("feature_free_training"), value: false },
              { name: t("feature_priority_updates"), value: false },
            ]}
          />
          <PricingCard
            title={t("four_year_plan_title")}
            price="99"
            period={t("four_year_plan_period")}
            features={[
              { name: t("feature_support"), value: true },
              { name: t("feature_significant_discount"), value: true },
              { name: t("feature_discounts"), value: true },
              { name: t("feature_free_training"), value: true },
              { name: t("feature_priority_updates"), value: true },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export default PricingUniversity;
