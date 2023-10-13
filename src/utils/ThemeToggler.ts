import { MoonIcon, SunIcon } from "@assets";

export class ThemeToggler {
  private isLight: boolean;
  private themeButton: HTMLElement;
  private themeButtonIcon: HTMLElement;
  private themeButtonText: HTMLElement;
  private themeBodyClass: HTMLElement;
  private browserTheme: HTMLMetaElement;

  constructor(
    themeButton: HTMLElement,
    themeButtonIcon: HTMLElement,
    themeButtonText: HTMLElement,
    themeBodyClass: HTMLElement,
    browserTheme: HTMLMetaElement,
  ) {
    this.themeButton = themeButton;
    this.themeButtonIcon = themeButtonIcon;
    this.themeButtonText = themeButtonText;
    this.themeBodyClass = themeBodyClass;
    this.browserTheme = browserTheme;

    this.isLight =
      typeof localStorage !== "undefined" && localStorage.getItem("theme")
        ? localStorage.getItem("theme") === "light"
        : window.matchMedia("(prefers-color-scheme: dark)").matches;

    this.applyTheme();
    this.initThemeToggle();
  }

  private initThemeToggle() {
    this.themeButton.addEventListener("click", () => this.toggleTheme());
  }

  private toggleTheme() {
    this.isLight = !this.isLight;
    localStorage.setItem("theme", this.isLight ? "light" : "dark");
    this.applyTheme();
  }

  private applyTheme() {
    const themeColor = this.isLight ? "light" : "dark";
    const themeIcon = this.isLight ? SunIcon : MoonIcon;
    const browserColor = this.isLight ? "#EFF1F5" : "#1E1E2E";

    this.browserTheme.content = browserColor;
    this.themeButtonText.textContent = themeColor;
    this.themeButtonIcon.innerHTML = themeIcon;
    this.themeBodyClass.classList.toggle("dark", !this.isLight);
    this.themeBodyClass.classList.toggle("frappe", !this.isLight);
  }
}
