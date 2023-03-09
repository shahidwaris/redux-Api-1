import { useDispatch, useSelector } from "react-redux";
import { updateName, updateEmail } from "./actions";

function App() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);

  const handleNameChange = (e) => {
    dispatch(updateName(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(updateEmail(e.target.value));
  };

  return (
    <div>
      <h1>User Information</h1>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <p class="output">
        Current values in store:
        <p>Name - {name}</p>
        <p> Email - {email}</p>
      </p>
    </div>
  );
}

export default App;
