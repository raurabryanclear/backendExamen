CREATE TABLE cliente (
    id_cliente CHAR(10) PRIMARY KEY,
    nombre_cl VARCHAR(25) NOT NULL,
    apellido VARCHAR(25) NOT NULL,
    telefono int (15) NOT NULL,
	direccion varchar (25) not null,
	email varchar (50) not null
);

CREATE TABLE categoria (
    id_categoria serial PRIMARY KEY,
    nombre_ca VARCHAR(25) NOT NULL
);


CREATE TABLE producto (
    id_producto serial PRIMARY KEY,
    nombre_p VARCHAR(25) NOT NULL,
	stock int ,
	precio decimal ,
	id_categoria int not null,
	foreign key (id_categoria) references categoria(id_categoria)
);



CREATE TABLE ventas (
    id serial PRIMARY KEY,
    id_cliente int NOT NULL,
    id_producto int NOT NULL,
    cantidad int NOT NULL,
	fecha_compra timestamp,
	foreign key (id_cliente) references cliente(id_cliente),
	foreign key (id_producto) references producto(id_producto),
);
