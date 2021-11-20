import React from 'react';
import Button from '../components/elements/Button';
import Layout from '../components/Layout';
import FullPageLoader from '../components/Layout/FullPageLoader';

const Test = () => {
  return (
    <Layout>
      <div>
        <FullPageLoader />
      </div>
    </Layout>
  );
};

export default Test;

// testing boxshadows
// const Test = () => {
//   return (
//     <div className='flex flex-col items-center justify-between min-h-screen'>
//       <div></div>
//       <div className=' bg-surface text-on-surface px-4 py-2 opacity-50 shadow-box-sm'>
//         sm test
//       </div>
//       <div></div>
//       <div className=' bg-surface text-on-surface px-4 py-2 opacity-50 shadow-box-base'>
//         base test
//       </div>
//       <div></div>
//       <div></div>
//       <div className=' bg-surface text-on-surface px-4 py-2 opacity-50 shadow-box-lg'>
//         lg test
//       </div>
//       <div></div>
//       <div></div>
//       <div></div>
//       <div className=' bg-surface text-on-surface px-4 py-2 opacity-50 shadow-box-xl'>
//         xl test
//       </div>
//       <div></div>
//     </div>
//   );
// };
