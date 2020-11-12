const server = require("./api/server");
const port = process.env.PORT || 9999;

server.listen(port, () => {
  console.log(`\n***_Server reporting for duty on port: ${port}._***\n`);
});
