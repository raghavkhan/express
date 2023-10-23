const logger = (req, res, next) => {
  console.log(`------------------------`);
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(`nothing will we printed after this , url: ${url}`);
  console.log(`I am the 1 one`);
  next();
  console.log(`I am the 3 one`);
  console.log(method, url, time);
  console.log(req.query);
  console.log(req.user);
};

module.exports = logger;
