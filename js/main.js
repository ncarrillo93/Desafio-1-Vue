var app = new Vue({
    el: '#app',
    data: {
        errorNombre:true,
        errorDescripcion:true,
        errorPrecio:true,
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
            if(!this.errorNombre && !this.errorDescripcion && !this.errorPrecio){
                this.productos.push({
                    nombre: this.nuevoProducto.nombre,
                    descripcion: this.nuevoProducto.descripcion,
                    precio: parseFloat(this.nuevoProducto.precio),
                    editar: false
                });
                this.errorNombre = false;
                this.errorDescripcion = false;
                this.errorPrecio = false;
            }else{
                if(this.nuevoProducto.nombre.length>0){
                    this.errorNombre=false;
                }else{
                    this.errorNombre=true;
                }
                if(this.nuevoProducto.descripcion.length>0){
                    this.errorDescripcion = false;
                }else{
                    this.errorDescripcion = true;
                }
                if(parseFloat(this.nuevoProducto.precio)>0){
                    this.errorPrecio = false;
                }else{
                    this.errorPrecio = true;
                }
            }
 
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