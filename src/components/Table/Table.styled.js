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
  gap: 20px;
  mix-blend-mode: 20px;
  margin-bottom: 20px;
  flex-direction: column;
  align-items: center;
  
    @media screen and (min-width: 768px) {
  gap: 16px;
    flex-direction: row;
  }
  @media screen and (min-width: 1280px) {
   gap: 32px;
    flex-direction: row;
  }
  
`;

export const RoundedBox = styled(Box)({
  borderRadius: '30px',
  overflow: 'hidden',
  width: '280px',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fffff',
  border: '1px solid #000000',
   '@media (min-width: 768px)': {
    width: '152px',
  },
    '@media (min-width: 1280px)': {
    width: '152px',
  },
});

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

export const ColorBox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 2px;
  margin-left: 8px;
  background-color: ${props => props.backgroundColor};
`;

export const tableStyle = {
       backgroundColor: 'transparent',
};
export const rowStyle = {
    padding: '0px',
};

export const cellStyle = {
    width: '100px',
  padding: '14px',
       paddingLeft: '0px',
};

export const cellColorStyle = {
    width: '10px',
    margin: '0px',
    padding: '10px',
};

