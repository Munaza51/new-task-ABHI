import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Company } from './company.entity';
import { Specialization } from './specialization.entity';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Company, (company) => company.departments)
  company: Company;

  @OneToMany(() => Specialization, (specialization) => specialization.department, { cascade: true })
  specializations: Specialization[];
}
