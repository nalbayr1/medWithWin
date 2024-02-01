import { AuthProvider } from '../hooks/useAuth'; // adjust the path if necessary

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
