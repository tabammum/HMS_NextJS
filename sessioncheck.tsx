import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function sessioncheck () {
  const router = useRouter();

  useEffect(() => {
    const session = sessionStorage.getItem('email');
    if (!session) {
      router.push('Accountants/login');
    }
  }, []);

  return null;
};
