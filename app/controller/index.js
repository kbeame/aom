module.exports = function(app) {
  require('./about_controller')(app);
  require('./book_now_controller')(app);
  require('./home_controller')(app);
  require('./giftcard_controller')(app);
  require('./services_controller')(app);
};
