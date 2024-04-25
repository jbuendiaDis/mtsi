// routes/quote01Routes.js
const express = require('express');
const router = express.Router();
const adaptData = require('../middlewares/dataAdapter');

const quote01Controller = require('../controllers/quote01Controller');
const { verifyToken } = require('../utils/verifyToken');
const formatResponse = require('../utils/formatResponse');


router.get('/quotes-01/all', verifyToken, formatResponse, quote01Controller.getSolicitudesSimples); //getSolicitudesSimples
router.get('/quotes-01/byclienteId/:clientId', verifyToken, formatResponse, quote01Controller.getSolicitudesByClienteId); //getSolicitudesByClienteId
router.get('/quotes-01/byUserId/:userId', verifyToken, formatResponse, quote01Controller.getSolicitudesByUserId); //getSolicitudesByUserId
router.get('/quotes01/:folio', verifyToken, formatResponse, quote01Controller.getQuoteDetailsByFolio); //getQuoteDetailsByFolio
router.get('/quoteHistory/:folio', verifyToken, formatResponse,  quote01Controller.getQuoteHistoryByFolio); //getQuoteHistoryByFolio
router.put('/quotes01/:id', verifyToken, formatResponse, quote01Controller.updateQuote01); //updateQuote01
router.delete('/quotes01/:id', verifyToken, formatResponse, quote01Controller.deleteQuote01); //deleteQuote01
router.put('/quotes01/cancel/:folio', verifyToken,formatResponse, quote01Controller.cancelQuote); //cancelQuote




router.post('/v2/solicitud/01', verifyToken, adaptData, formatResponse, quote01Controller.createSolicitud);  //createSolicitud

router.get('/v2/cotizacion/:folio', verifyToken, formatResponse, quote01Controller.getCotizacionByFolio); //getCotizacionByFolio
router.get('/v2/solicitud/detalle/:folio', verifyToken, formatResponse, quote01Controller.getSolicitudDetalleByFolio); //getSolicitudDetalleByFolio
router.get('/v2/solicitud/detallesimple/:folio', verifyToken, formatResponse, quote01Controller.getSolicitudDetallesimpleByFolio); //getSolicitudDetalleByFolio
router.post('/v1/solicitud/details/send', verifyToken, formatResponse, quote01Controller.sendSolicitudDetails); //sendSolicitudDetails

router.get('/v2/cotizacionhistorial/byclienteId/:clientId', verifyToken, formatResponse, quote01Controller.getSolicitudesHistorialByClienteId); //getSolicitudesHistorialByClienteId
router.put('/v2/actualizarendimiento', verifyToken, formatResponse, quote01Controller.actualizarUnidadIdEnSolicitudDetalle); //actualizarUnidadIdEnSolicitudDetalle

router.get('/v2/solicitud/detallecompleto/:folio', verifyToken, formatResponse, quote01Controller.getSolicitudDetalleCompletoByFolio);  //getSolicitudDetalleCompletoByFolio
router.get('/v2/solicitud/allbystatus/:status', verifyToken, formatResponse, quote01Controller.getAllByStatus); //getAllByStatus







module.exports = {
  quote01Routes: router,
};
