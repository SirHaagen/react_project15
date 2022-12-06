import React from "react";

export const FormCard = ({ access }) => {

  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [error, setError] = React.useState('');


  const handleEmail = e => setEmail(e.target.value);
  const handlePass = e => setPass(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "a@b.com" & pass === "123") {
      access("true")
      setError('');
    }
    else {
      access("false")
      setError("Error mensaje");
    }
    setEmail('');
    setPass('');
    e.target.reset();
  }

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <label>Email:</label>
        <input type="email" name="email" onChange={handleEmail} />
        <label>Password:</label>
        <input type="password" name="password" onChange={handlePass} />
        <button>Submit</button>
        <span>{error}</span>
      </form>
    </div>
  )

}