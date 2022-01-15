
import React from 'react'
import CompanyItem from './CompanyItem';


const CompanyList = (props) => {
  const {industries} = props;
  console.log(industries);
  let industriesList = industries ? industries.map(industry => <CompanyItem key={industry.name} industry={industry}/>) : null;

  return (
    <>
     {industriesList}
    </>
  )
}

export default CompanyList
