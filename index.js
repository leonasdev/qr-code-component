const toggleThemeElement = document.querySelector("#toggle-theme");

const prefersDarkMode = (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ?? true;
const defaultTheme = prefersDarkMode ? "dark" : "light";
const theme = localStorage.getItem("theme") ?? defaultTheme;
localStorage.setItem("theme", theme);

if (theme === "dark") {
  toggleThemeElement.checked = true;
  document.documentElement.dataset.theme = theme;
} else if (theme === "light") {
  toggleThemeElement.checked = false;
  document.documentElement.dataset.theme = theme;
}

toggleThemeElement.addEventListener("click", (e) => {
  const theme = e.target.checked ? "dark" : "light";
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
});
