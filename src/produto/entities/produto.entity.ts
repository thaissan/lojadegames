import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity({name:"tb_produto"})
export class Produto{

    @PrimaryGeneratedColumn() 
    id: number;

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    nome: string;

    @IsNotEmpty()
    @Column({type: "decimal", precision: 10, scale: 2, nullable: false })
    preco: number;

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    foto: string;

    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria; 

    @ManyToOne(() => Usuario, (usuario) => usuario.produto, {
        onDelete: "CASCADE"
    })
    usuario: Usuario

}