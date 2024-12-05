import { Navigate, Route, Routes } from "react-router-dom";
import {
  Home,
  NotFound,
  Login,
  SignUp,
  AccountCenter,
  ClassesList,
  QuizList,
  Quiz,
  UsefulTools,
  KnowledgeArea,
  Forum,
  Class,
} from "./Routes";
import {
  MostLikedPosts,
  RecentPosts,
  SavedPosts,
  UserPosts,
} from "./Routes/ForumContent";
import {
  AccountOverview,
  PasswordAndSecurity,
  PersonalData,
  Appeareance,
} from "./Routes/AccountCenterContent";
import { Question } from "./Routes/QuizContent";
import { ClassSection } from "./Routes/ClassContent";
import { ThemeContext } from "../Contexts";
import { useContext } from "react";

export default function Main() {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      className={`${
        theme === "dark"
          ? "bg-black"
          : "bg-gradient-to-bl from-purple-50 to-yellow-50"
      } min-h-screen pt-16 flex justify-center`}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="account_center" element={<AccountCenter />}>
          <Route path="account_overview" element={<AccountOverview />} />
          <Route path="personal_data" element={<PersonalData />} />
          <Route
            path="password_and_security"
            element={<PasswordAndSecurity />}
          />
          <Route path="appearance" element={<Appeareance />} />
        </Route>
        <Route path="classes_list" element={<ClassesList />} />
        <Route path="quiz_list" element={<QuizList />} />
        <Route path="useful_tools" element={<UsefulTools />} />
        <Route path="knowledge_area" element={<KnowledgeArea />} />
        <Route path="forum" element={<Forum />}>
          <Route path="recent_posts" element={<RecentPosts />} />
          <Route path="most_liked_posts" element={<MostLikedPosts />} />
          <Route path="saved_posts" element={<SavedPosts />} />
          <Route path="user_posts" element={<UserPosts />} />
        </Route>
        <Route path="quiz/:quizId" element={<Quiz />}>
          <Route path="" element={<Question />} />
        </Route>
        <Route path="class/:classId" element={<Class />}>
          <Route path="section/:sectionId" element={<ClassSection />} />
        </Route>
      </Routes>
    </main>
  );
}
