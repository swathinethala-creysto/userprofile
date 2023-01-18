import "./App.css";
import "./AppStyles.scss";
import UserForm from "./components/UserForm";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div className="appStyle">
      <div className="home_page">
        <div className="home_right">
          <UserForm />
        </div>
        <div className="home_left">
          <UserProfile />
        </div>
      </div>
    </div>
  );
}

export default App;
