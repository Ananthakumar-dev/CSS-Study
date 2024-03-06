// grab elements //
const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `Something went wrong, make sure that ${selector} exists or typed correctly`
  );
};

// add class active to header while scroll
const scrollHeadear = () => {
  const header = document.querySelector("#header");

  if (this.scrollY >= 15) {
    header.classList.add("activated");
  } else {
    header.classList.remove("activated");
  }
};
window.addEventListener("scroll", scrollHeadear);

// add active class to menu while scroll
const menuToggleIcon = selectElement("#menu-toggle-icon");

const clickMenuIcon = () => {
  const menu = selectElement("#menu");
  menuToggleIcon.classList.toggle("activated");
  menu.classList.toggle("activated");
};
menuToggleIcon.addEventListener("click", clickMenuIcon);

// toggle light and dark theme
const bodyElement = document.body;
const currentTheme = localStorage.getItem("currentTheme");
if (currentTheme) {
  bodyElement.classList.add("light-theme");
}

const ThemeBtn = selectElement("#theme-toggle-btn");
const handleThemeToggle = () => {
  bodyElement.classList.toggle("light-theme");

  if (bodyElement.classList.contains("light-theme")) {
    localStorage.setItem("currentTheme", "themeActivated");
  } else {
    localStorage.removeItem("currentTheme");
  }
};
ThemeBtn.addEventListener("click", handleThemeToggle);

const searchIcon = selectElement("#search-icon");
const searchContainer = selectElement("#search-form-container");
const formCloseBtn = selectElement("#form-close-btn");

searchIcon.addEventListener("click", () => {
  searchContainer.classList.add("activated");
});
formCloseBtn.addEventListener("click", () => {
  searchContainer.classList.remove("activated");
});

document.body.addEventListener("keyup", function (e) {
  if (e.key === "Escape") {
    searchContainer.classList.remove("activated");
  }
});
