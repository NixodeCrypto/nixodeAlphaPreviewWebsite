/** @jsxImportSource @emotion/react */
import Router from 'next/router';
import { useEffect } from 'react';
import { Layout } from '@/components';

const SignIn = () => {
  useEffect(() => {
    // check if user is already signed in
    const cookieList = document.cookie.split(';');
    for (let i = 0; i < cookieList.length; i += 1) {
      const keyValPair = cookieList[i].split('=');
      // includes used because whitespace is added to beginning of cookies
      if (keyValPair[0].includes('signed_in') && keyValPair[1] === 'true') {
        // push back to homepage when signed_in is true
        Router.push('/');
      }
    }
  }, []);

  return <Layout />;
};

export default SignIn;
