// const ACCOUNTS_API = "https://accounts.teachmint.com/"
const ACCOUNTS_API = "https://app.sims.ng/"
let ssoUrl = "https://app.sims.ng/";

if (window?.location?.origin == "https://sims.ng")
    ssoUrl = "https://app.sims.ng/"

// const BASE_URL = "http://localhost:3000";
// const BASE_URL = "https://app.sims.ng";
const BASE_URL = "https://sims-p73jgh31n-zaktech.vercel.app";

// const BASE_URL = DEV_BASE;
// const BASE_URL = LIVE_BASE;

let footerCompanyLinks = false;
const showFooterCompanyLinks = () => {
    if (footerCompanyLinks) {
        document.getElementById('company-footer-opt').classList.add('hidden');
        document.getElementById('company-footer-opt').classList.remove('flex');
    }
    else {
        document.getElementById('company-footer-opt').classList.remove('hidden');
        document.getElementById('company-footer-opt').classList.add('flex');
    }
    footerCompanyLinks = !footerCompanyLinks;
}

let footerSolutionLinks = false;
const showFooterSolutionLinks = () => {
    if (footerSolutionLinks) {
        document.getElementById('solutions-footer-opt').classList.add('hidden');
        document.getElementById('solutions-footer-opt').classList.remove('flex');
    }
    else {
        document.getElementById('solutions-footer-opt').classList.remove('hidden');
        document.getElementById('solutions-footer-opt').classList.add('flex');
    }
    footerSolutionLinks = !footerSolutionLinks;
}

let footerContactLinks = false;
const showFooterContactLinks = () => {
    if (footerContactLinks) {
        document.getElementById('contact-footer-opt').classList.add('hidden');
        document.getElementById('contact-footer-opt').classList.remove('flex');
    }
    else {
        document.getElementById('contact-footer-opt').classList.remove('hidden');
        document.getElementById('contact-footer-opt').classList.add('flex');
    }
    footerContactLinks = !footerContactLinks;
}

let footerToolsLinks = false;
const showFooterToolsLinks = () => {
    if (footerToolsLinks) {
        document.getElementById('tools-footer-opt').classList.add('hidden');
        document.getElementById('tools-footer-opt').classList.remove('flex');
    }
    else {
        document.getElementById('tools-footer-opt').classList.remove('hidden');
        document.getElementById('tools-footer-opt').classList.add('flex');
    }
    footerToolsLinks = !footerToolsLinks;
}


const toggleNavDropDown = (e) => {
    document.getElementById('nav-dropdown-id')?.classList?.toggle('hidden')
    document.getElementById('temp-header-for-postioning')?.classList?.toggle('hidden')
    document.getElementById('header-body')?.classList?.toggle('bg-blur-navbar');
}

document.addEventListener('click', (e) => {
    if (!document.getElementById('nav-dropdown-id')?.classList?.contains('hidden')) {
        if (e.target.id !== "navbar-solution-btn" && e.target.id !== "nav-dropdown-id" && e.target.parentNode.id !== "navbar-solution-btn") {
            document.getElementById('nav-dropdown-id')?.classList?.add('hidden')
            document.getElementById('temp-header-for-postioning')?.classList?.add('hidden')
            document.getElementById('header-body')?.classList?.toggle('bg-blur-navbar');
        }
    }
});
// Toggle menu burger code
let menuBurger = document.getElementById("burger-menu-icon");
let menuClose = document.getElementById("close-menu-icon");
let menuList = document.getElementById("mobile-menu");

const closeBurgerMenu = () => {
    let menuBurger = document.getElementById("burger-menu-icon");
    let menuClose = document.getElementById("close-menu-icon");
    let menuList = document.getElementById("mobile-menu");
    menuList.style.display = "none";
    menuBurger.style.display = "block";
    menuClose.style.display = "none";
};

