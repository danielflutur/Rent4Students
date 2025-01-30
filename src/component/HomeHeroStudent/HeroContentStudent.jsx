import { useTranslation } from "react-i18next";
import HeroContentListStudent from "./HeroContentListStudent";

function HeroContentStudent() {
  const { t } = useTranslation(); // Hook-ul pentru traduceri

  return (
    <div className="homec-hero__content homec-hero__content--v2">
      <h3 className="homec-hero__title">
        {t("hero_student_welcome")}
      </h3>
      <h3 className="homec-hero__subtitle">
        {t("hero_student_subtitle")}
      </h3>

      <ul className="homec-iconic-list homec-iconic-list__v2 homec-iconic-list__white list-none mg-top-30">
        <HeroContentListStudent
          text={t("hero_student_list_item_1")}
        />
        <HeroContentListStudent
          text={t("hero_student_list_item_2")}
        />
        <HeroContentListStudent
          text={t("hero_student_list_item_3")}
        />
      </ul>
    </div>
  );
}

export default HeroContentStudent;
