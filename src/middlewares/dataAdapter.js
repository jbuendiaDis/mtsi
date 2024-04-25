// middlewares/dataAdapter.js
function adaptData(req, res, next) {
    console.log(req.body.destinos);
    if (req.body.destinos) {
      req.body.destinos = req.body.destinos.map(destino => ({


        localidadOrigenId:destino.localidadOrigenId,
        localidadDestinoId:destino.localidadDestinoId,
        localidadOrigenName:destino.originCityName,
        localidadDestinoName:destino.destinationCityName,
        tipoUnidad:destino.model,

        tipoViaje:destino.tipoViaje,
        tipoTraslado:destino.tipoTraslado,
        
        manual:destino.manual,
        dimensiones:destino.dimensiones,
        //unitType:destino.unitType,
        originState:destino.originState,

        originCity:destino.originCity,
        destinationState:destino.destinationState,
        destinationCity:destino.destinationCity,
        modelo:destino.yearModel,
        transferType:destino.transferType,
        
        tipoSeguro:destino.insuranceType,
        compania:destino.company,
        numeroPoliza:destino.safeNumber,
        moneyvalue:destino.moneyValue,
        yearModel:destino.yearModel,
        peso:destino.weight,
        fotoUnidad:destino.photoUnit,
        urlMapa:destino.urlMaps,
        high:destino.high,
        wide:destino.wide,
        long:destino.long,


        calle:destino.street,
        numeroInterior:destino.numberInterior,
        numeroExterior:destino.outdoorNumber,
        colonia:destino.colonies,
        cp:destino.cp,


        destinityStreet:destino.destinityStreet,
        destinityOutdoorNumber:destino.destinityOutdoorNumber,
        destinityNumberInterior:destino.destinityNumberInterior,
        destinityColonies:destino.destinityColonies,
        destinityCp:destino.destinityCp,
        
        unitTypeName:destino.unitTypeName,
        transferTypeName:destino.transferTypeName,
        socialReasonOrigin:destino.socialReasonOrigin,
        socialReasonDestinity:destino.socialReasonDestinity,
        notes:destino.notes,


      }));
    }
  
 
    next();
  }
  
  module.exports = adaptData;