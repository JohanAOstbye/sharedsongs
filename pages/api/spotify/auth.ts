import { NextApiRequest, NextApiResponse } from 'next';

function generateState(length: number) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const scope = '';

const url = 'https://accounts.spotify.com/authorize';
const response_type = 'code';
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const redirect_uri = 'http://localhost:3000/spotify/callback';

// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    Authorization: 'Basic ' + btoa(client_id + ':' + client_secret),
  },
  form: {
    grant_type: 'client_credentials',
  },
  json: true,
};

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const state = generateState(16);

    res.status(200).json({});
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
