// Web form data
const FEATURE_FORM_ADMIN_NAME = "tm-feature-contact-form-name";
const FEATURE_FORM_INSTITUTE_NAME = "tm-feature-contact-form-institute-name";
const FEATURE_FORM_PHONE_NUMBER = "tm-feature-contact-form-phone";
const FEATURE_FORM_PHONE_NUMBER_ISD = "tm-feature-contact-form-country-code";
const FEATURE_FORM_ADMIN_ROLE = "tm-feature-contact-form-role";
const FEATURE_FORM_SUCCESS = "tm-feature-form-success";
const FEATURE_FORM = "tm-feature-input-form";

const FEATURE_FORM_ADMIN_NAME_MOBILE = "tm-feature-contact-form-name-mobile";
const FEATURE_FORM_INSTITUTE_NAME_MOBILE =
  "tm-feature-contact-form-institute-name-mobile";
const FEATURE_FORM_PHONE_NUMBER_MOBILE = "tm-feature-contact-form-phone-mobile";
const FEATURE_FORM_PHONE_NUMBER_ISD_MOBILE =
  "tm-feature-contact-form-country-code-mobile";
const FEATURE_FORM_ADMIN_ROLE_MOBILE = "tm-feature-contact-form-role-mobile";
const FEATURE_FORM_MOBILE = "tm-feature-input-form-mobile";
const FEATURE_FORM_SUCCESS_MOBILE = "tm-feature-form-success-mobile";


const openShareTray = () => {
  if (navigator?.share) navigator.share({ text: "https://www.teachmint.com" });
};

const selectRoleOptions = () => {
  let options = [...document.querySelectorAll(".role-options")];
  options.forEach((option) => {
    option.addEventListener("click", () => {
      let role = document?.getElementById(
        "tm-feature-contact-form-role-mobile"
      );
      let countryCodeDropdownArrowMobile = document.getElementById(
        "country-code-dropdown-arrow-mobile"
      );
      role.innerText = option.innerText.trim();
      if (
        option.innerText.trim() == "Teacher" ||
        option.innerText.trim() == "Student"
      ) {
        countryCodeDropdownArrowMobile.style.setProperty(
          "display",
          "block",
          "important"
        );
      } else {
        countryCodeDropdownArrowMobile.style.setProperty(
          "display",
          "none",
          "important"
        );
      }
      closeRoleDropDown();
    });
  });
};


const closeRoleDropDown = () => {
  document
    ?.getElementById("tm-feature-contact-form-role-mobile-options")
    ?.classList?.add("hidden");

  let role = document?.getElementById(FEATURE_FORM_ADMIN_ROLE_MOBILE)?.innerText;
  if(role) {
    if (
      ROLE_TO_UTYPE_MAPPING[role.trim()] != 1 &&
      ROLE_TO_UTYPE_MAPPING[role.trim()] != 2
    ) {
      let countryISD = document?.getElementById(
        "tm-feature-contact-form-country-code-mobile"
      );
      let countryFlag = document?.getElementById(
        "tm-feature-contact-form-country-flag-mobile"
      );
      if (countryISD && countryFlag) {
        countryISD.innerText = "+91";
        countryFlag.src =
          "https://storage.googleapis.com/teachmint/tm_flags/India.webp";
      }
    }
  }
};

const hideLeadsForm = () => {
  let leadCaptureForm = document?.getElementById("lead-capture-form");
  leadCaptureForm?.style?.setProperty("display", "none", "important");
  document.body.classList.remove("tm-feature-contact-form-submit");
};

const showLeadsForm = () => {
  let leadCaptureForm = document?.getElementById("lead-capture-form");
  leadCaptureForm?.style?.setProperty("display", "block", "important");
  document.body.classList.add("tm-feature-contact-form-submit");
  let nameInput = document.getElementById(FEATURE_FORM_ADMIN_NAME_MOBILE);
  nameInput?.focus();
};

const showHideRoleDropDown = () => {
  let roleOptions = document?.getElementById(
    "tm-feature-contact-form-role-mobile-options"
  );
  roleOptions?.classList?.toggle("hidden");
  roleDropDownLock = false;
};

const toggleFaqAnswersV1 = (index) => {
  let dropdownIcon = document.getElementById("dropdown-icon-" + index);
  let faqAnswers = document.getElementById("faq-answer-" + index);
  dropdownIcon?.classList?.toggle("tm-feature-rotate-180");
  faqAnswers?.classList?.toggle("hidden");
};

const toggleFaqAnswers = (index) => {
  let dropdownIcon = document.getElementById("dropdown-icon-" + index);
  let faqAnswers = document.getElementById("faq-answer-" + index);
  dropdownIcon?.classList?.toggle("tm-feature-rotate-45");
  faqAnswers?.classList?.toggle("hidden");
};

window.addEventListener("load", () => {
  selectRoleOptions();
});

