import React, { useState } from "react";
import "../landingstyles/landingpage.css";

const Connected: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError("");
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSuccess(true);
    setError("");
    setEmail("");
  };

  return (
    <div className="subscription-container">
      <div className="connected">
        <div className="connect">Stay Connected</div>
        <div className="connect2">
          Join our mailing list to receive information about our work and new
          learning opportunities.
        </div>
      </div>
      <form onSubmit={handleSubmit} className="subscription-form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          required
          className="subform"
        />
        <button type="submit" className="subscribebtn">
          Subscribe
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {success && <p className="success-message">Thank you for subscribing!</p>}
    </div>
  );
};

export default Connected;