if (menuBurger) {
    menuBurger.addEventListener("click", () => {
        let menuBurger = document.getElementById("burger-menu-icon");
        let menuClose = document.getElementById("close-menu-icon");
        let menuList = document.getElementById("mobile-menu");

        menuList.style.display = "block";
        menuBurger.style.display = "none";
        menuClose.style.display = "block";
    });

    menuClose.addEventListener("click", closeBurgerMenu);
}


let isMwebFeatureOpen = false;
const showMwebFeatures = () => {
    if (isMwebFeatureOpen) {
        document.getElementById('mweb-feature-dropdown-cont').classList.add('hidden');
    }
    else {
        document.getElementById('mweb-feature-dropdown-cont').classList.remove('hidden');
    }
    isMwebFeatureOpen = !isMwebFeatureOpen;
}

// Web form data
const TFI_FORM_ADMIN_NAME = "tm-tfi-contact-form-name";
const TFI_FORM_INSTITUTE_NAME = "tm-tfi-contact-form-institute-name";
const TFI_FORM_PHONE_NUMBER = "tm-tfi-contact-form-phone";
const TFI_FORM_PHONE_NUMBER_ISD = "tm-tfi-contact-form-country-code";
const TFI_FORM_ADMIN_ROLE = "tm-tfi-contact-form-role";
const TFI_FORM_EMAIL = "tm-tfi-contact-form-institute-email";
const TFI_FORM_SUCCESS = "tm-tfi-form-success";
const TFI_FORM_ERROR = "tm-tfi-form-error";
const TFI_FORM = "tm-tfi-input-form";

// MWeb form data
const TFI_FORM_ADMIN_NAME_MOBILE = "tm-tfi-contact-form-name-mobile";
const TFI_FORM_INSTITUTE_NAME_MOBILE =
    "tm-tfi-contact-form-institute-name-mobile";
const TFI_FORM_PHONE_NUMBER_MOBILE = "tm-tfi-contact-form-phone-mobile";
const TFI_FORM_PHONE_NUMBER_ISD_MOBILE =
    "tm-tfi-contact-form-country-code-mobile";
const TFI_FORM_EMAIL_MOBILE = "tm-tfi-contact-form-institute-email-mobile";
const TFI_FORM_ADMIN_ROLE_MOBILE = "tm-tfi-contact-form-role-mobile";
const TFI_FORM_MOBILE = "tm-tfi-input-form-mobile";
const TFI_FORM_SUCCESS_MOBILE = "tm-tfi-form-success-mobile";
const TFI_FORM_ERROR_MOBILE = "tm-tfi-form-error-mobile";
const ROLE_TO_UTYPE_MAPPING = {
    "Teacher": 1,
    "Student": 2,
    "School Admin": 0,
    "Principal": 0,
    "School Owner": 0,
};
let roleDropDownLock = true;
let flagListLock = true;
let flagListLockForm = true;
let flagListLockMobile = true;
let countryListDropDownClicked = false;
let countryListDropDownFormClicked = false;
let roleIndexMobile = 0;
let indexToRoleMapping = {
    0: "Select Role",
    1: "Teacher",
    2: "Student",
    3: "School Admin",
    4: "Principal",
    5: "School Owner",
    6: "Parent"
}

const getAdditionalParmas = () => {
    let url = new URL(window?.location?.href);
    let utmSource = url?.searchParams?.get("utm_source");
    let utmMedium = url?.searchParams?.get("utm_medium");
    let utmCampaign = url?.searchParams?.get("utm_campaign");
    additionalParmas = [];
    if (utmSource)
        additionalParmas.push("utm_source=" + utmSource);
    if (utmMedium)
        additionalParmas.push("utm_medium=" + utmMedium);
    if (utmCampaign)
        additionalParmas.push("utm_campaign=" + utmCampaign);
    if (additionalParmas.length > 0)
        return "&" + additionalParmas.join("&");
    return "";
}

const triggerFormModal = () => {
    if (window.getStartedModalOpen) {
        window?.getStartedModalOpen();
    }
    let element = document.getElementById("inst-form-modal-id");
    element.style.display = "block";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
}

