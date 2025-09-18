export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      padding: '20px'
    }>
      <h1 style={{fontSize: '4rem', margin: '0 0 20px 0'}}>404</h1>
      <h2 style={{fontSize: '2rem', margin: '0 0 20px 0'}}>Page Not Found</h2>
      <p>The page you're looking for doesn't exist or has been moved.</p>
    </div>
  );
