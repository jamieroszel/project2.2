///////////////////////////////
// Import Router
////////////////////////////////
const router = require("express").Router()
const AuthRouter = require("./auth")
const HopesRouter = require("./hopes")
const DreamRouter = require("./dreams")

///////////////////////////////
// Router Specific Middleware
////////////////////////////////
router.use("/auth", AuthRouter)
router.use("/hopes", HopesRouter)
router.use("/dreams", DreamRouter)

///////////////////////////////
// Router Routes
////////////////////////////////
// Home Router
router.get("/", (req, res) => {
    res.render("home")
})

// Dashboard Router
router.get("/dashboard", (req, res) => {
    res.render("dashboard")
})

// About Router
router.get("/about", (req, res) => {
    res.render("about")
})

// 404 Router
router.use((req, res) => {
    res.status(404).render('404')
})

///////////////////////////////
// Export Router
////////////////////////////////
module.exports = router