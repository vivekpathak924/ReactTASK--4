import { useEffect, useState } from "react";
import axios from "axios"; // Import Axios

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://dummyjson.com/users") // Use Axios for the GET request
      .then(response => {
        setUsers(response.data); // Axios response data is in response.data
      })
      .catch(error => {
        console.error("Axios error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>Dummy Data</h1>
          <table border={1}>
            <thead>
              <tr>
                <th>Sno</th>
                <th>Profile Pic</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>email</th>
                <th>Username</th>
                <th>Phone</th>
                <th>IP</th>
                <th>University</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.image}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.gender}</td>
                  <td>{user.username}</td>
                  <td>{user.phone}</td>
                  <td>{user.ip}</td>
                  <td>{user.university}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default App;
