import Header from "./Page/Header";
import Main from "./Page/Main";
import Footer from "./Page/Footer";
import { SearchProvider } from "./Contexts/SearchContext";
import { QuestionProvider } from "./Contexts/QuestionContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <QuestionProvider>
          <SearchProvider>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
          </SearchProvider>
        </QuestionProvider>
      </Router>
    </>
  );
}

export default App;
