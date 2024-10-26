import { Company } from './company.entity';
import { Specialization } from './specialization.entity';
export declare class Department {
    id: number;
    name: string;
    company: Company;
    specializations: Specialization[];
}
