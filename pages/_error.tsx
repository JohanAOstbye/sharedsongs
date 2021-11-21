import Error from 'next/error';

export async function getServerSideProps() {
  const res: Response = await fetch(
    'https://api.github.com/repos/vercel/next.js'
  );
  const errorCode = res.ok ? false : res.status;
  const json = await res.json();

  return {
    props: { errorCode, stars: json },
  };
}

export default function Page({ errorCode, stars }) {
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <div>
      Next stars: {stars.stargazers_count ? stars.stargazers_count : null}
    </div>
  );
}
