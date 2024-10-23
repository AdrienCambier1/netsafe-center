import Header from "./Page/Header";
import Main from "./Page/Main";
import Footer from "./Page/Footer";
import { SearchProvider } from "./Contexts/SearchContext";

function App() {
  return (
    <>
      <SearchProvider>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </SearchProvider>
    </>
  );
}

export default App;
