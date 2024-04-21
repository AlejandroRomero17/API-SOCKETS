import DataDAO from '../dao/data.dao.js';

// Función asíncrona para obtener todos los datos
export const getAll = async (req, res) => {
    try {
        // Llamada a DataDAO para obtener todos los datos
        const data_app = await DataDAO.getAll();
        // Devolver los datos en formato JSON
        res.json(data_app);
    } catch (error) {
        // Manejar errores y devolver un mensaje de error al cliente
        res.status(500).json({ status: "Server unavailable", message: error.message });
    }
};

// Función asíncrona para obtener datos por su id
export const getOne = async (req, res) => {
    try {
        // Llamada a DataDAO para obtener datos por su id
        const data = await DataDAO.getOne(req.params.id);
        // Comprobar si los datos existen
        if (data !== null) {
            // Devolver los datos en formato JSON
            res.json(data);
        } else {
            // Devolver un mensaje de error si los datos no se encuentran
            res.status(404).json({ status: "Data not found" });
        }
    } catch (error) {
        // Manejar errores y devolver un mensaje de error al cliente
        res.status(500).json({ status: "Server unavailable", message: error.message });
    }
};

// Función asíncrona para insertar datos
export const insertData = async (req, res) => {
    try {
        // Llamada a DataDAO para insertar datos
        const result = await DataDAO.insertData(req.body);
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

// Función asíncrona para actualizar datos
export const updateData = async (req, res) => {
    try {
        // Llamada a DataDAO para actualizar datos
        const updatedData = await DataDAO.updateData(req.params.id, req.body);
        // Comprobar si la actualización fue exitosa
        if (updatedData) {
            // Devolver los datos actualizados en formato JSON
            res.json(updatedData);
        } else {
            // Devolver un mensaje de error si los datos no se encuentran
            res.status(404).json({ status: "Data not found" });
        }
    } catch (error) {
        // Manejar errores y devolver un mensaje de error al cliente
        res.status(500).json({ status: "Server unavailable", message: error.message });
    }
};

// Función asíncrona para eliminar datos
export const deleteData = async (req, res) => {
    try {
        // Llamada a DataDAO para eliminar datos
        const deletedData = await DataDAO.deleteData(req.params.id);
        // Comprobar si la eliminación fue exitosa
        if (deletedData) {
            // Devolver los datos eliminados en formato JSON
            res.json(deletedData);
        } else {
            // Devolver un mensaje de error si los datos no se encuentran
            res.status(404).json({ status: "Data not found" });
        }
    } catch (error) {
        // Manejar errores y devolver un mensaje de error al cliente
        res.status(500).json({ status: "Server unavailable", message: error.message });
    }
};
