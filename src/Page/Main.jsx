import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import {
  Home,
  NotFound,
  Login,
  SignUp,
  AccountCenter,
  ClassesList,
  QuizzList,
  UsefulTools,
  KnowledgeArea,
  Forum,
} from "./Routes";

export default function Main() {
  return (
    <main className="min-h-screen pt-16 bg-gradient-to-r from-purple-50 to-purple-100 overflow-auto">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="account-center"
            element={<Navigate to="account-overview" />}
          />
          <Route path="account-center/:section" element={<AccountCenter />} />
          <Route path="classes-list" element={<ClassesList />} />
          <Route path="quizz-list" element={<QuizzList />} />
          <Route path="useful-tools" element={<UsefulTools />} />
          <Route path="knowledge-area" element={<KnowledgeArea />} />
          <Route path="forum" element={<Navigate to="recent_posts" />} />
          <Route path="forum/:section" element={<Forum />} />
        </Routes>
      </Router>
    </main>
  );
}
