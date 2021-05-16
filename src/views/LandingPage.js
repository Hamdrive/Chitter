import React, { useState } from "react";
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";

function LandingPage() {
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  return (
    <div>
      <img
        className="w-full h-screen"
        src="../images/chitter_landingbkg.jpg"
        alt=""
      />
      <button onClick={() => setLoginModalOpen(true)}>Login</button>
      <button onClick={() => setSignupModalOpen(true)}>Signup</button>
      <SignupModal
        modalOpen={signupModalOpen}
        close={() => setSignupModalOpen(false)}
      />
      <LoginModal
        modalOpen={loginModalOpen}
        close={() => setLoginModalOpen(false)}
      />
    </div>
  );
}

export default LandingPage;
