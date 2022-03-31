exports.initialPage = (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Name: <input type="text" name="name">
  <button>Send Form</button>
  </form>
  `);
};

exports.treatPost = (req, res) => {
  res.send('aoba')
}
