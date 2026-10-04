class Inventario {
    constructor() {
        this.productos = [];
    }
    agregar(producto){
        this.productos.push(producto);
    }
    agregarInicio(producto){
        for(let i = this.productos.length; i>0; i--)
            this.productos[i] = this.productos[i-1];
        this.productos[0] = producto;
    }
    extraerPrimero(){
        let primero = this.productos[0];
       // this.productos[0] = null;
        for(let i = 0; i < this.productos.length-1; i++ )
            this.productos[i]=this.productos[i+1];
        this.productos.pop();
        return primero;
    }
    
    eliminar(codigo){
        for(let i=0; i < this.productos.length;i++){
            if(this.productos[i].codigo== codigo){
                for(let j=i; j < this.productos.length - 1; j++)
                    this.productos[j] = this.productos[j+1];
                    this.productos.pop();
                    return;
            }
        }
    }
    
    listar(){
        let lista = "";
        for(let i = 0; i < this.productos.length; i++)
            lista += this.productos[i].infoHtml() + " ";
        
        return lista;
    }
    
    buscar(codigo){
        for(let i=0; i < this.productos.length;i++)
            if(this.productos[i].codigo== codigo)
                return this.productos[i];
        return null;
    }  

    listarInverso(){
        let listar="";
        for(let i=this.productos.length-1; i>=0; i--)
            listar += this.productos[i].infoHtml() + " ";
        return listar;
    }

}



