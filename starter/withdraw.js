function Withdraw() {
  const ctx = React.useContext(UserContext);
  let newTotal = ctx.users[0].balance;
  const [show, setShow] = React.useState(true);
  const [withdraw, setWithdraw] = React.useState(0);
  const [totalState, setTotalState] = React.useState(newTotal);
  const [validTransaction, setValidTransaction] = React.useState(false);

  const handleChange = (event) => {
    if (Number(event.target.value) > totalState) {
      return setValidTransaction(false);
    } else {
      setValidTransaction(true);
    }
    setWithdraw(Number(event.target.value));
    console.log(withdraw);
  };

  function clearForm() {
    return setShow(true);
  }
  const handleSubmit = (event) => {
    let withdrawTotal = totalState - withdraw;
    setTotalState(withdrawTotal);
    setValidTransaction(false);
    setShow(false);
    ctx.users[0].balance = withdrawTotal;

    event.preventDefault();
  };

  return (
    <Card
      bgcolor="danger"
      header="Withdraw"
      text={"Balance: $" + ctx.users[0].balance}
      body={
        show ? (
          <>
            Withdraw Amount
            <br />
            <input
              type="number"
              className="form-control"
              id="withdraw-amount"
              placeholder="withdraw Amount"
              onChange={handleChange}
              // onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            {/* onClick={handleCreate} put in button  */}
            <button
              type="submit"
              className="btn btn-light"
              disabled={!validTransaction}
              onClick={handleSubmit}
            >
              Withdraw
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Withdraw more
            </button>
          </>
        )
      }
    />
  );
}
