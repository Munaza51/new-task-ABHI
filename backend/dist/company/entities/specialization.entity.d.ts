import { Department } from './department.entity';
import { Colleague } from './colleague.entity';
export declare class Specialization {
    id: number;
    name: string;
    department: Department;
    colleagues: Colleague[];
}
