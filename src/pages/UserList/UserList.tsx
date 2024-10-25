import { useEffect, useState } from 'react';
import './UserList.scss';

const UserList = () => {
    const [usersWithColors, setUsersWithColors] = useState([]);

    useEffect(() => {
      async function fetchUsersWithColors() {
        try {
          const [usersResponse, colorsResponse] = await Promise.all([
            fetch('http://localhost:3001/users'),
            fetch('http://localhost:3001/colors')
          ]);

          if (!usersResponse.ok || !colorsResponse.ok) {
            throw new Error('Failed to fetch data');
          }

          const users = await usersResponse.json();
          const colors = await colorsResponse.json();

          const usersWithColors = users.map(user => ({
            ...user,
            color: colors[Math.floor(Math.random() * colors.length)].color
          }));

          setUsersWithColors(usersWithColors);
        } catch (error) {
          console.error('Error:', error);
        } finally {
          console.log('Process completed');
        }
      }

      fetchUsersWithColors();
    }, []); // Az üres tömb azt jelzi, hogy csak egyszer fusson le

    return (
      <div>
        <h1>Felhasználók</h1>
        <ul>
          {usersWithColors.map(user => (
            <li key={user.id} >
              <span className="user-marker" style={{ backgroundColor: user.color }}></span>{user.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }

export default UserList;