const app = require('./server/app');
const port = process.env.PORT || 5000;

(async () => {
  try {
    await app.listen(port);
    console.log(`Server started on port ${port}`);
  } catch(err) {
    console.log(err);
  }
})();
