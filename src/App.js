// import logo from "./logo.svg";
import AnotherUserParticipation from "./AnotherUserParticipation";
import "./App.css";
import PollDisplay from "./PollDisplay";
import UserParticipation from "./UserParticipation";

function App() {
  return (
    <>
      <h1>Welcome to Polling Portal</h1>
      {/* <PollDisplay /> */}
      <UserParticipation />
      <AnotherUserParticipation />
    </>
  );
}

export default App;
