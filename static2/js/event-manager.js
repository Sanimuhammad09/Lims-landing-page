let EVENT_BACKEND_URL = "";

if (window?.location?.origin == "https://search.teachmint.com")
  EVENT_BACKEND_URL = "https://www.teachmint.com";

const FACEBOOK_EVENTS = ["TFI_LEAD_FORM_SUBMITTED"];

const NON_FIREBASE_EVENTS = [
  "SEARCHED_BUTTON_CLICKED",
  "SEARCH_CONTENT_CLICKED",
  "RECOMMENDED_CONTENT_CLICKED",
  "PDF_VIEWER_BUTTON_CLICKED",
  "GARUDA_ADD_TO_CLASSROOM",
  "GARUDA_LOGIN_CLICKED",
  "GARUDA_ATTEMPT_CLICKED",
  "GARUDA_ENROLL_NOW_CLICKED",
  "GARUDA_MORE_FROM_TEACHER_CLICKED",
  "GARUDA_CONTENT_SHARE_CLICKED",
  "GARUDA_GOOGLE_PLAY_CLICKED",
  "GARUDA_APP_STORE_CLICKED",
  "GARUDA_VIEW_ALL_CLICKED",
  "GARUDA_SEARCHED_TAB_CLICKED",
  "GARUDA_DOWNLOAD_NOW_CLICKED",
  "TFI_LEAD_FORM_LINK_COPIED",
];

