import logo from './logo.svg';
import './App.css';
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

// function App({signOut, user}) {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h2> Hello React app with AWS test</h2>
//         {/* {user ? (
//           <>
//             <h3>私は権限を持っています:{user.username}</h3>
//             <button onClick={signOut}>サインアウト</button>
//           </>
//         ) : (
//           <h3>権限がありませんa</h3>
//         )} */}
//       </header>
//     </div>
//   );
// }

// export default withAuthenticator(App);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2> Hello React app with AWS tests</h2>
      </header>
    </div>
  );
}

export default App;
