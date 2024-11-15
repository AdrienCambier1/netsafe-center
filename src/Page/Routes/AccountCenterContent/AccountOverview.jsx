import {
  ProfilPicture,
  PersonalData,
  PasswordAndSecurity,
  Appeareance,
} from "./";

export default function AccountOverview() {
  return (
    <>
      <ProfilPicture />
      <PersonalData />
      <PasswordAndSecurity />
      <Appeareance />
    </>
  );
}
