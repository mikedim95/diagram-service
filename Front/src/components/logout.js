import { GoogleLogout } from "react-google-login";
const clientId =
  "1057309650255-fvlj1t8pta17upg5kpgfmfbrbtnscnal.apps.googleusercontent.com";
const onSuccess = () => {
  console.log("SUCCESSFULL LOGOUT!");
};

function Logout() {
  return (
    <div id="signInButton">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}
export default Logout;
