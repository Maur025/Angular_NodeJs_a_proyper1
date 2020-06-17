CREATE DATABASE ng_anime_db;

USE ng_anime_db;

CREATE TABLE categorias(
    id_cat INT(3) AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE animes(
    id_a INT(10) PRIMARY KEY NOT NULL,
    titulo VARCHAR(180)NOT NULL,
    Sinopsis VARCHAR(255) NULL,
    imagen VARCHAR(255) NULL,    
    fecha_ani TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cat_ani(
    id_ac INT(11) AUTO_INCREMENT PRIMARY KEY NOT NULL,
    id_cat INT(3) NOT NULL,
    id_a INT(10) NOT NULL,
    FOREIGN KEY(id_cat) REFERENCES categorias(id_cat),
    FOREIGN KEY(id_a) REFERENCES animes(id_a)
);

CREATE TABLE episodios(
    id_ep VARCHAR(15) PRIMARY KEY NOT NULL,
    nombre VARCHAR(25) NOT NULL,
    id_a INT(10) NOT NULL,
    FOREIGN KEY (id_a) REFERENCES animes(id_a),
    fecha_sub TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);