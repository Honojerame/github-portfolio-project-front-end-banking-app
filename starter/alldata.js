function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <>
  
      <Card
        bgcolor="dark"
        header="All data"
        text={`name: ${ctx.users[1].name} 
               email: ${ctx.users[1].email} 
               password: ${ctx.users[1].password} 
               balance: ${ctx.users[1].balance}`}
      />
    </>
  );
}
