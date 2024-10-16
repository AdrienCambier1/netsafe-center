import PersonalData from "./PersonalData";
import PasswordAndSecurity from "./PasswordAndSecurity";
import ProfilPicture from "./ProfilPicture";

export default function AccountOverview() {
  return (
    <>
      <ProfilPicture />
      <PersonalData />
      <PasswordAndSecurity />
    </>
  );
}
