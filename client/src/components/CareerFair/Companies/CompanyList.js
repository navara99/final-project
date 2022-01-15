
import React from 'react'
import CompanyItem from './CompanyItem';


const CompanyList = ({organizations}) => {
  console.log(organizations);
  let organizationsList = organizations ? organizations.map(organization => <CompanyItem key={organization.organizations_id} organization={organization}/>) : null;
  return (
    <>
     {organizationsList}
    </>
  )
}

export default CompanyList
