import { useState } from "react";
import { useTranslation } from "react-i18next"; // Adăugăm hook-ul pentru traducere

const EmailTemplate = ({ record }) => {
  const { t } = useTranslation(); // Hook pentru traducere
  const emailAddress = record.email;
  const subject = encodeURIComponent(t("email_subject"));
  const body = encodeURIComponent(
    `${t("email_greeting")} ${record.secretary},\n\n` +
    `${t("email_body_part_1")}\n\n` +
    `${t("email_details_subject")}\n` +
    `• ${t("email_username")}: ${record.email}\n` +
    `• ${t("email_temp_password")}: [${t("email_temp_password_placeholder")}]\n\n` +
    `${t("email_instructions")}\n` +
    `1. ${t("email_instruction_step_1")}\n` +
    `2. ${t("email_instruction_step_2")}\n` +
    `3. ${t("email_instruction_step_3")}\n\n` +
    `${t("email_features")}\n` +
    `• ${t("email_feature_manage_students")}\n` +
    `• ${t("email_feature_rent_help")}\n` +
    `• ${t("email_feature_monitor_status")}\n\n` +
    `${t("email_contact")}\n\n` +
    `${t("email_closing")}\n` +
    `${t("email_signature")}`
  );

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}&body=${body}`;

  return (
    <a
      href={gmailLink}
      target="_blank" // Deschide Gmail într-o fereastră nouă
      rel="noopener noreferrer" // Evită problemele de securitate
      className="homec-btn"
    >
      <span>{t("send_email_button")}</span> {/* Folosim traducerea pentru buton */}
    </a>
  );
};

export default EmailTemplate;
