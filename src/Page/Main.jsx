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
import { ProtectedRoute } from "../Components/ProtectedRoute";

export default function Main() {
  return (
    <main className="min-h-[100vh] pt-16 flex justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route
          path="account_center"
          element={
            <ProtectedRoute>
              <AccountCenter />
            </ProtectedRoute>
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
            <ProtectedRoute>
              <ClassesList />
            </ProtectedRoute>
          }
        />
        <Route
          path="quiz_list"
          element={
            <ProtectedRoute>
              <QuizList />
            </ProtectedRoute>
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
              <ProtectedRoute>
                <SavedPosts />
              </ProtectedRoute>
            }
          />
          <Route
            path="user_posts"
            element={
              <ProtectedRoute>
                <UserPosts />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route
          path="quiz/:quizId"
          element={
            <ProtectedRoute>
              <Quiz />
            </ProtectedRoute>
          }
        >
          <Route path="" element={<Question />} />
        </Route>
        <Route
          path="class/:classId"
          element={
            <ProtectedRoute>
              <Class />
            </ProtectedRoute>
          }
        >
          <Route path="section/:sectionId" element={<ClassSection />} />
        </Route>
      </Routes>
    </main>
  );
}
