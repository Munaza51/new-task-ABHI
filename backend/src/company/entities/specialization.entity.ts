// src/company/entities/specialization.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Department } from './department.entity';
import { Colleague } from './colleague.entity';

@Entity()
export class Specialization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Department, (department) => department.specializations)
  department: Department;

  @OneToMany(() => Colleague, (colleague) => colleague.specialization, { cascade: true })
  colleagues: Colleague[];
}
