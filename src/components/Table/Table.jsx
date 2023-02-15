import React from 'react'
import styled from 'styled-components';
import { FilterMonth } from 'components/Table/filterMonth';
import { FilterYear } from './filterYear';
import { Table } from '@mui/material';
import { BasicTable } from './basicTable';


const Box = styled.div`
  max-width: 336px;
  height: 715px;
  margin: 0 auto;
`;
const FiltersBox = styled.div`
display: flex;
  max-width: 395px;
  height: auto;
  margin: 0 auto;
  gap: 32px;
  mix-blend-mode: 20px;
  margin-bottom: 20px;
`;
const TotalBox = styled.div`
display: flex;
flex-direction: column;
`;
const TotalItem = styled.div`
display: flex;
justify-content: space-between;
gap: 153px;
font-size: 16px;
font-weight: 700;

`;
const TotalExpenses = styled.div`
color: #FF6596;
`;
const TotalIncom = styled.div`
color: #24CCA7;
`;
const CategoryBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background: #FFFFFF;
border-radius: 30px;
width: 336px;
height: 58px;

`;
const ItemTitle = styled.div`
padding: 20px;
font-size: 18px;
font-weight: 700;

`;
export const TableStatistics = (data) => {
    console.log('Fetch for Table',data.data)
  return (
    <Box>
      <FiltersBox>
        <FilterMonth />
        <FilterYear />
          </FiltersBox>
          <CategoryBox> <ItemTitle>Category</ItemTitle> <ItemTitle>Sum</ItemTitle></CategoryBox>
          <BasicTable tableData={data.data.categoriesSummary} />
          <TotalBox>
              <TotalItem><p>Expenses: </p> <TotalExpenses>{data.data.expenseSummary}</TotalExpenses></TotalItem>
              <TotalItem><p>Income: </p> <TotalIncom>{data.data.incomeSummary}</TotalIncom></TotalItem>
              </TotalBox>
    </Box>
  );
}
