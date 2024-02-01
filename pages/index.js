// pages/index.js
import { useEffect, useState } from 'react';
import { auth } from '../firebaseConfig';
import Link from 'next/link';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <p>User: {user.email}</p>
        </div>
      ) : (
        <div>
          <Link href="/login">
            <button>Login</button>
          </Link>
          <Link href="/register">
            <button>Register</button>
          </Link>
          <p>Please log in or register to get started.</p>
        </div>
      )}
    </div>
  );
}
