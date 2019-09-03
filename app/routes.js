const doctorControler = require("./controllers/doctor.ctrl");
const rdvControler = require("./controllers/rdv.ctrl");
const passport = require("passport");
const express = require("express");
const routes = express.Router();

//auth routes
routes.get("/auth/facebook", passport.authenticate("facebook"));

routes.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    failureRedirect: "http://localhost:3000/login"
  }),
  function(req, res) {
    // Successful authentication, redirect home.
    var token = req.user._id;
    console.log("token", token);
    // if (process.env.ENV === 'production') {
    //   res.redirect("/login?token=" + token);
    // }
    // else {

    // }
    res.redirect("http://localhost:3000/login?token=" + token);
  }
);

//Doctors
routes.route("/adddoc").post(doctorControler.addDoc);

// todoRoutes

routes.route("/doctor/:id").get(doctorControler.getDoc);
routes.route("/specialty/:specialty").get(doctorControler.getBySpec);
routes.route("/ville/:ville").get(doctorControler.getByVille);
routes.route("/docs").get(doctorControler.getDocs);

//rdvs
routes.route("/setrdv").post(rdvControler.setRdv);

routes.route("/getrdv").get(rdvControler.getAllRdv);

routes.route("/getrdvhours").get(rdvControler.getRdvHours);

module.exports = routes;
