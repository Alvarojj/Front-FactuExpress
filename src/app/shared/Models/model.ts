export class usuario {
    id?:number;
    apellido?:String;
    cedula?:String;
    correo?:any;
    departamento?:String;
    direccion?:String;
    fecha?:String;
    municipio?:String;
    nombre?:String;
    telefono?:String;
}


export class comercio {
    id?:number;
    int?:number;
    departamento?:String;
    direccion?:String;
    municipio?:String;
    razon?:String;
    telefono?:String;
}

export class factura {
   id?:number;
   fecha?:String;
   iva?:number;
   numeroFactura?:number;
   subtotal?:number;
   total?:number;
   comercio?:comercio;
   usuario?:usuario;
   productos?:producto[];
}


export class producto {
    id?:number;
    cantidad?:number;
    nombre?:String;
    total?:number;
    totaliva?:number;
    factura?:number;
}