const sendLogEventServer = (eventID, data) => {
  let fd = new FormData();
  // fd.append("event_id", eventID);
  fd.append("data", JSON.stringify(data));

  fetch(`${EVENT_BACKEND_URL}/handle-backend-event/${eventID}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: fd,
  });
};

/*
    Firebase initialization
*/
firebase.initializeApp({
  apiKey: "AIzaSyC86r_KE3JS7lhSBFq8x1mpR9WqucpS7_M",
  authDomain: "excellent-math-274709.firebaseapp.com",
  databaseURL: "https://excellent-math-274709.firebaseio.com",
  projectId: "excellent-math-274709",
  storageBucket: "excellent-math-274709.appspot.com",
  messagingSenderId: "554736302166",
  appId: "1:554736302166:web:cc281dcb31c5211c0563f7",
  measurementId: "G-3YS9P6ZDWX",
});

const firebaseAnalytics = firebase.analytics();

const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const getAppID = () => {
  let appId = window.localStorage.getItem("app_id");
  if (!appId) {
    appId = uuidv4();
    window.localStorage.setItem("app_id", appId);
  }
  return appId;
};

const sendEvent = async (eventId, data) => {
  data.app_id = getAppID();

  // send data to backend
  sendLogEventServer(eventId, data);

  // send events to firebase
  if (!NON_FIREBASE_EVENTS.includes(eventId)) {
    firebaseAnalytics.logEvent(eventId, data);
  }

  // send events to facebook
  if (FACEBOOK_EVENTS.includes(eventId) && window.fbq) {
    window.fbq("trackCustom", eventId, data);
  }
};
/*
  #eventId-> WEBSTORE_JOIN_CLASSROOM_REQUEST
  #btnType-> Contact; Join_classroom; Join_live_session; Reserve_your_spot
  #pageName-> main_page; video_lecture_page
*/
const storeContactBtnClicked = (eventId, btnType, classId, pageName) => {
  sendEvent(eventId, {
    btnType,
    classId,
    pageName,
  });
};

/*
  #eventId-> WEBSTORE_VIDEO_PLAY_EVENT     
  #pageName-> main_page; video_lecture_list
*/
const viewVideoBtnClicked = (eventId, videoId, pageName) => {
  sendEvent(eventId, { videoId, pageName });
};

/*
  #eventId-> WEBSTORE_VIEW_ALL_CLICK
  #btnType-> demo_video
*/
const viewAllBtnClicked = (eventId, btnType) => {
  sendEvent(eventId, { btnType });
};

/*
  #eventId-> WEBSTORE_DIGITAL_CHANNEL
  #smType-> facebook; youtube
*/
const socialMediaBtnClicked = (eventId, smType) => {
  sendEvent(eventId, { smType });
};

/*
  #eventId-> WEBSTORE_CTA_BTN
  #smType-> play_store, app_store
*/
const ctaBtnClicked = (eventId, smType) => {
  sendEvent(eventId, { smType });
};

/*
  #eventId-> WEBSTORE_FIXED_WHATSAPP_SHARE
*/
const whatsappShareBtnClicked = (eventId) => {
  sendEvent(eventId, {});
};

// eventID->RECOMMENDED_CONTENT_CLICKED
window.recommendationCardClicked = (
  eventId,
  tfileIdFrom,
  tfileIdTo,
  recNumber,
  tfileType
) => {
  let app_type = "";
  if (document?.body?.clientWidth <= 640) app_type = "M_WEB";
  else app_type = "WEB";
  sendEvent(eventId, {
    app_type,
    tfile_id_from: tfileIdFrom,
    tfile_id_to: tfileIdTo,
    rec_number: recNumber,
    tfile_type: tfileType,
  });
};
// eventID->GOOGLE_PLAY_TM_HOMEPAGE_CLICKED,IOS_APP_STORE_TM_HOMEPAGE_CLICKED
const appDownloadBtnClicked = (eventId) => {
  let app_type = "";
  if (document.body.clientWidth <= 640) app_type = "M_WEB";
  else app_type = "WEB";
  sendEvent(eventId, {
    app_type,
    uid: null,
    utype: null,
  });
};
// eventID->SEARCH_CONTENT_CLICKED
window.searchCardClicked = (
  eventId,
  tfileIdTo,
  tfileToType,
  searchResultNumber,
  searchTerm,
  screenName
) => {
  let app_type = "";
  if (document?.body?.clientWidth <= 640) app_type = "M_WEB";
  else app_type = "WEB";
  let url = "";
  if (window?.location?.href) url = window.location.href;
  sendEvent(eventId, {
    tfile_id_to: tfileIdTo,
    tfile_to_type: tfileToType,
    search_result_number: searchResultNumber,
    search_term: searchTerm,
    app_type,
    screen_name: screenName,
    url,
  });
};
//eventId->PDF_VIEWER_BUTTON_CLICKED
const pdfViewerButtonClicked = (eventId, tfileId, currentPage, totalPages) => {
  if (document.body.clientWidth <= 640) app_type = "M_WEB";
  else app_type = "WEB";
  sendEvent(eventId, {
    tfile_id: tfileId,
    current_page: currentPage,
    total_pages: totalPages,
    app_type,
  });
};
// eventId->SEARCHED_BUTTON_CLICKED
window.searchFromTfilePage = (
  eventId,
  tfileIdFrom,
  searchText,
  className,
  subjectName,
  screenName
) => {
  let app_type = "";
  if (document.body.clientWidth <= 640) app_type = "M_WEB";
  else app_type = "WEB";
  let url = "";
  if (window?.location?.href) url = window.location.href;
  sendEvent(eventId, {
    tfile_id_from: tfileIdFrom,
    search_text: searchText,
    class: className,
    subject: subjectName,
    app_type,
    url,
    screen_name: screenName,
  });
};
// eventId->LOOKBACK_SHARE_CLICKED
const lookbackShareClicked = (eventId, url) => {
  if (document.body.clientWidth <= 640) app_type = "M_WEB";
  else app_type = "WEB";
  sendEvent(eventId, {
    app_type,
    url: url,
  });
};

// eventId->TEACHSTACK_MODAL_SUBMIT
window.teachstackModalSubmit = (
  eventId,
  userName,
  phoneNumber,
  emailId,
  companyName,
  url
) => {
  sendEvent(eventId, {
    user_name: userName,
    phone_number: phoneNumber,
    email_id: emailId,
    company_name: companyName,
    url: url,
  });
};

// eventId->TEACHSTACK_CTA_CLICK
window.teachstackCtaClick = (eventId, btnType, url) => {
  sendEvent(eventId, { btnType, url });
};

// eventId->GARUDA_ADD_TO_CLASSROOM
const addToClassroomBtnClicked = (eventId, tfileId, tfileType) => {
  let app_type = "";
  let tfileUrl = "";
  if (document?.body?.clientWidth <= 640) app_type = "M_WEB";
  else app_type = "WEB";
  if (window?.location?.href) tfileUrl = window.location.href;
  sendEvent(eventId, {
    tfile_id: tfileId,
    tfile_type: tfileType,
    tfile_url: tfileUrl,
    app_type,
  });
};

// eventID->SEARCH_CONTENT_CLICKED
window.getStartedModalOpen = (
) => {
  let app_type = "";
  if (document?.body?.clientWidth <= 640) app_type = "M_WEB";
  else app_type = "WEB";
  let url = "";
  if (window?.location?.href) url = window.location.href;
  sendEvent("GET_STARTED_MODAL", {
    app_type,
    url,
  });
};

// eventId->GARUDA_LOGIN_CLICKED
const garudaLoginClicked = (eventId, tfileIdFrom, tfileType, screenName) => {
  let app_type = "";
  let url = "";
  let referrerUrl = "";
  if (document?.body?.clientWidth <= 640) app_type = "M_WEB";
  else app_type = "WEB";
  if (window?.location?.href) url = window.location.href;
  if (document?.referrer) referrerUrl = document.referrer;
  sendEvent(eventId, {
    tfile_type: tfileType,
    url,
    tfile_id_from: tfileIdFrom,
    app_type,
    screen_name: screenName,
    referrer_url: referrerUrl,
  });
};

// eventId->GARUDA_ATTEMPT_CLICKED
const garudaAttemptClicked = (eventId, tfileIdFrom, tfileType) => {
  let app_type = "";
  let referrerUrl = "";
  if (document?.body?.clientWidth <= 640) app_type = "M_WEB";
  else app_type = "WEB";
  if (document?.referrer) referrerUrl = document.referrer;
  if (window?.location?.href) url = window.location.href;
  sendEvent(eventId, {
    tfile_type: tfileType,
    url,
    tfile_id_from: tfileIdFrom,
    app_type,
    referrer_url: referrerUrl,
  });
};

// eventId->GARUDA_ENROLL_NOW_CLICKED
const garudaEnrollNowClicked = (
  eventId,
  tfileIdFrom,
  tfileType,
  classId,
  teacherId
) => {
  let app_type = "";
  let url = "";
  let referrerUrl = "";
  if (document?.body?.clientWidth <= 640) app_type = "M_WEB";
  else app_type = "WEB";
  if (window?.location?.href) url = window.location.href;
  if (document?.referrer) referrerUrl = document.referrer;
  sendEvent(eventId, {
    tfile_type: tfileType,
    url,
    tfile_id_from: tfileIdFrom,
    app_type,
    referrer_url: referrerUrl,
    class_id: classId,
    teacher_id: teacherId,
  });
};

// eventId->GARUDA_MORE_FROM_TEACHER_CLICKED
window.garudaMoreFromTeacherClicked = (
  eventId,
  tfileIdFrom,
  tfileType,
  teacherId
) => {
  let app_type = "";
  let url = "";
  let referrerUrl = "";
  if (document?.body?.clientWidth <= 640) app_type = "M_WEB";
  else app_type = "WEB";
  if (window?.location?.href) url = window.location.href;
  if (document?.referrer) referrerUrl = document.referrer;
  sendEvent(eventId, {
    tfile_type: tfileType,
    url,
    tfile_id_from: tfileIdFrom,
    app_type,
    referrer_url: referrerUrl,
    teacher_id: teacherId,
  });
};

// eventId->GARUDA_CONTENT_SHARE_CLICKED
window.garudaContentShareClicked = (
  eventId,
  tfileId,
  tfileType,
  screenName,
  className,
  subjectName,
  searchText
) => {
  let app_type = "";
  let url = "";
  if (document?.body?.clientWidth <= 640) app_type = "M_WEB";
  else app_type = "WEB";
  if (window?.location?.href) url = window.location.href;
  sendEvent(eventId, {
    app_type,
    url,
    screen_name: screenName,
    tfile_id: tfileId,
    tfile_type: tfileType,
    search_text: searchText,
    class: className,
    subject: subjectName,
  });
};

// eventId->GARUDA_GOOGLE_PLAY_CLICKED
window.garudaGooglePlayClicked = (
  eventId,
  tfileId,
  tfileType,
  screenName,
  className,
  subjectName,
  searchText
) => {
  let app_type = "";
  let url = "";
  if (document?.body?.clientWidth <= 640) app_type = "M_WEB";
  else app_type = "WEB";
  if (window?.location?.href) url = window.location.href;
  sendEvent(eventId, {
    app_type,
    url,
    screen_name: screenName,
    tfile_id: tfileId,
    tfile_type: tfileType,
    search_text: searchText,
    class: className,
    subject: subjectName,
  });
};

// eventId->GARUDA_APP_STORE_CLICKED
window.garudaAppStoreClicked = (
  eventId,
  tfileId,
  tfileType,
  screenName,
  className,
  subjectName,
  searchText
) => {
  let app_type = "";
  let url = "";
  if (document?.body?.clientWidth <= 640) app_type = "M_WEB";
  else app_type = "WEB";
  if (window?.location?.href) url = window.location.href;
  sendEvent(eventId, {
    app_type,
    url,
    screen_name: screenName,
    tfile_id: tfileId,
    tfile_type: tfileType,
    search_text: searchText,
    class: className,
    subject: subjectName,
  });
};

// eventId->GARUDA_VIEW_ALL_CLICKED
window.garudaViewAllClicked = (
  eventId,
  tfileType,
  className,
  subjectName,
  searchText
) => {
  let app_type = "";
  let url = "";
  if (document?.body?.clientWidth <= 640) app_type = "M_WEB";
  else app_type = "WEB";
  if (window?.location && window?.location?.href) url = window.location.href;
  sendEvent(eventId, {
    app_type,
    url,
    tfile_type: tfileType,
    search_text: searchText,
    class: className,
    subject: subjectName,
  });
};

// eventId->GARUDA_SEARCHED_TAB_CLICKED
window.garudaSearchedTabClicked = (
  eventId,
  tabType,
  className,
  subjectName,
  searchText
) => {
  let app_type = "";
  let url = "";
  if (document?.body?.clientWidth <= 640) app_type = "M_WEB";
  else app_type = "WEB";
  if (window.location && window.location.href) url = window.location.href;
  sendEvent(eventId, {
    app_type,
    url,
    tab_type: tabType,
    search_text: searchText,
    class: className,
    subject: subjectName,
  });
};

// eventId->GARUDA_DOWNLOAD_NOW_CLICKED
window.garudaDownloadNowClicked = (
  eventId,
  tfileId,
  tfileType,
  screenName,
  className,
  subjectName,
  searchText
) => {
  let app_type = "";
  let url = "";
  if (document?.body?.clientWidth <= 640) app_type = "M_WEB";
  else app_type = "WEB";
  if (window?.location?.href) url = window.location.href;
  sendEvent(eventId, {
    app_type,
    url,
    screen_name: screenName,
    tfile_id: tfileId,
    tfile_type: tfileType,
    search_text: searchText,
    class: className,
    subject: subjectName,
  });
};

// eventId->TFI_LEAD_FORM_SUBMITTED
window.tfiLeadFormSubmitted = (eventId, adminName, instituteName, role, countryCode, adminPhoneNumber, utmSource, utmMedium, utmCampaign, utmContent, utmKeyword, leadSource) => {
  let app_type = "";
  let url = "";
  if (document?.body?.clientWidth <= 640) app_type = "M_WEB";
  else app_type = "WEB";
  if (window?.location?.href) url = window.location.href;
  sendEvent(eventId, {
    app_type,
    url,
    role,
    name: adminName,
    institute_name: instituteName,
    country_code: countryCode,
    phone_no: adminPhoneNumber,
    utm_source: utmSource,
    utm_medium: utmMedium,
    utm_campaign: utmCampaign,
    utm_content: utmContent,
    utm_keyword: utmKeyword,
    lead_source: leadSource
  });
};

// eventId->TFI_LEAD_FORM_LINK_COPIED
window.tfiLeadFormlinkCopied = (eventId) => {
  let app_type = "";
  let url = "";
  if (document?.body?.clientWidth <= 640) app_type = "M_WEB";
  else app_type = "WEB";
  if (window?.location?.href) url = window.location.href;
  sendEvent(eventId, {
    app_type,
    url,
  });
};
