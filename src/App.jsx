import { Header, Main, Footer, Modals } from "./Page";
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
import { ModalProvider, QuestionProvider, SearchProvider } from "./Contexts";

function App() {
  return (
    <>
      <Router>
        <ModalProvider>
          <PostErrorProvider>
            <CreatePostProvider>
              <QuestionProvider>
                <SearchProvider>
                  <Header />
                  <Main />
                  <Footer />
                  <Modals />
                </SearchProvider>
              </QuestionProvider>
            </CreatePostProvider>
          </PostErrorProvider>
        </ModalProvider>
      </Router>
    </>
  );
}

export default App;
