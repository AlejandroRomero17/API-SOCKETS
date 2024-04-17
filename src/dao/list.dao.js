import List from '../models/list.model.js';

// Objeto que contiene métodos para interactuar con la base de datos de listas
const ListDAO = {};

// Método asíncrono para obtener todas las listas
ListDAO.getAll = async () => {
    // Buscar todas las listas en la base de datos
    const lists = await List.find();
    // Devolver las listas encontradas
    return lists;
};

// Método asíncrono para obtener una lista por su código
ListDAO.getOne = async (code) => {
    // Buscar una lista por su código en la base de datos
    const list = await List.findOne({ code });
    // Devolver la lista encontrada
    return list;
};

// Método asíncrono para insertar una lista en la base de datos
ListDAO.insertList = async (listData) => {
    // Crear una nueva instancia de List con los datos proporcionados
    const newList = new List(listData);
    // Guardar la nueva lista en la base de datos
    await newList.save();
    // Devolver true para indicar que la inserción fue exitosa
    return true;
};

// Método asíncrono para actualizar una lista en la base de datos
ListDAO.updateList = async (code, listData) => {
    // Buscar y actualizar una lista por su código en la base de datos
    const updatedList = await List.findOneAndUpdate({ code }, listData, { new: true });
    // Devolver true si la lista fue actualizada correctamente, de lo contrario, false
    return updatedList !== null;
};

// Método asíncrono para eliminar una lista de la base de datos
ListDAO.deleteList = async (code) => {
    // Buscar y eliminar una lista por su código de la base de datos
    const deletedList = await List.findOneAndDelete({ code });
    // Devolver true si la lista fue eliminada correctamente, de lo contrario, false
    return deletedList !== null;
};

// Exportar el objeto ListDAO para ser utilizado en otros archivos
export default ListDAO;
