import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Widgets from "./components/Widgets/Widgets";
import Login from "./components/Login/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{user}, dispatch] = useStateValue()
  return (
    <div className="app">
      {/* Header */}
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          {/* App body */}
          <div className="app__body">
            <Sidebar />

            <Feed />
            {/* Widgets */}
            <Widgets />
          </div>
          </>
      )}
    </div>
  );
}

export default App;