document.addEventListener('DOMContentLoaded', function() {
  // Web form submit
  let leadCaptureFormWeb = document.getElementById("tm-feature-contact-form-submit")
  if(leadCaptureFormWeb) {
    leadCaptureFormWeb.addEventListener('click', (event) => {
      let adminName = document.getElementById(`${FEATURE_FORM_ADMIN_NAME}`).value.trim();
      let instituteName = document.getElementById(`${FEATURE_FORM_INSTITUTE_NAME}`).value.trim();
      let adminPhoneNumber = document.getElementById(`${FEATURE_FORM_PHONE_NUMBER}`).value.trim();
      let adminPhoneNumberCode = document.getElementById(`${FEATURE_FORM_PHONE_NUMBER_ISD}`)
        .innerText
        .trim();
      let adminRole = document.getElementById(`${FEATURE_FORM_ADMIN_ROLE}`).value.trim();
      let flag = true;
      let url = new URL(window?.location?.href);
      let utmSource = url?.searchParams?.get("utm_source");
      let utmMedium = url?.searchParams?.get("utm_medium");
      let utmCampaign = url?.searchParams?.get("utm_campaign");
      let utmContent  = url?.searchParams?.get("utm_content");
      let utmKeyword = url?.searchParams?.get("utm_keyword");

      if (adminPhoneNumberCode.charAt(0) === "+") {
        adminPhoneNumberCode = adminPhoneNumberCode.substring(1);
      }

      if (String(adminName).length < 3) {
        document.getElementById(`${FEATURE_FORM_ADMIN_NAME}-err`).innerText = "Name must have atleast 3 characters"
        flag = false;
      } else document.getElementById(`${FEATURE_FORM_ADMIN_NAME}-err`).innerText = "";

      if (String(instituteName).length < 3) {
        document.getElementById(`${FEATURE_FORM_INSTITUTE_NAME}-err`).innerText = "School name must have atleast 3 characters"
        flag = false;
      } else document.getElementById(`${FEATURE_FORM_INSTITUTE_NAME}-err`).innerText = "";

      if (/^[0-9]{7,15}$/.test(String(adminPhoneNumber).trim()))
      document.getElementById(`${FEATURE_FORM_PHONE_NUMBER}-err`).innerText = "";
      else {
        document.getElementById(`${FEATURE_FORM_PHONE_NUMBER}-err`).innerText = "Phone number must have atleast 7 digits and atmost 15 digits"
        flag = false;
      }

      if (adminRole.localeCompare("Select Role") != 0)
      document.getElementById(`${FEATURE_FORM_ADMIN_ROLE}-err`).innerText = "";
      else {
        document.getElementById(`${FEATURE_FORM_ADMIN_ROLE}-err`).innerText = "Please select a role";
        flag = false;
      }

      if (flag) {
        event.preventDefault();
        grecaptcha.ready(function () {
          grecaptcha
            .execute("6Ld53WwaAAAAALUdYMhgWVTy4-H4512vhFq-rdng", {
              action: "submit",
            })
            .then(function (token) {
              // call to server
              $.ajax({
                type: "POST",
                url: "/handle-tfi-contact-form",
                data: {
                  admin_name: adminName,
                  institute_name: instituteName,
                  admin_phone_number: `+${adminPhoneNumberCode}-${adminPhoneNumber}`,
                  admin_role: adminRole,
                  admin_email: "",
                  token: token,
                  utm_source: utmSource,
                  utm_medium: utmMedium,
                  utm_campaign: utmCampaign,
                  utm_content: utmContent,
                  utm_keyword: utmKeyword,
                  lead_form_url: window?.location?.href
                },
              }).done(function (data) {});

              event.preventDefault();

              window?.tfiLeadFormSubmitted("TFI_LEAD_FORM_SUBMITTED", adminName, instituteName, adminRole, adminPhoneNumberCode, adminPhoneNumber, utmSource, utmMedium, utmCampaign, utmContent, utmKeyword, "Feature Page");

              if (ROLE_TO_UTYPE_MAPPING[adminRole] == 0) {
                window.location.replace(
                  `${ssoUrl}&tm_action=redirected_login&tm_name=${adminName}&tm_ins_name=${instituteName}&tm_phone_number=${adminPhoneNumber}&tm_country_code=${adminPhoneNumberCode}` +
                    getAdditionalParmas()
                );
              } else if (
                ROLE_TO_UTYPE_MAPPING[adminRole] == 1 ||
                ROLE_TO_UTYPE_MAPPING[adminRole] == 2
              ) {
                window.location.replace(
                  `/login?tm_action=redirected_login&tm_name=${adminName}&utype=${ROLE_TO_UTYPE_MAPPING[adminRole]}&tm_phone_number=${adminPhoneNumber}&tm_country_code=${adminPhoneNumberCode}` +
                    getAdditionalParmas()
                );
              } else {
                //hide input form and start loading
                document.getElementById(`${FEATURE_FORM}`).style.display = 'none'
                document.getElementById(`${FEATURE_FORM_SUCCESS}`).style.display = "block"
              }
            });
        });
      }
    });
  }

  //   Mweb form submit
  let leadCaptureFormMweb = document.getElementById("tm-feature-contact-form-submit-mobile")
  if(leadCaptureFormMweb) {
    leadCaptureFormMweb.addEventListener('click',  (event) => {
      let adminName = document.getElementById(`${FEATURE_FORM_ADMIN_NAME_MOBILE}`).value.trim();
      let instituteName = document.getElementById(`${FEATURE_FORM_INSTITUTE_NAME_MOBILE}`)
        .value
        .trim();
      let adminPhoneNumber = document.getElementById(`${FEATURE_FORM_PHONE_NUMBER_MOBILE}`)
        .value
        .trim();
      let adminPhoneNumberCode = document.getElementById(`${FEATURE_FORM_PHONE_NUMBER_ISD_MOBILE}`)
        .innerText
        .trim();
      let adminRole = document.getElementById(`${FEATURE_FORM_ADMIN_ROLE_MOBILE}`).innerText.trim();
      let flag = true;
      let url = new URL(window?.location?.href);
      let utmSource = url?.searchParams?.get("utm_source");
      let utmMedium = url?.searchParams?.get("utm_medium");
      let utmCampaign = url?.searchParams?.get("utm_campaign");

      if (adminPhoneNumberCode.charAt(0) === "+") {
        adminPhoneNumberCode = adminPhoneNumberCode.substring(1);
      }

      if (String(adminName).length < 3) {
        document.getElementById(`${FEATURE_FORM_ADMIN_NAME_MOBILE}-err`).innerText = "Name must have atleast 3 characters"
        flag = false;
      } else document.getElementById(`${FEATURE_FORM_ADMIN_NAME_MOBILE}-err`).innerText = "";

      if (String(instituteName).length < 3) {
        document.getElementById(`${FEATURE_FORM_INSTITUTE_NAME_MOBILE}-err`).innerText = "School name must have atleast 3 characters"
        flag = false;
      } else document.getElementById(`${FEATURE_FORM_INSTITUTE_NAME_MOBILE}-err`).innerText = "";

      if (/^[0-9]{7,15}$/.test(String(adminPhoneNumber).trim()))
      document.getElementById(`${FEATURE_FORM_PHONE_NUMBER_MOBILE}-err`).innerText = "";
      else {
        document.getElementById(`${FEATURE_FORM_PHONE_NUMBER_MOBILE}-err`).innerText = "Phone number must have atleast 7 digits and atmost 15 digits"
        flag = false;
      }

      if (adminRole.localeCompare("Select Role") != 0)
      document.getElementById(`${FEATURE_FORM_ADMIN_ROLE_MOBILE}-err`).innerText = "";
      else {
        document.getElementById(`${FEATURE_FORM_ADMIN_ROLE_MOBILE}-err`).innerText = "Please select a role";
        flag = false;
      }

      if (flag) {
        event.preventDefault();
        grecaptcha.ready(function () {
          grecaptcha
            .execute("6Ld53WwaAAAAALUdYMhgWVTy4-H4512vhFq-rdng", {
              action: "submit",
            })
            .then(function (token) {
              // call to server
              $.ajax({
                type: "POST",
                url: "/handle-tfi-contact-form",
                data: {
                  admin_name: adminName,
                  institute_name: instituteName,
                  admin_phone_number: `+${adminPhoneNumberCode}-${adminPhoneNumber}`,
                  admin_role: adminRole,
                  admin_email: "",
                  token: token,
                  utm_source: utmSource,
                  utm_medium: utmMedium,
                  utm_campaign: utmCampaign,
                  lead_form_url: window?.location?.href
                },
              }).done(function (data) {});

              event.preventDefault();

              window?.tfiLeadFormSubmitted("TFI_LEAD_FORM_SUBMITTED", adminName, instituteName, adminRole, adminPhoneNumberCode, adminPhoneNumber, utmSource, utmMedium, utmCampaign, "Feature Page");

              if (ROLE_TO_UTYPE_MAPPING[adminRole] == 0) {
                window.location.replace(
                  `${ssoUrl}&tm_action=redirected_login&tm_name=${adminName}&tm_ins_name=${instituteName}&tm_phone_number=${adminPhoneNumber}&tm_country_code=${adminPhoneNumberCode}` +
                    getAdditionalParmas()
                );
              } else if (
                ROLE_TO_UTYPE_MAPPING[adminRole] == 1 ||
                ROLE_TO_UTYPE_MAPPING[adminRole] == 2
              ) {
                window.location.replace(
                  "https://www.teachmint.com/homepage?" + getAdditionalParmas()
                );
              } else {
                //hide input form and start loading
                document.getElementById(`${FEATURE_FORM_MOBILE}`).style.display = 'none';
                document.getElementById(`${FEATURE_FORM_SUCCESS_MOBILE}`)?.classList?.toggle("hidden");
              }
            });
        });
      }
    });
  }
});
