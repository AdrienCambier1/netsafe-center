import { Header, Main, Footer, Modals } from "./Page";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import { ModalProvider, QuestionProvider, SearchProvider } from "./Contexts";

function App() {
  return (
    <>
      <Router>
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
