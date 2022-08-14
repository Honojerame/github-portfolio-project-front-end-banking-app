function Deposit() {
  const ctx = React.useContext(UserContext);
  const [show, setShow] = React.useState(true);
  const [deposit, setDeposit] = React.useState(0);
  const [totalState, setTotalState] = React.useState(100);
  const [validTransaction, setValidTransaction] = React.useState(false);

  const handleChange = (event) => {
    if (Number(event.target.value) <= 0) {
      return setValidTransaction(false);
    } else {
      setValidTransaction(true);
    }
    setDeposit(Number(event.target.value));
    console.log(deposit);
  };

  function clearForm() {
    setShow(true);
  }

  const handleSubmit = (event) => {
    let newTotal = totalState + deposit;
    setTotalState(newTotal);
    setValidTransaction(false);
    setShow(false);
    ctx.users[0].balance = newTotal;

    event.preventDefault();
  };

  return (
    <Card
      bgcolor="success"
      header="Deposit"
      text={"Balance: $" + ctx.users[0].balance}
      body={
        show ? (
          <>
            Deposit Amount
            <br />
            <input
              type="number"
              className="form-control"
              id="deposit-amount"
              placeholder="Deposit Amount"
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
              Deposit
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Add Deposit
            </button>
          </>
        )
      }
    />
  );
}
