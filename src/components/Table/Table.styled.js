import styled from 'styled-components';



export const Box = styled.div`
  max-width: 336px;
  height: 715px;
  margin: 0 auto;
`;
export const FiltersBox = styled.div`
  display: flex;
  max-width: 395px;
  height: auto;
  margin: 0 auto;
  gap: 32px;
  mix-blend-mode: 20px;
  margin-bottom: 20px;
  
`;
export const TotalBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  
`;
export const TotalItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 153px;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 14px;
  margin-left: 15px;
`;
export const TotalExpenses = styled.div`
  color: #ff6596;
  margin-right: 15px;
`;
export const TotalIncom = styled.div`
  color: #24cca7;
  margin-right: 15px;
`;
export const CategoryBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--main-background-color);
  border-radius: 30px;
  width: 336px;
  height: 58px;
  background-color: var(--form-background-color);
`;
export const ItemTitle = styled.div`
  padding: 20px;
  font-size: 18px;
  font-weight: 700;
  
`;