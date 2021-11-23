// Firebase related
import { useRouter } from 'next/router';

// Components
import Error from '../../components/elements/Error';
import React, { useState } from 'react';
import FullPageLoader from '../../components/Layout/FullPageLoader';
import { spotifyUser } from '../../interfaces/user';
import { postUser } from '../../lib/api/spotify';
import { useAuth } from '../../hooks/useAuth';

export default function Create() {
  const [user, loading, error] = useAuth();
  const router = useRouter();
  const [creatingUser, setCreatingUser] = useState(false);
  const [data, setData] = useState(null);

  async () => {
    setCreatingUser(true);
    const spotifyUser: spotifyUser = { uid: user.uid };
    const data = await postUser(spotifyUser);
    setData(data);
    // switch creating user to false after fetch is complete
    setCreatingUser(false);
  };

  if (loading || creatingUser) return <FullPageLoader />;
  else if (error || !data) return <Error msg={error} />;

  router.push('/');

  return <FullPageLoader />;
}
