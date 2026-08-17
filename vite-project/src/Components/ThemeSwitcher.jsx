import { useTheme } from "../context/ThemeContext";
import styles from "./ThemeSwitcher.module.css";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <section className={styles.card}>
      <p className={styles.text}>
        Current Theme: {theme}
      </p>

      <button
        className={styles.button}
        onClick={toggleTheme}
      >
        Change Theme
      </button>
    </section>
  );
}

export default ThemeSwitcher;