const closeTriggerFormModal = () => {
    let element = document.getElementById("inst-form-modal-id");
    element.style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}

const checkInternational = () => {
    let isInternational = document?.getElementById("is_international")?.innerText.trim();
    if (isInternational == "True")
        return true;
    return false;
}

$(document).ready(function () {
    // Web form submit
    const leadformSubmitButton = document.getElementById("tm-tfi-contact-form-submit")
    if (leadformSubmitButton) {
        leadformSubmitButton.addEventListener('click', () => {
            let adminName = document.getElementById(`${TFI_FORM_ADMIN_NAME}`).value.trim();
            let schoolName = document.getElementById(`${TFI_FORM_INSTITUTE_NAME}`).value.trim();
            let adminPhone = document.getElementById(`${TFI_FORM_PHONE_NUMBER}`).value.trim();
            let adminPhoneNumberCode = document.getElementById(`${TFI_FORM_PHONE_NUMBER_ISD}`).innerText.trim();
            let adminRole = indexToRoleMapping[document.getElementById(TFI_FORM_ADMIN_ROLE).selectedIndex].trim();
            let adminEmail = document.getElementById(`${TFI_FORM_EMAIL}`);
            if (checkInternational()) {
                adminEmail = document.getElementById(`${TFI_FORM_EMAIL}`)?.value?.trim();
            }
            let flag = true;

            if (adminPhoneNumberCode.charAt(0) === "+") {
                adminPhoneNumberCode = adminPhoneNumberCode.substring(1);
            }

            if (String(adminName).length < 3) {
                document.getElementById(`${TFI_FORM_ADMIN_NAME}-err`).innerText = "Name must have atleast 3 characters";
                flag = false;
            } else document.getElementById(`${TFI_FORM_ADMIN_NAME}-err`).innerText = "";

            if (String(schoolName).length < 3) {
                document.getElementById(`${TFI_FORM_INSTITUTE_NAME}-err`).innerText = "School name must have atleast 3 characters";
                flag = false;
            } else document.getElementById(`${TFI_FORM_INSTITUTE_NAME}-err`).innerText = "";

            if (/^[0-9]{7,15}$/.test(String(adminPhone).trim()))
                document.getElementById(`${TFI_FORM_PHONE_NUMBER}-err`).innerText = "";
            else {
                document.getElementById(`${TFI_FORM_PHONE_NUMBER}-err`).innerText = "Phone number must have atleast 7 digits and atmost 15 digits";
                flag = false;
            }

            if (adminRole.localeCompare("Select Role") != 0)
                document.getElementById(`${TFI_FORM_ADMIN_ROLE}-err`).innerText = "";
            else {
                document.getElementById(`${TFI_FORM_ADMIN_ROLE}-err`).innerText = "Please select a role";
                flag = false;
            }

            if (checkInternational()) {
                if (
                    /^(([^<>()[\]\\.,;:\s@“]+(\.[^<>()[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                        String(adminEmail).trim()
                    )
                )
                    document.getElementById(`${TFI_FORM_EMAIL}-err`).innerText = "";
                else {
                    document.getElementById(`${TFI_FORM_EMAIL}-err`).innerText = "Invalid Email Address";
                    flag = false;
                }
            }

            document.getElementById("tm-tfi-contact-form-submit").disabled = true;
            document.getElementById("tm-tfi-contact-form-submit").innerText = "Please wait .... ";

            const data = {
                adminName: adminName,
                schoolName: schoolName,
                adminPhone: `+${adminPhoneNumberCode}-${adminPhone}`,
                adminRole: adminRole,
                adminEmail: adminEmail
            };

            if (flag) {
                event.preventDefault();
                $.ajax({
                    type: "POST",
                    url: BASE_URL + '/api/v1/schools',
                    data: data,
                    success: function (data) {
                        console.log(data);
                        document.getElementById(`${TFI_FORM}`).style.display = "none";
                        document.getElementById(`${TFI_FORM_SUCCESS}`).style.display = "block";
                    },
                    error: function (error) {
                        // hide input form and start loading
                        document.getElementById(`${TFI_FORM}`).style.display = "none";

                        if (error.statusText === "error") {
                            document.getElementById('error-container').innerText = "Please check your Internet, and fill the form again,\nif the error persist, kindly Contact Support: ";
                        }
                        if (error.responseJSON) {
                            document.getElementById('error-container').innerText = `${JSON.stringify(error.responseJSON.message)}`;
                        }
                        document.getElementById(`${TFI_FORM_ERROR}`).style.display = "block";
                    }
                });
            }

            // if (flag) {
            //     event.preventDefault();

            //     grecaptcha.ready(function () {
            //         grecaptcha
            //             .execute("6Ld53WwaAAAAALUdYMhgWVTy4-H4512vhFq-rdng", {
            //                 action: "submit",
            //             })
            //             .then(function (token) {
            //                 // call to server
            //                 $.ajax({
            //                     type: "POST",
            //                     url: "/handle-tfi-contact-form",
            //                     data: {
            //                         adminName: adminName,
            //                         schoolName: schoolName,
            //                         adminPhone: `+${adminPhoneNumberCode}-${adminPhone}`,
            //                         adminRole: adminRole,
            //                         adminEmail: adminEmail,
            //                         token: token,
            //                         utm_source: utmSource,
            //                         utm_medium: utmMedium,
            //                         utm_campaign: utmCampaign,
            //                         utm_content: utmContent,
            //                         utm_keyword: utmKeyword,
            //                         lead_form_url: window?.location?.href
            //                     },
            //                 }).done(function (data) {
            //                     console.log(`ON submitted :: ${data}`);
            //                 });

            //                 event.preventDefault();

            //                 window?.tfiLeadFormSubmitted("TFI_LEAD_FORM_SUBMITTED", adminName, schoolName, adminRole, adminPhoneNumberCode, adminPhone, utmSource, utmMedium, utmCampaign, utmContent, utmKeyword, "Landing Page");

            //                 if (ROLE_TO_UTYPE_MAPPING[adminRole] == 0) {
            //                     window.location.replace(
            //                         `${ssoUrl}&tm_action=redirected_login&tm_name=${adminName}&tm_ins_name=${instituteName}&tm_phone_number=${adminPhoneNumber}&tm_country_code=${adminPhoneNumberCode}` + getAdditionalParmas()
            //                     );
            //                 } else if (
            //                     ROLE_TO_UTYPE_MAPPING[adminRole] == 1 ||
            //                     ROLE_TO_UTYPE_MAPPING[adminRole] == 2
            //                 ) {
            //                     window.location.replace(
            //                         `/login?tm_action=redirected_login&tm_name=${adminName}&utype=${ROLE_TO_UTYPE_MAPPING[adminRole]}&tm_phone_number=${adminPhoneNumber}&tm_country_code=${adminPhoneNumberCode}` + getAdditionalParmas()
            //                     );
            //                 } else {
            //                     //hide input form and start loading
            //                     document.getElementById(`${TFI_FORM}`).style.display = "none";
            //                     document.getElementById(`${TFI_FORM_SUCCESS}`).style.display = "block";
            //                 }
            //             });
            //     });
            // }
        });
    }

    function mwebSubmit(event, id) {
        let adminName = document.getElementById(`${TFI_FORM_ADMIN_NAME_MOBILE}`).value.trim();
        let instituteName = document.getElementById(`${TFI_FORM_INSTITUTE_NAME_MOBILE}`).value.trim();
        let adminPhoneNumber = document.getElementById(`${TFI_FORM_PHONE_NUMBER_MOBILE}`).value.trim();
        let adminPhoneNumberCode = document.getElementById(`${TFI_FORM_PHONE_NUMBER_ISD_MOBILE}`)
            .innerText
            .trim();
        let adminRole = document.getElementById(`${TFI_FORM_ADMIN_ROLE_MOBILE}`);
        if (id === 1) {
            adminRole = indexToRoleMapping[document.getElementById(TFI_FORM_ADMIN_ROLE_MOBILE).selectedIndex].trim();
        }
        else {
            adminRole = indexToRoleMapping[document.getElementById("tm-tfi-contact-form-role-mobile-1").selectedIndex].trim();
        }
        let adminEmail = document.getElementById(`${TFI_FORM_EMAIL_MOBILE}`)?.value?.trim();

        let flag = true;

        if (adminPhoneNumberCode.charAt(0) === "+") {
            adminPhoneNumberCode = adminPhoneNumberCode.substring(1);
        }

        if (String(adminName).length < 3) {
            document.getElementById(`${TFI_FORM_ADMIN_NAME_MOBILE}-err`).innerText = "Name must have atleast 3 characters";
            flag = false;
        } else document.getElementById(`${TFI_FORM_ADMIN_NAME_MOBILE}-err`).innerText = "";

        if (String(instituteName).length < 3) {
            document.getElementById(`${TFI_FORM_INSTITUTE_NAME_MOBILE}-err`).innerText = "School name must have atleast 3 characters";
            flag = false;
        } else document.getElementById(`${TFI_FORM_INSTITUTE_NAME_MOBILE}-err`).innerText = "";

        if (/^[0-9]{7,15}$/.test(String(adminPhoneNumber).trim()))
            document.getElementById(`${TFI_FORM_PHONE_NUMBER_MOBILE}-err`).innerText = "";
        else {
            document.getElementById(`${TFI_FORM_PHONE_NUMBER_MOBILE}-err`).innerText = "Phone number must have atleast 7 digits and atmost 15 digits";
            flag = false;
        }

        if (adminRole.localeCompare("Select Role") != 0)
            document.getElementById(`${TFI_FORM_ADMIN_ROLE_MOBILE}-err`).innerText = "";
        else {
            if (id === 1) {
                document.getElementById(`${TFI_FORM_ADMIN_ROLE_MOBILE}-err`).innerText = "Please select a role";
            }
            else {
                document.getElementById(`tm-tfi-contact-form-role-mobile-1-err`).innerText = "Please select a role";
            }
            flag = false;
        }

        if (checkInternational()) {
            if (
                /^(([^<>()[\]\\.,;:\s@“]+(\.[^<>()[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    String(adminEmail).trim()
                )
            )
                document.getElementById(`${TFI_FORM_EMAIL_MOBILE}-err`).innerText = "";
            else {
                document.getElementById(`${TFI_FORM_EMAIL_MOBILE}-err`).innerText = "Invalid Email Address";
                flag = false;
            }
        }

        const data = {
            adminName: adminName,
            schoolName: instituteName,
            adminPhone: `+${adminPhoneNumberCode}-${adminPhoneNumber}`,
            adminRole: adminRole,
            adminEmail: adminEmail
        };

        if (flag) {
            event.preventDefault();
            $.ajax({
                type: "POST",
                url: BASE_URL + '/api/v1/schools',
                data: data,
                success: function (data) {
                    console.log(data);
                    document.getElementById(`${TFI_FORM_MOBILE}`).style.display = "none";
                    document.getElementById(`${TFI_FORM_SUCCESS_MOBILE}`).style.display = "block";
                },
                error: function (error) {
                    // hide input form and start loading
                    document.getElementById(`${TFI_FORM_MOBILE}`).style.display = "none";

                    if (error.statusText === "error") {
                        document.getElementById('error-container').innerText = "Please check your Internet, and fill the form again,\nif the error persist, kindly Contact Support: ";
                    }
                    if (error.responseJSON) {
                        document.getElementById('error-container').innerText = `${JSON.stringify(error.responseJSON.message)}`;
                    }

                    document.getElementById(`${TFI_FORM_ERROR_MOBILE}`).style.display = "block";
                }
            });
        }
    }
    // Mweb form submit
    const leadformModalSubmitButton = document.getElementById("tm-tfi-contact-form-submit-mobile")
    if (leadformModalSubmitButton) {
        leadformModalSubmitButton.addEventListener('click', (events) => {
            document.getElementById("tm-tfi-contact-form-submit-mobile").disabled = true;
            document.getElementById("tm-tfi-contact-form-submit-mobile").innerText = "Please wait ...";
            mwebSubmit(events, 1);
        });
    }

    const leadformModalSubmitButton1 = document.getElementById("tm-tfi-contact-form-submit-mobile-1")
    if (leadformModalSubmitButton1) {
        leadformModalSubmitButton1.addEventListener('click', (events) => {
            document.getElementById("tm-tfi-contact-form-submit-mobile-1").disabled = true;
            document.getElementById("tm-tfi-contact-form-submit-mobile-1").innerText = "Please wait...";
            mwebSubmit(events, 2);
        });
    }

    //partner web form submit
    const partnerFormSubmitButton = document.getElementById("partner-submit-button");

    if (partnerFormSubmitButton) {
        partnerFormSubmitButton.addEventListener('click', (events) => {

            let partnerName = document.getElementById(`name-2`).value.trim();
            let partnerPhoneNumber = document.getElementById(`Mobile-Number-2`).value.trim();
            let partnerEmail = document.getElementById(`email-2`).value.trim();
            let partnerJobTitle = document.getElementById(`JobTitle-2`).value.trim();
            let partnerBusiness = document.getElementById(`field-2`).value.trim();

            let flag = true;

            const data = {
                partnerName: partnerName,
                partnerPhoneNumber: partnerPhoneNumber,
                partnerEmail: partnerEmail,
                partnerJobTitle: partnerJobTitle,
                partnerBusiness: partnerBusiness
            };

            if (flag) {
                event.preventDefault();
                $.ajax({
                    type: "POST",
                    url: BASE_URL + '/api/v1/partners',
                    data: data,
                    success: function (data) {
                        console.log(JSON.stringify(data));
                        // document.getElementById(`my-form`).style.display = "none";
                        const successContainer = document.getElementById(`success`);
                        successContainer.style.display = "block";
                        setTimeout(()=> {
                            successContainer.style.display = "none";
                            document.getElementById("my-form").reset();
                        }, 3000);
                    },
                    error: function (error) {
                        // hide input form and start loading
                        // document.getElementById(`${TFI_FORM_MOBILE}`).style.display = "none";
                        const errorContainer = document.getElementById('error');

                        if (error.statusText === "error") {
                            errorContainer.innerText = "Please check your Internet, and fill the form again,\nif the error persist, kindly Contact Support: ";
                        }
                        if (error.responseJSON) {
                            errorContainer.innerText = `${JSON.stringify(error.responseJSON.message)}`;
                        }

                        errorContainer.style.display = "block";
                        setTimeout(() => {
                            errorContainer.style.display = "none";
                        }, 2000);
                    }
                });
            }

            // document.getElementById("tm-tfi-contact-form-submit-mobile").disabled = true;
            // document.getElementById("tm-tfi-contact-form-submit-mobile").innerText = "Please wait ...";
        });
    }
});

const getCountry = () => {
    const fetchCountryList = fetch(`${ACCOUNTS_API}get/country/codes`).then(response => {
        return response.json()
    }).then(countryList =>
        countryList
    );
    return fetchCountryList
};

const toggleFlagList = async () => {
    let countryDropDown = document.getElementById("country-code-dropdown-mobile")
    if (!countryListDropDownClicked) {
        let countryList = await getCountry()
        countryListDropDownClicked = true;
        countryList["obj"].forEach(country => {
            const countryDataContainer = Object.assign(document.createElement("div"),
                {
                    classList: ['flex tm-bdr-b-gy-2 py-2 country-dropdown-option-mobile justify-evenly']
                });
            const countryCodeContainer = Object.assign(document.createElement("div"),
                {
                    classList: ['country-dropdown-option-code-mobile'],
                });
            const countryFlagElement = Object.assign(document.createElement("img"),
                {
                    classList: ['h-6 w-8 rounded-sm country-dropdown-option-flag-mobile'],
                    src: country.flag_url
                });

            countryCodeContainer.appendChild(document.createTextNode(`+${country.isd_code}`));
            countryDataContainer.appendChild(countryFlagElement)
            countryDataContainer.appendChild(countryCodeContainer)
            countryDropDown.appendChild(countryDataContainer)
        })
        selectCountryOptionsModal();
    }
    countryDropDown?.classList?.toggle("hidden")
    flagListLock = false;
};

const toggleFlagListForm = async () => {
    let countryDropDownForm = document.getElementById("country-code-dropdown-form")
    if (!countryListDropDownFormClicked) {
        let countryList = await getCountry()
        countryListDropDownFormClicked = true;
        countryList["obj"].forEach(country => {
            const countryDataContainer = Object.assign(document.createElement("div"),
                {
                    classList: ['flex tm-bdr-b-gy-2 py-2 country-dropdown-option-form justify-evenly']
                });
            const countryCodeContainer = Object.assign(document.createElement("div"),
                {
                    classList: ['country-dropdown-option-code-form'],
                });
            const countryFlagElement = Object.assign(document.createElement("img"),
                {
                    classList: ['h-6 w-8 rounded-sm country-dropdown-option-flag-form'],
                    src: country.flag_url
                });

            countryCodeContainer.appendChild(document.createTextNode(`+${country.isd_code}`));
            countryDataContainer.appendChild(countryFlagElement)
            countryDataContainer.appendChild(countryCodeContainer)
            countryDropDownForm.appendChild(countryDataContainer)
        })
        selectCountryOptionsForm();
    }
    countryDropDownForm?.classList?.toggle("hidden")
    flagListLockForm = false;
};

const selectCountryOptionsModal = () => {
    let options = [...document.querySelectorAll(".country-dropdown-option-mobile")];
    options.forEach((option) => {
        option.addEventListener("click", () => {
            let countryISD = document?.getElementById(
                "tm-tfi-contact-form-country-code-mobile"
            );
            let countryFlag = document?.getElementById(
                "tm-tfi-contact-form-country-flag-mobile"
            );
            if (countryISD && countryFlag) {
                countryFlag.src = option?.children[0].src.trim();
                countryISD.innerText = option?.children[1].innerHTML.trim();
            }
        });
    });
};

const selectCountryOptionsForm = () => {
    let options = [...document.querySelectorAll(".country-dropdown-option-form")];
    options.forEach((option) => {
        option.addEventListener("click", () => {
            let countryISD = document?.getElementById(
                "tm-tfi-contact-form-country-code"
            );
            let countryFlag = document?.getElementById(
                "tm-tfi-contact-form-country-flag"
            );
            if (countryISD && countryFlag) {
                countryFlag.src = option?.children[0].src.trim();
                countryISD.innerText = option?.children[1].innerHTML.trim();
            }
        });
    });
};

const openModal = () => {
    let url = new URL(window.location.href);
    let getStarted = url.searchParams.get("get_started");
    if (getStarted === 'true') { triggerFormModal(); }
}

window.addEventListener("load", () => {
    openModal();
});

const copyLink = () => {
    let copyLink = document.getElementById("copied-to-clipboard");
    navigator.clipboard.writeText("https://app.sims.ng");
    copyLink.style.display = "block";
    window.setTimeout(() => {
        copyLink.style.display = "none";
    }, 2000);
    window?.tfiLeadFormlinkCopied('TFI_LEAD_FORM_LINK_COPIED');
};

const copyLinkMobile = () => {
    let copyLink = document.getElementById("copied-to-clipboard-mobile");
    navigator.clipboard.writeText("https://app.sims.ng");
    copyLink.style.display = "block";
    window.setTimeout(() => {
        copyLink.style.display = "none";
    }, 2000);
    window?.tfiLeadFormlinkCopied('TFI_LEAD_FORM_LINK_COPIED');
};