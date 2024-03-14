const Home = () => {
  return (
    <div>
      <a href="/login">Login</a>
      <hr></hr>
      <h1>Home Page</h1>
      <div>
        <a href="/destinations" style={{paddingRight: '10px'}}>Destinations</a>
        <a href="/feed" style={{paddingRight: '10px'}}>Feed</a>
        <a href="/account">Account</a>
      </div>
    </div>
  );
}

export default Home;