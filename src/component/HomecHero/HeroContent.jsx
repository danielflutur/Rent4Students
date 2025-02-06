import React from 'react';
import { useTranslation } from 'react-i18next';
import HeroContentList from "./HeroContentList";

function HeroContent() {
  const { t } = useTranslation();

  return (
    <div className="homec-hero__content homec-hero__content--v2">
        <h3 className="homec-hero__title">
        {t("hero.title")}
      </h3>
      <h3 className="homec-hero__subtitle">
      {t('hero.description')}
      </h3>
      <ul className="homec-iconic-list homec-iconic-list__v2 homec-iconic-list__white list-none mg-top-30">
        <HeroContentList text={t('hero.university')} />
        <HeroContentList text={t('hero.students')} />
        <HeroContentList text={t('hero.owners')} />
        <HeroContentList text={t('hero.agencies')} />
      </ul>
      
    </div>
  );
}

export default HeroContent;
