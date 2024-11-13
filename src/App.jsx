import Header from "./Page/Header";
import Main from "./Page/Main";
import Footer from "./Page/Footer";
import { SearchProvider } from "./Contexts/SearchContext";
import { QuestionProvider } from "./Contexts/QuestionContext";
import {
  CreatePostProvider,
  PostErrorProvider,
} from "./Contexts/CreatePostContext";
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
        <PostErrorProvider>
          <CreatePostProvider>
            <QuestionProvider>
              <SearchProvider>
                <Header />
                <Main />
                <Footer />
              </SearchProvider>
            </QuestionProvider>
          </CreatePostProvider>
        </PostErrorProvider>
      </Router>
    </>
  );
}

export default App;
