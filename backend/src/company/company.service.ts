import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './entities/company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  // Create a single company
  create(companyData: CreateCompanyDto): Promise<Company> {
    const newCompany = this.companyRepository.create(companyData);
    return this.companyRepository.save(newCompany);
  }

  // Retrieve all companies
  findAll(): Promise<Company[]> {
    return this.companyRepository.find({
      relations: ['departments', 'departments.specializations', 'departments.specializations.colleagues'],
    });
  }

  // Retrieve a single company by ID
  findOne(id: number): Promise<Company> {
    return this.companyRepository.findOne({
      where: { id },
      relations: ['departments', 'departments.specializations', 'departments.specializations.colleagues'],
    });
  }

  // Update a company by ID
  update(id: number, updateData: UpdateCompanyDto): Promise<Company> {
    return this.companyRepository.save({ ...updateData, id });
  }

  // Delete a company by ID
  delete(id: number): Promise<void> {
    return this.companyRepository.delete(id).then(() => undefined);
  }
}
