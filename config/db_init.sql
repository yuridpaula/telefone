create database telefones;

use telefones;

create table pessoa (
    pes_codigo       int not null primary key auto_increment,
    pes_nome         varchar(20),
    pes_apelido      varchar(10),
    pes_sexo         char(1),
    pes_dtnascimento varchar(10)
)  engine=innodb default charset=utf8;

create table telefone (
    tel_codigo    int primary key not null auto_increment,
    tel_tipo      varchar(10),
    tel_marca     varchar(10),
    tel_numero    varchar(15),
    tel_operadora char(2),
    pes_codigo    int,
    
    key fk_telefone_pessoa (pes_codigo),
    constraint fk_telefone_pessoa foreign key (pes_codigo)
        references pessoa (pes_codigo)
)  engine=innodb default charset=utf8;

INSERT INTO telefones.pessoa 
 (pes_nome, pes_apelido, pes_sexo, pes_dtnascimento) 
VALUES 
 ('Yuri Oliveira'  , 'Oliveira', 'M', '2018-06-03'),
 ('Joaquim Jose'   , 'Ze'      , 'M', '1983-03-17'),
 ('Maria Aparecida', 'Ma'      , 'F', '1998-01-01');

INSERT INTO telefones.telefone 
 (tel_tipo, tel_marca, tel_numero, tel_operadora, pes_codigo) 
VALUES 
 ('Celular', 'Motorola', '(16) 9920-39581', '21', '1'),
 ('Fixo'   , 'Embratel', '(16) 3712-3712' , '21', '2'),
 ('Rural'  , 'Embratel', '(16) 3720-5181' , '21', '3');