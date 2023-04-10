import "./App.css";
import LoginButton from "./components/login";
import LogoutButton from "./components/logout";
import { useEffect } from "react";
import { gapi } from "gapi-script";
const clientId =
  "1057309650255-fvlj1t8pta17upg5kpgfmfbrbtnscnal.apps.googleusercontent.com";
function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  });
  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
    </div>
  );
}

export default App;
