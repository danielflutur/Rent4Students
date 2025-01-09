import { useState } from "react";
import PropertyTextInput from "./PropertyTextInput";
import PropertyTextArea from "./PropertyTextArea";
import ImageInput from "./ImageInput";
import PropertyVideoInput from "./PropertyVideoInput";
import PropertyLocationInput from "./PropertyLocationInput";
import PropertyAminitiesInput from "./PropertyAminitiesInput";
import KeyValueInput from "./KeyValueInput";
import PropertyPlan from "./PropertyPlan";
import PropertyTextAreaV2 from "./PropertyTextAreaV2";
import SwitcherBtn from "./SwitcherBtn";

const EmailTemplate = ({ record }) => {
  const emailAddress = record.email;
  const subject = encodeURIComponent("Cont creat pe Rent4Students");
  const body = encodeURIComponent(
    `Dragă ${record.secretary},\n\n` +
    `Suntem încântați să vă anunțăm că contul dumneavoastră de Secretar de Facultate pentru aplicația Rent4Students a fost creat cu succes! Acest cont vă va permite să gestionați studenții și să accesați toate funcțiile aplicației destinate universității dumneavoastră.\n\n` +
    `Detalii cont:\n` +
    `• Nume utilizator: ${record.email}\n` +
    `• Parola temporară: [Parola generată]\n\n` +
    `Instrucțiuni pentru acces:\n` +
    `1. Accesați aplicația Rent4Students la adresa: [URL aplicație].\n` +
    `2. Introduceți numele de utilizator și parola temporară.\n` +
    `3. Vă recomandăm să schimbați parola imediat după primul acces pentru a asigura securitatea contului.\n\n` +
    `Funcționalități disponibile:\n` +
    `• Gestionarea studenților\n` +
    `• Crearea cererilor de ajutor pentru chirie\n` +
    `• Monitorizarea statutului cererilor\n\n` +
    `Dacă aveți întrebări sau întâmpinați dificultăți la accesarea aplicației, nu ezitați să ne contactați la [Email de suport] sau [Număr de telefon de suport].\n\n` +
    `Vă mulțumim pentru colaborare și vă dorim mult succes în gestionarea studenților!\n\n` +
    `Cu respect,\n` +
    `Echipa Rent4Students`
  );

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}&body=${body}`;

  return (
    <a
      href={gmailLink}
      target="_blank" // Deschide Gmail într-o fereastră nouă
      rel="noopener noreferrer" // Evită problemele de securitate
      className="homec-btn"
    >
      <span>Trimite Email</span>
    </a>
  );
};

export default EmailTemplate;
