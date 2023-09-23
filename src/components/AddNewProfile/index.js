import { useState } from "react";
import "./index.css";

const AddNewProfile = (props) => {
  const [showBasic, setShowBasic] = useState(true);
  const [showSocial, setShowSocial] = useState(false);
  const [inputName, setInputName] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputInstagram, setInputInstagram] = useState("");
  const [inputYoutube, setInputYoutube] = useState("");

  const {
    setName,
    setEmail,
    setPhone,
    setInstagram,
    setYoutube,
    setAddNewProfile,
  } = props;

  const basicClass = showBasic
    ? "new-profile-tab new-profile-active-tab"
    : "new-profile-tab";
  const socialClass = showSocial
    ? "new-profile-tab new-profile-active-tab"
    : "new-profile-tab";

  const renderBasicForm = () => (
    <form
      className="basic-form"
      onSubmit={(event) => {
        event.preventDefault();
        if (inputName !== "" && inputEmail !== "" && inputPhone !== "") {
          setShowBasic(false);
          setShowSocial(true);
        }
      }}
    >
      <label htmlFor="inputName">Enter Name*</label>
      <input
        type="text"
        placeholder="Eg. John Doe"
        id="inputName"
        value={inputName}
        onChange={(e) => {
          setInputName(e.target.value);
        }}
      />
      <label htmlFor="inputEmail">Enter Email*</label>
      <input
        type="text"
        placeholder="Eg. John@xyz.com"
        id="inputEmail"
        value={inputEmail}
        onChange={(e) => {
          setInputEmail(e.target.value);
        }}
      />
      <label htmlFor="inputPhone">Enter Phone*</label>
      <input
        type="text"
        placeholder="Eg.  9123456789"
        id="inputPhone"
        value={inputPhone}
        onChange={(e) => {
          setInputPhone(e.target.value);
        }}
      />
      <button type="submit" className="blue-button">
        Next
      </button>
    </form>
  );

  const renderSocialForm = () => (
    <form
      className="basic-form"
      onSubmit={(event) => {
        event.preventDefault();
        setName(inputName);
        setEmail(inputEmail);
        setPhone(inputPhone);
        setInstagram(inputInstagram);
        setYoutube(inputYoutube);
        setShowBasic(true);
        setShowSocial(false);
        setInputName("");
        setInputEmail("");
        setInputPhone("");
        setInputInstagram("");
        setInputYoutube("");
        setAddNewProfile(false);
      }}
    >
      <label htmlFor="inputInstagram">
        Instagram Link <span>(optional)</span>
      </label>
      <input
        type="text"
        placeholder="Eg. ..instagram.com/username"
        id="inputInstagram"
        value={inputInstagram}
        onChange={(e) => {
          setInputInstagram(e.target.value);
        }}
      />
      <label htmlFor="inputYoutube">
        Youtube Link <span>(optional)</span>
      </label>
      <input
        type="text"
        placeholder="Eg. ..youtube/username"
        id="inputYoutube"
        value={inputYoutube}
        onChange={(e) => {
          setInputYoutube(e.target.value);
        }}
      />
      <section>
        <button
          type="button"
          className="white-button"
          onClick={() => {
            setShowBasic(true);
            setShowSocial(false);
          }}
        >
          Back
        </button>
        <button type="submit" className="blue-button">
          Done
        </button>
      </section>
    </form>
  );

  return (
    <div className="add-new-profile-container">
      <div className="add-new-profile">
        <header>
          <h1>Add New Profile</h1>
          <img
            src="https://res.cloudinary.com/ddaimmqrr/image/upload/v1695314069/Board-app/Icon_vdosu1.png"
            alt="cross"
            className="cross-image"
            onClick={() => {
              setAddNewProfile(false);
            }}
          />
        </header>
        <section>
          <p className={basicClass}>Basic</p>
          <p className={socialClass}>Social</p>
        </section>
        {showBasic && renderBasicForm()}
        {showSocial && renderSocialForm()}
      </div>
    </div>
  );
};

export default AddNewProfile;
