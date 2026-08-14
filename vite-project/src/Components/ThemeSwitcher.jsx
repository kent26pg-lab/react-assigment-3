import { useTheme } from "../context/ThemeContext";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <p>Gjeldende tema: {theme}</p>

      <button onClick={toggleTheme}>
        Bytt tema
      </button>
    </div>
  );
}

export default ThemeSwitcher;