import { useTheme } from "../context/ThemeContext";
import styles from "./ThemeSwitcher.module.css";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <section className={styles.card}>
      <p className={styles.text}>
        Gjeldende tema: {theme}
      </p>

      <button
        className={styles.button}
        onClick={toggleTheme}
      >
        Bytt tema
      </button>
    </section>
  );
}

export default ThemeSwitcher;