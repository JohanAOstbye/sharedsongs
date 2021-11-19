import Link from 'next/link';
import Layout from '../components/Layout';

const ProfilePage = () => {
  return (
    <Layout title='About | Next.js + TypeScript Example'>
      <h1>profile</h1>
      <p>username: {'no username'}</p>
      <p>
        <Link href='/'>
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  );
};

export default ProfilePage;
