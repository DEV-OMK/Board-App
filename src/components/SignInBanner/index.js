import "./index.css";

const SignInBanner = () => {
  return (
    <div className="sign-in-banner-container">
      <div className="sign-in-banner">
        <header>LOGO</header>
        <section>
          <h1 className="sign-in-banner-title">Board.</h1>
        </section>
        <footer>
          <img
            src="https://res.cloudinary.com/ddaimmqrr/image/upload/v1695204041/Board-app/Vector_qbhtlh.png"
            alt="githubIcon"
          />
          <img
            src="https://res.cloudinary.com/ddaimmqrr/image/upload/v1695204041/Board-app/Vector_1_kcqcia.png"
            alt="twitterIcon"
          />
          <img
            src="https://res.cloudinary.com/ddaimmqrr/image/upload/v1695204041/Board-app/carbon_logo-linkedin_whnaoa.png"
            alt="linkedInIcon"
          />
          <img
            src="https://res.cloudinary.com/ddaimmqrr/image/upload/v1695204041/Board-app/carbon_logo-discord_mjt52l.png"
            alt="discordIcon"
          />
        </footer>
      </div>
    </div>
  );
};

export default SignInBanner;
