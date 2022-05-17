import MainPage from './pages/MainPage';
import useToggleLight from './hooks/toggleLight';

function App() {
  const darkMode = useToggleLight();

  return (
    <div className={darkMode.isDarkMode ? "dark" : "light"}>
      <button onClick={darkMode.toggleDarkMode}>Dark/Light</button>
      <MainPage />
    </div>
  );
}

export default App;
