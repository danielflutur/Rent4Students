import { useTranslation } from "react-i18next";
import HeroContentListSecretary from "./HeroContentListSecretary";

function HeroContentSecretary() {
  const { t } = useTranslation(); // Hook pentru traduceri

  return (
    <div className="homec-hero__content homec-hero__content--v2">
      <h3 className="homec-hero__title">
        {t("hero_welcome")}
      </h3>
      <h3 className="homec-hero__subtitle">
        {t("hero_secretary_subtitle")}
      </h3>

      <ul className="homec-iconic-list homec-iconic-list__v2 homec-iconic-list__white list-none mg-top-30">
        <HeroContentListSecretary text={t("hero_secretary_list_item_1")} />
        <HeroContentListSecretary text={t("hero_secretary_list_item_2")} />
        <HeroContentListSecretary text={t("hero_secretary_list_item_3")} />
      </ul>
    </div>
  );
}

export default HeroContentSecretary;
