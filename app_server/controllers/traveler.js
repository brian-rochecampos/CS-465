const fs = require('fs');
const path = require('path');

const tripsFilePath = path.join(__dirname, '../data/trips.json');

const getTrips = (callback) => {
  fs.readFile(tripsFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return callback(err, null);
    }
    callback(null, JSON.parse(data));
  });
};

const getHomePage = (req, res) => {
  getTrips((err, trips) => {
    if (err) {
      res.status(500).send('Error reading trips data');
      return;
    }
    res.render('index', {
      title: 'Travlr Getaways',
      trips: trips,
      routeName: 'home'
    });
  });
};

const getStaticPage = (pageTitle) => {
  return (req, res) => {
    res.render(pageTitle, {
      title: `${pageTitle} Page`,
      routeName: pageTitle
    });
  };
};

module.exports = {
  getHomePage,
  getTravelPage: getStaticPage('travel'),
  getRoomsPage: getStaticPage('rooms'),
  getMealsPage: getStaticPage('meals'),
  getNewsPage: getStaticPage('news'),
  getAboutPage: getStaticPage('about'),
  getContactPage: getStaticPage('contact')
};
