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
        modelo:destino.brand,
        transferType:destino.transferType,
        calle:destino.street,
        numeroInterior:destino.numberInterior,
        numeroExterior:destino.outdoorNumber,
        colonia:destino.colonies,
        cp:destino.cp,
        tipoSeguro:destino.insuranceType,
        compania:destino.company,
        numeroPoliza:destino.safeNumber,
        yearModel:destino.yearModel,
        peso:destino.weight,
        fotoUnidad:destino.photoUnit,
        urlMapa:destino.urlMaps,
        high:destino.high,
        wide:destino.wide,
        long:destino.long,
        destinityStreet:destino.destinityStreet,
        destinityOutdoorNumber:destino.destinityOutdoorNumber,
        destinityNumberInterior:destino.destinityNumberInterior,
        destinityColonies:destino.destinityColonies,
        destinityCp:destino.destinityCp,
        
        unitTypeName:destino.unitTypeName,
        transferTypeName:destino.transferTypeName,

 
        



/*[{
 
        "": "volcan la malinche ",
        "": "36",
        "": "",
        "": "villas del volcan",
        "": "56700",
        "": "MIGUEL HIDALGO",
        "": "TLALMANALCO",
        "": "Camión 3 ejes",
        "": "Tractos y Chasis cabina a partir de 274 en adelante Kms"
    }
]

            {
                 "calle": "calle uno",
                "numeroInterior": "numeroInterior uno",
                "numeroExterior": "numeroExterior uno",
                "colonia": "colonia uno",
                "cp": "cp uno",
                "tipoSeguro": "tipoSeguro 01",
                "compania": "compania01",
                "numeroPoliza": "numeroPoliza01",
                "modelo": "modelo01",
                "peso": "peso01",
                "fotoUnidad": "fotoUnidad01",
                "urlMapa": "urlMapa01"
            } 

*/


      }));
    }
  
 
    next();
  }
  
  module.exports = adaptData;