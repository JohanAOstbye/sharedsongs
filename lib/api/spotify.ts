import { spotifyUser } from '../../interfaces/user';

const postUser = async (user: spotifyUser) => {
  const response = await fetch('/api/person', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  return await response.json();
};

export { postUser };
