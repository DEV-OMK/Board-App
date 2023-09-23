import "./index.css";

const ProfileCard = (props) => {
  const { profileData, setAddNewProfile } = props;
  const { name, email, phone, instagram, youtube } = profileData;
  const renderEmptyProfile = () => (
    <div className="empty-profile-card-container">
      <div
        onClick={() => {
          setAddNewProfile(true);
        }}
      >
        <img
          className="empty-profile-image"
          alt="emptyProfile"
          src="https://res.cloudinary.com/ddaimmqrr/image/upload/v1695289699/Board-app/Controls_b4w0vp.png"
        />
      </div>
      <p>Add Profile</p>
    </div>
  );

  const renderProfileCard = () => (
    <div className="profile-card-container">
      <h1>{name}</h1>
      <div>
        <section>
          <button type="button" className="profile-button profile-button-phone">
            <img
              src="https://res.cloudinary.com/ddaimmqrr/image/upload/v1695298066/Board-app/svgviewer-output_1_tjc8dx.png"
              alt="phone"
            />
          </button>
          <p className="profile-info">{phone}</p>
        </section>
        {instagram !== "" && (
          <section>
            <button
              type="button"
              className="profile-button profile-button-instagram"
            >
              <img
                src="https://res.cloudinary.com/ddaimmqrr/image/upload/v1695298004/Board-app/logo-instagram_1_fd9q0r.png"
                alt="instagram"
              />
            </button>
            <p className="profile-info">{instagram}</p>
          </section>
        )}
        <section>
          <button type="button" className="profile-button profile-button-email">
            <img
              src="https://res.cloudinary.com/ddaimmqrr/image/upload/v1695298239/Board-app/Mail_keubwt.png"
              alt="email"
            />
          </button>
          <p className="profile-info">{email}</p>
        </section>
        {youtube !== "" && (
          <section>
            <button
              type="button"
              className="profile-button profile-button-youtube"
            >
              <img
                src="https://res.cloudinary.com/ddaimmqrr/image/upload/v1695298624/Board-app/logo-twitter_1_locblx.png"
                alt="youtube"
              />
            </button>
            <p className="profile-info">{youtube}</p>
          </section>
        )}
      </div>
    </div>
  );

  if (name === "") {
    return renderEmptyProfile();
  }
  return renderProfileCard();
};

export default ProfileCard;
