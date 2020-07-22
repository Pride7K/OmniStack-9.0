const express = require("express");
const { Router } = require("express");
const sessionController = require("./controllers/SessionController");
const spotController = require("./controllers/SpotController");
const dashboardController = require("./controllers/DashboardController");
const bookingController = require("./controllers/BookingController");
const multer = require("multer");
const uploadConfig = require("./config/uploader");

const routes = Router();
const upload = multer(uploadConfig);



// dizer que pode receber json e retornar o mesmo para o body

// req.query.parametro para get 

// req.params.parametro para put e delete

//#region Get

routes.get("/", (req, resp) => { return resp.json({ Hello: " World!" }) })
routes.get("/spots", spotController.index);
routes.get("/dashboard", dashboardController.show);

//#endregion


//#region Post

routes.post("/sessions", sessionController.store)
routes.post("/spots", upload.single("thumbnail"), spotController.store)
routes.post("/spots/:spot_id/bookings", bookingController.store)

//#endregion


module.exports = routes;
