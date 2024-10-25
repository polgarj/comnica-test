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

      console.log(usersWithColors);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      console.log('Process completed');
    }
  }