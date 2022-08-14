function Balance(){
  const ctx = React.useContext(UserContext);
  return (
    <>
    <Card
    bgcolor="dark"
    header="Balance"
    text={"Hello! Your account balance is $" + ctx.users[0].balance}
    />
    </>
  )
}
