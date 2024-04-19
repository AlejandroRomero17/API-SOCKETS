import Data from '../models/data.model.js';

// Objeto que contiene métodos para interactuar con la base de datos de datos
const DataDAO = {};

// Método asíncrono para obtener todos los datos
DataDAO.getAll = async () => {
    // Buscar todos los datos en la base de datos
    const datas = await Data.find();
    // Devolver los datos encontrados
    return datas;
};

// Método asíncrono para obtener datos por su id
DataDAO.getOne = async (id) => {
    // Buscar datos por su id en la base de datos
    const data = await Data.findOne({ id });
    // Devolver los datos encontrados
    return data;
};

// Método asíncrono para insertar datos en la base de datos
DataDAO.insertData = async (data) => {
    // Crear una nueva instancia de Data con los datos proporcionados
    const newData = new Data(data);
    // Guardar los nuevos datos en la base de datos
    await newData.save();
    // Devolver true para indicar que la inserción fue exitosa
    return true;
};

// Método asíncrono para actualizar datos en la base de datos
DataDAO.updateData = async (id, data) => {
    // Buscar y actualizar datos por su id en la base de datos
    const updatedData = await Data.findOneAndUpdate({ id }, data, { new: true });
    // Devolver true si los datos fueron actualizados correctamente, de lo contrario, false
    return updatedData !== null;
};

// Método asíncrono para eliminar datos de la base de datos
DataDAO.deleteData = async (id) => {
    // Buscar y eliminar datos por su id de la base de datos
    const deletedData = await Data.findOneAndDelete({ id });
    // Devolver true si los datos fueron eliminados correctamente, de lo contrario, false
    return deletedData !== null;
};

// Exportar el objeto DataDAO para ser utilizado en otros archivos
export default DataDAO;
