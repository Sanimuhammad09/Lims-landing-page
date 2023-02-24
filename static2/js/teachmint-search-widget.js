class SIMSSearchWidget extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = this.template();
  }
  template() {
    return `
          <style>
          @import url("https://fonts.gstatic.com");
          @import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
          #tm-search-input-container
          {
              width: ${this.getAttribute("size")
        ? this.getAttribute("size") + "rem"
        : "100%"
      };
              height: 48px;
              background: #FFFFFF;
              border: 1px solid #DBE2EA;
              box-sizing: border-box;
              border-radius: 8px;
              display:flex;
              align-items:center;
              justify-content:evenly;
              padding:12px 16px;
              min-width:310px;
          }
          #tm-logo-container
          {
            display:${this.getAttribute("hideLogo") == "true" ? "none" : "flex"
      };
            align-items:center;
          }
          #tm-search-input
          {
              color: #1F3965;
              background: #FFFFFF;
              font-size: 18px;
              font-weight:400;
              font-family:Lato;
              line-height: 130%;
              border-style: hidden;
              flex-grow:1;
          }
          #tm-logo
          {
              width:21px;
              height:21px;
          }
          #tm-search-separator
          {
            height: 24px;
            padding:2px;
            border-left: 1px solid #1F3965;
            opacity: 0.2;
            margin-right:16px;
            margin-left:13px;
          }
          #tm-search-icon
          {
            width:21px;
            height:21px;
            margin-left:16px;
            margin-right:10px;
            cursor:pointer;
          }
          input[type="search"]::-webkit-search-decoration,
          input[type="search"]::-webkit-search-cancel-button,
          input[type="search"]::-webkit-search-results-button,
          input[type="search"]::-webkit-search-results-decoration {
           display: none;
          }
          input:focus {
              outline: none;
          }
          </style>
          <div id="tm-search-input-container">
          <div id="tm-logo-container">
          <img id="tm-logo"
          src="https://storage.googleapis.com/tm-assets/images/dark/teachmint-collapse-logo.svg"/>
          <div id="tm-search-separator">
          </div>
          </div>
          <input id="tm-search-input"
          placeholder="Search on teachmint..."
          type="search">
          </input>
          <img id="tm-search-icon" 
          src="https://storage.googleapis.com/tm-assets/icons/secondary/search-secondary.svg" />
          </div>
          `;
  }
}

const searchOnEnterPress = () => {
  let input = document
    .querySelector("teachmint-search-widget")
    .shadowRoot.querySelector("#tm-search-input");
  input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      let searchText = input.value.trim();
      if (searchText.length > 0) {
        let searchUrl =
          "https://www.teachmint.com/tfile/search?search_text=" + searchText;
        window.open(searchUrl, "_blank");
      }
    }
  });
};

const searchOnClick = () => {
  let searchIcon = document
    .querySelector("teachmint-search-widget")
    .shadowRoot.querySelector("#tm-search-icon");
  searchIcon.addEventListener("click", () => {
    let input = document
      .querySelector("teachmint-search-widget")
      .shadowRoot.querySelector("#tm-search-input");
    let searchText = input.value.trim();
    if (searchText.length > 0) {
      let searchUrl =
        "https://www.teachmint.com/tfile/search?search_text=" + searchText;
      window.open(searchUrl, "_blank");
    }
  });
};

window.addEventListener("load", () => {
  window.customElements.define(
    "teachmint-search-widget",
    SIMSSearchWidget
  );
  searchOnEnterPress();
  searchOnClick();
});
