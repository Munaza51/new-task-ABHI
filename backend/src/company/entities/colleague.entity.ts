// src/company/entities/colleague.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Specialization } from './specialization.entity';

@Entity()
export class Colleague {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  age: number;

  @ManyToOne(() => Specialization, (specialization) => specialization.colleagues)
  specialization: Specialization;
}
