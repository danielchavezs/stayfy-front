const { Router } = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { booksRouter } = require("./booksRoutes");
const { genresRouter } = require("./genresRoutes");
const { mercadopagoRouter } = require("./mp-router");
const { orderRouter } = require("./orderRoutes");
const { userRoutes } = require("./userRoutes");


const router = Router();

router.use(morgan("dev"));
router.use(cors());

router.use('/user', userRoutes)
router.use('/books', booksRouter);
router.use('/genres', genresRouter);
router.use('/checkout/mercado-pago', mercadopagoRouter)
router.use('/orders', orderRouter)

module.exports = router;