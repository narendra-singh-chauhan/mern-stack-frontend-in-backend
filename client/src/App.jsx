import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  const getUser = async () => {
    const response = await fetch("https://react-node-vercel-2qk7p0qgg-narendrasinghks2019-gmailcom.vercel.app/user");
    const user = await response.json();
    // https://react-node-vercel-2qk7p0qgg-narendrasinghks2019-gmailcom.vercel.app/

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
