function SubscribeForm() {
  return (
    <div className="homec-form mg-top-100">
      <div className="homec-form__content">
        <span className="homec-form__label">Oferte de locuințe pentru studenți</span>
        <h3 className="homec-form__title">Alătură-te comunității Rent4Students</h3>
      </div>
      <form className="homec-form__form">
        <input
          type="email"
          name="email"
          placeholder="Introdu adresa ta de email"
          required
        />
        <button type="submit" className="homec-btn">
          <span>Abonează-te acum</span>
        </button>
      </form>
    </div>
  );
}

export default SubscribeForm;
