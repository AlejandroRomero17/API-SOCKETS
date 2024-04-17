import ListDAO from '../dao/list.dao.js';

// Función asíncrona para obtener todas las listas
export const getAll = async (req, res) => {
    try {
        // Llamada a ListDAO para obtener todas las listas
        const lists = await ListDAO.getAll();
        // Devolver las listas en formato JSON
        res.json(lists);
    } catch (error) {
        // Manejar errores y devolver un mensaje de error al cliente
        res.status(500).json({ status: "Server unavailable", message: error.message });
    }
};

// Función asíncrona para obtener una lista por su código
export const getOne = async (req, res) => {
    try {
        // Llamada a ListDAO para obtener una lista por su código
        const list = await ListDAO.getOne(req.params.code);
        // Comprobar si la lista existe
        if (list !== null) {
            // Devolver la lista en formato JSON
            res.json(list);
        } else {
            // Devolver un mensaje de error si la lista no se encuentra
            res.status(404).json({ status: "List not found" });
        }
    } catch (error) {
        // Manejar errores y devolver un mensaje de error al cliente
        res.status(500).json({ status: "Server unavailable", message: error.message });
    }
};

// Función asíncrona para insertar una lista
export const insertList = async (req, res) => {
    try {
        // Llamada a ListDAO para insertar una lista
        const result = await ListDAO.insertList(req.body);
        // Comprobar si la inserción fue exitosa
        if (result) {
            // Devolver el resultado en formato JSON
            res.json(result);
        } else {
            // Devolver un mensaje de error si la inserción falló
            res.status(500).json({ status: "Server unavailable" });
        }
    } catch (error) {
        // Manejar errores y devolver un mensaje de error al cliente
        res.status(500).json({ status: "Server unavailable", message: error.message });
    }
};

// Función asíncrona para actualizar una lista
export const updateList = async (req, res) => {
    try {
        // Llamada a ListDAO para actualizar una lista
        const updatedList = await ListDAO.updateList(req.params.code, req.body);
        // Comprobar si la actualización fue exitosa
        if (updatedList) {
            // Devolver la lista actualizada en formato JSON
            res.json(updatedList);
        } else {
            // Devolver un mensaje de error si la lista no se encuentra
            res.status(404).json({ status: "List not found" });
        }
    } catch (error) {
        // Manejar errores y devolver un mensaje de error al cliente
        res.status(500).json({ status: "Server unavailable", message: error.message });
    }
};

// Función asíncrona para eliminar una lista
export const deleteList = async (req, res) => {
    try {
        // Llamada a ListDAO para eliminar una lista
        const deletedList = await ListDAO.deleteList(req.params.code);
        // Comprobar si la eliminación fue exitosa
        if (deletedList) {
            // Devolver la lista eliminada en formato JSON
            res.json(deletedList);
        } else {
            // Devolver un mensaje de error si la lista no se encuentra
            res.status(404).json({ status: "List not found" });
        }
    } catch (error) {
        // Manejar errores y devolver un mensaje de error al cliente
        res.status(500).json({ status: "Server unavailable", message: error.message });
    }
};
