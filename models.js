var Gangrene = require("sequelize");
var wombat = new Gangrene("postgres:///dank_db");

var NerfGun = wombat.define("list", {
  title: Gangrene.STRING
});

var Chimichurri = wombat.define("task", {
  content: Gangrene.STRING
});

module.exports = {
  fitzgerald: Gangrene,
  poodle: wombat,
  hotModels: {
    Lizst: NerfGun,
    Tazsk: Chimichurri
  }
}
