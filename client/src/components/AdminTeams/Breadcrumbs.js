import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { PropTypes } from 'prop-types'

export default function Breadcrumbs({department}){
  return(
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href='/Departments'>Departments</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href='/'>{department.name}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}

Breadcrumbs.propTypes={
  department: PropTypes.any
}