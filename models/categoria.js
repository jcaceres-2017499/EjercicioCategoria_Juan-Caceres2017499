const { Schema, model } = require('mongoose');

const CategoriaSchema = Schema({
    producto: {
        type: String,
        required: [true, 'El producto es obligatorio']
    },
    precio: {
        type: String,
        required: [true, 'El precio es obligatorio']
    },
    marca: {
        type: String,
        required: [true, 'La marca es obligatorio']
    },
    img: {
        type: String
    }
});


module.exports = model('Categoria', CategoriaSchema);