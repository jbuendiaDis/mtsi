const Catalogo = require('../models/catalog'); // Asumiendo que el modelo se llama 'catalogo'

const getCatalogoById = async (catalogoId) => {
  try {
    if (!catalogoId) {
      return null;
    }

    const catalogo = await Catalogo.findById(catalogoId);

    if (!catalogo) {
      return null;
    }

    // Añade elementos fijos al objeto catalogo
    const resultado = {
      ...catalogo.toObject(), // Convierte el documento de Mongoose a un objeto JavaScript si es necesario
      elementoFijo1: 'ValorFijo1',  // Ejemplo de un valor fijo
      elementoFijo2: 'ValorFijo2'  // Ejemplo de otro valor fijo
    };

    return resultado;
  } catch (error) {
    throw error;
  }
};

module.exports = getCatalogoById;
