import { GoogleLogin } from "react-google-login";
const clientId =
  "1057309650255-fvlj1t8pta17upg5kpgfmfbrbtnscnal.apps.googleusercontent.com";
const onSuccess = (res) => {
  console.log("SUCCESSFULL LOGIN!", res.profileObj);
};
const onFailure = (res) => {
  console.log("SUCCESSFULL FAIL!", res);
};
function Login() {
  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}
export default Login;
