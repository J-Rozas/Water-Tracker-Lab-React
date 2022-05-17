import MainPage from './pages/MainPage';
import useToggle from './hooks/toggle';

function App() {
  const darkMode = useToggle();

  return (
    <div className={darkMode.isDarkMode ? "dark" : "light"}>
      <button onClick={darkMode.toggleDarkMode}>Dark/Light</button>
      <MainPage />
    </div>
  );
}

export default App;
