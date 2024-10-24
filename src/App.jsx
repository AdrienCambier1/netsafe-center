import Header from "./Page/Header";
import Main from "./Page/Main";
import Footer from "./Page/Footer";
import { SearchProvider } from "./Contexts/SearchContext";
import { QuestionProvider } from "./Contexts/QuestionContext";

function App() {
  return (
    <>
      <QuestionProvider>
        <SearchProvider>
          <Header></Header>
          <Main></Main>
          <Footer></Footer>
        </SearchProvider>
      </QuestionProvider>
    </>
  );
}

export default App;
