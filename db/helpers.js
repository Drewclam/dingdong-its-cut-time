var model = require('./model.js');

var addUserStylist = function(type, name, password, billingaddress, phonenumber, email, site_url, gender, image_url, callback) {
  var sql = "INSERT INTO users_stylists (type, name, password, billingaddress, phonenumber, email, site_url, gender, image_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
  model.con.query(sql, [type, name, password, billingaddress, phonenumber, email, site_url, gender, image_url],function (err, result) {
    if (err) throw err;
    callback(result);
  });
}

var getUser = function(userId, callback) {
  model.con.query('SELECT * FROM `users_stylists` WHERE `id` = ?', [userId], function (error, results, fields) {
    callback(results);
  });
}

// stylists are saved in database with type 0
var getAllStylists = function(callback) {
  model.con.query('SELECT * FROM `users_stylists` WHERE `type` = 0', function(error, results, fields) {
    callback(results);
  });
}

var addLocation = function (latitude, longitude, id, callback) {
  var sql = 'UPDATE users_stylists SET latitude = ?, longitude = ? WHERE id = ?'
  model.con.query(sql, [latitude, longitude, id],function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    callback();
  });
}

var calculateDistance = function distance(lat1, lon1, lat2, lon2, unit) {
  var radlat1 = Math.PI * lat1/180
  var radlat2 = Math.PI * lat2/180
  var theta = lon1-lon2
  var radtheta = Math.PI * theta/180
  var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  dist = Math.acos(dist)
  dist = dist * 180/Math.PI
  dist = dist * 60 * 1.1515
  if (unit=="K") { dist = dist * 1.609344 }
  if (unit=="N") { dist = dist * 0.8684 }
  return dist
}

var addToBookings = function(userId, stylistId, isConfirmed, time, location, callback) {
  var sql = "INSERT INTO bookings (id_users, id_stylists, isconfirmed, time, location) VALUES (?, ?, ?, ?, ?)";
  model.con.query(sql, [userId, stylistId, isConfirmed, time, location],function (err, result) {
    if (err) throw err;
    callback(result);
  });
}

var getStylistBookings = function(stylistId, callback) {
  model.con.query('SELECT * FROM `bookings` WHERE `id_stylists` = ?', [stylistId], function (error, results, fields) {
    callback(results);
  });
}

module.exports.addLocation = addLocation;
module.exports.addUserStylist = addUserStylist;
module.exports.getUser = getUser;
module.exports.getAllStylists = getAllStylists;
module.exports.calculateDistance = calculateDistance;
module.exports.addToBookings = addToBookings;
module.exports.getStylistBookings = getStylistBookings;

