const mongoose = require('mongoose');

function getCurrentFormattedDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = ('0' + (now.getMonth() + 1)).slice(-2);
    const day = ('0' + now.getDate()).slice(-2);
    const hours = ('0' + now.getHours()).slice(-2);
    const minutes = ('0' + now.getMinutes()).slice(-2);
  
    return `${year}/${month}/${day} ${hours}:${minutes}`;
  }

const SolicitudDetalleSchema = new mongoose.Schema({
  solicitudId: {    type: mongoose.Schema.Types.ObjectId,     ref: 'Solicitudes',    required: true  },
  folio: {    type: Number, required: true },
  folioPrefix: {
    type: String 
  },
  localidadOrigenId: {type: String,required: true},
  localidadOrigenName: {type: String,required: true },
  localidadOrigenCodigo: { type: String,  },
  localidadOrigenTipoCobro: {type: String},
  localidadDestinoId: {type: String,required: true},
  localidadDestinoName: {type: String,required: true},
  localidadDestinoCodigo: {type: String,},
  localidadDestinoTipoCobro: {type: String,},      
  
  unidadId: {type: String,required: true},
  unidadMarca: {type: String,},
  unidadModelo: {type: String,},
  trasladoId: {type: String,required: true},
  trasladoTipo: {type: String,required: true},
  trasladoConcepto: {type: String,required: true},
  tipoViajeId: {type: String,required: true},
  tipoViajeName: {type: String,required: true},
  manual: {type: String },
  dimensiones: {type: String },

  createdAt: {type: String,default: getCurrentFormattedDate},
  updatedAt: {type: String,default: getCurrentFormattedDate},
  
  calle:{type: String,},
  numeroInterior:{type: String,},
  numeroExterior:{type: String,},
  colonia:{type: String,},
  cp:{type: String,},
  
  tipoSeguro: {type: String },
  compania: {type: String },
  numeroPoliza: {    type: String },
  modelo: {type: String },
  peso: {type: String },
  fotoUnidad: {type: String },
  urlMapa : {type: String },



  


        destinityStreet:{type: String },
        destinityOutdoorNumber:{type: String },
        destinityNumberInterior:{type: String },
        destinityColonies:{type: String },
        destinityCp:{type: String },
        clienteId:{type: String },
        clienteName:{type: String }
        ,
  socialReasonOrigin : { type: String },
  socialReasonDestinity : { type: String },
  notes : { type: String },

  

});

SolicitudDetalleSchema.pre('save', function(next) {
    this.updatedAt = getCurrentFormattedDate(); // Actualiza la fecha en el formato deseado antes de guardar
    next();
  });

const SolicitudDetalle = mongoose.model('SolicitudDetalle', SolicitudDetalleSchema);

module.exports = SolicitudDetalle;
