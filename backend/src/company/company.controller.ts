import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';

@Controller('companies') // Base route for company-related endpoints
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  // Endpoint to create a new company
  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.companyService.create(createCompanyDto);
  }

  // Endpoint to retrieve all companies
  @Get()
  findAll(): Promise<Company[]> {
    return this.companyService.findAll();
  }

  // Endpoint to retrieve a company by ID
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Company> {
    return this.companyService.findOne(+id);
  }

  // Endpoint to update a company by ID
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto): Promise<Company> {
    return this.companyService.update(+id, updateCompanyDto);
  }

  // Endpoint to delete a company by ID
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.companyService.delete(+id);
  }
}
