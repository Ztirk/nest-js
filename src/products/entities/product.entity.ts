import { Entity, Column, PrimaryColumn } from 'typeorm';
@Entity()
export class Product {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;
}
