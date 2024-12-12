import HeroContentListUniversity from "./HeroContentListUniversity";

function HeroContentUniversity() {
  return (
    <div className="homec-hero__content homec-hero__content--v2">
      <h3 className="homec-hero__title">
        Bine ați venit în aplicația RENT4STUDENTS
      </h3>
      <h3 className="homec-hero__subtitle">Partenerul ideal al universităților în gestionarea cazărilor pentru studenți.
      </h3>
      
        
      <ul className="homec-iconic-list homec-iconic-list__v2 homec-iconic-list__white list-none mg-top-30">
        <HeroContentListUniversity
          text="Simplificăm conexiunea dintre universitate și studenți."
        />
        <HeroContentListUniversity
          text="Administrarea fișierelor necesare pentru ajutor de chirie"
        />
        <HeroContentListUniversity
          text="Gestionarea digitalizată a cererilor pentru ajutor de chirie."
        />
      </ul>
    </div>
  );
}

export default HeroContentUniversity;
