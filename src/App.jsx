import { Header, Main, Footer, Modals } from "./Page";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import { ModalProvider, QuestionProvider, SearchProvider } from "./Contexts";
import { ScrollToTop } from "./Functions";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
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
      </Router>
    </>
  );
}

export default App;
