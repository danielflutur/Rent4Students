import { useTranslation } from "react-i18next";
import HeroContentListOwner from "./HeroContentListOwner";

function HeroContentOwner() {
  const { t } = useTranslation(); // Adăugăm hook-ul pentru traduceri

  return (
    <div className="homec-hero__content homec-hero__content--v2">
      <h3 className="homec-hero__title">
        {t("hero_owner_welcome")}
      </h3>
      <h3 className="homec-hero__subtitle">
        {t("hero_owner_subtitle")}
      </h3>

      <ul className="homec-iconic-list homec-iconic-list__v2 homec-iconic-list__white list-none mg-top-30">
        <HeroContentListOwner
          text={t("hero_owner_list_item_1")}
        />
        <HeroContentListOwner
          text={t("hero_owner_list_item_2")}
        />
        <HeroContentListOwner
          text={t("hero_owner_list_item_3")}
        />
      </ul>
    </div>
  );
}

export default HeroContentOwner;
