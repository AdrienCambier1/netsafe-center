import PersonalData from "./PersonalData";
import PasswordAndSecurity from "./PasswordAndSecurity";
import UserPosts from "./UserPosts";

export default function AccountOverview() {
  return (
    <>
      <PersonalData />
      <PasswordAndSecurity />
      <UserPosts />
    </>
  );
}
