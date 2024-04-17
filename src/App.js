import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { IntlProvider } from "react-intl";
import { createContext, useEffect, useState } from "react";
import English from "./lang/en.json";
import Spanish from "./lang/es.json";
import BooksPage from "./pages/PokemonsPage/BooksPage";

export const LanguageSelector = createContext();

function App() {
  const [locale, setLocale] = useState(navigator.language);
  const [messages, setMessage] = useState(English);

  useEffect(() => {
    switch (locale) {
      case "es-ES":
        setMessage(Spanish);
        break;
      default:
        setMessage(English);
        break;
    }
  }, [locale]);

  return (
    <div className="app">
      <LanguageSelector.Provider value={{ setLanguage: setLocale }}>
        <IntlProvider messages={messages} locale={locale}>
          <HashRouter>
            <Routes>
              <Route path="/" element={<BooksPage></BooksPage>}></Route>
            </Routes>
          </HashRouter>
        </IntlProvider>
      </LanguageSelector.Provider>
    </div>
  );
}

export default App;
