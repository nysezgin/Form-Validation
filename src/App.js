import "./reset.css"
import "./App.css";
import Intro from "./Intro";
import SignUpForm from "./SignUpForm";

function App() {
  return (
    <article className="App">
      <Intro />
      <p className="payment-info">
        <b>Try it free 7 days</b> then $20/mo. thereafter
      </p>
      <SignUpForm />
    </article>
  );
}

export default App;
