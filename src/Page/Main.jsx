import { Navigate, Route, Routes } from "react-router-dom";
import {
  Home,
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
import { ConnectionContext } from "../Contexts";
import { useContext } from "react";

export default function Main() {
  const { isAuthenticated } = useContext(ConnectionContext);

  return (
    <main className=" min-h-screen pt-16 flex justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route
          path="account_center"
          element={
            isAuthenticated === true ? <AccountCenter /> : <Navigate to="/" />
          }
        >
          <Route path="account_overview" element={<AccountOverview />} />
          <Route path="personal_data" element={<PersonalData />} />
          <Route
            path="password_and_security"
            element={<PasswordAndSecurity />}
          />
          <Route path="appearance" element={<Appeareance />} />
        </Route>
        <Route
          path="classes_list"
          element={
            isAuthenticated === true ? <ClassesList /> : <Navigate to="/" />
          }
        />
        <Route
          path="quiz_list"
          element={
            isAuthenticated === true ? <QuizList /> : <Navigate to="/" />
          }
        />
        <Route path="useful_tools" element={<UsefulTools />} />
        <Route path="knowledge_area" element={<KnowledgeArea />} />
        <Route path="forum" element={<Forum />}>
          <Route path="recent_posts" element={<RecentPosts />} />
          <Route path="most_liked_posts" element={<MostLikedPosts />} />
          <Route
            path="saved_posts"
            element={
              isAuthenticated === true ? <SavedPosts /> : <Navigate to="/" />
            }
          />
          <Route
            path="user_posts"
            element={
              isAuthenticated === true ? <UserPosts /> : <Navigate to="/" />
            }
          />
        </Route>
        <Route
          path="quiz/:quizId"
          element={isAuthenticated === true ? <Quiz /> : <Navigate to="/" />}
        >
          <Route path="" element={<Question />} />
        </Route>
        <Route
          path="class/:classId"
          element={isAuthenticated === true ? <Class /> : <Navigate to="/" />}
        >
          <Route path="section/:sectionId" element={<ClassSection />} />
        </Route>
      </Routes>
    </main>
  );
}
