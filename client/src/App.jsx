import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  const getUser = async () => {
    const apiURL = import.meta.env.VITE_APP_API_URL || '';
    const response = await fetch(`${apiURL}/user`);
    const user = await response.json();

    setData(user);
  };

  return (
    <div className="App">
      <button onClick={getUser}>Get User</button>

      {data && (
        <div>
          <div>
            <h4>{data.name}</h4>
            <p>{data.email}</p>
            <p>{data.age}</p>
            <p>{data.profession}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
