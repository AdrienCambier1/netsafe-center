import { Header, Main, Footer, Modals } from "./Page";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import {
  ThemeProvider,
  ModalProvider,
  QuestionProvider,
  SearchProvider,
} from "./Contexts";
import { ScrollToTop } from "./Functions";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <ThemeProvider>
          <ModalProvider>
            <QuestionProvider>
              <SearchProvider>
                <Header />
                <Main />
                <Footer />
                <Modals />
              </SearchProvider>
            </QuestionProvider>
          </ModalProvider>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
