import { useTranslation } from "react-i18next";
import PricingCard from "../Cards/PricingCard";

function PricingOwner() {
  const { t } = useTranslation(); // Hook pentru traduceri

  return (
    <section className="pd-top-90 pd-btm-20">
      <div className="container-sm">
        <h3 className="ecom-wc__form-title ecom-wc__form-title__one">
          {t("pricing_owner_title")}
          <span>
            {t("pricing_owner_subtitle")}
          </span>
        </h3>
        <div className="row justify-content-md-center">
          <PricingCard
            title={t("free_plan_title")}
            price={t("free_plan_price")}
            period={t("free_plan_period")}
            
            features={[
              { name: t("feature_add_apartment"), value: true },
              { name: t("feature_visibility"), value: true },
              { name: t("feature_manage_bills"), value: false },
              { name: t("feature_premium_support"), value: false },
            ]}
          />
          <PricingCard
            title={t("standard_plan_title")}
            price="4.99"
            period={t("standard_plan_period")}
            isActive={true}
            features={[
              { name: t("feature_add_apartment"), value: true },
              { name: t("feature_visibility"), value: true },
              { name: t("feature_manage_bills"), value: true },
              { name: t("feature_premium_support"), value: true },
            ]}
          />
          <PricingCard
            title={t("premium_plan_title")}
            price="15.99"
            period={t("premium_plan_period")}
            features={[
              { name: t("feature_add_two_apartment"), value: true },
              { name: t("feature_visibility"), value: true },
              { name: t("feature_manage_bills"), value: true },
              { name: t("feature_premium_support"), value: true },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export default PricingOwner;
