import { Schema, model } from "mongoose";

// Definición del esquema de la lista
const dataSchema = new Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    temperature: {
      type: Number,
      required: true,
    },
    humidity: {
      type: Number,
      required: true,
    },
    objectDetected: {
      type: String,
    },
    objectDistance: {
      type: Number,
    },
    led: {
      type: Boolean,
      default: false,
    },
  },
  // Opciones del esquema
  {
    versionKey: false, // Desactivar el campo __v
    timestamps: true, // Agregar campos de createdAt y updatedAt automáticamente
    collection: 'data_app'
  }
);

// Crear y exportar el modelo List basado en el esquema listaSchema
export default model("Data", dataSchema);
