function Login() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);

  function validated(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleSubmit() {
    console.log(email, password);
    if (!validated(email, "email")) return;
    if (!validated(password, "password")) return;
    if (ctx.users[1].email === email && ctx.users[1].password === password) {
      return setShow(false);
    }
    return alert("opps! email or password is incorrect");
  }

  return (
    <Card
      bgcolor="warning"
      header="Login"
      status={status}
      body={
        show ? (
          <>
            Email
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.currentTarget.value)}
              // onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            Password
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.currentTarget.value)}
              // onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            {/* onClick={handleCreate} put in button  */}
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleSubmit}
            >
              Login
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <a className="btn btn-light" href="#/balance/">
              Check your balance!
            </a>
          </>
        )
      }
    />
  );
}
