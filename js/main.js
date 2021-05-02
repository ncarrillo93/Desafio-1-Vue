var app = new Vue({
    el: '#app',
    data: {
        nuevoProducto: {
            nombre: '',
            descripcion: '',
            precio: 0,
            editar: false,
        },
        editarProducto: {
            nombre: '',
            descripcion: '',
            precio: 0,
            editar: true
        },
        productos: [
            {
                nombre: 'papa',
                descripcion: 'pos son papas wey',
                precio: 0,
                editar: false
            },
            {
                nombre: 'anvorgesas',
                descripcion: 'una delicia',
                precio: 7990,
                editar: true
            },
        ]
    },
    methods: {
        agregarProducto() { //ok
            this.productos.push({
                nombre: this.nuevoProducto.nombre,
                descripcion: this.nuevoProducto.descripcion,
                precio: parseFloat(this.nuevoProducto.precio),
                editar: false
            })
        },
        eliminarProducto(index) { //ok
            this.productos.splice(index, 1);
        },


        cambiarEstado(index) {//funciona a medias

            this.productos.splice(index,1,{
                editar:true
            })
        },
        
        
        actualizarProducto(index) { //no ok
            this.productos.splice(index, 1, {
                nombre: this.editarProducto.nombre,
                descripcion: this.editarProducto.descripcion,
                precio: parseFloat(this.editarProducto.precio),
                editar: false

            })
        },

        cancelar(index) {
            this.productos.splice(index, 1, {
                editar: false
            })
        },
        contar() {

        }
    },
});