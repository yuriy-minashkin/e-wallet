import React from 'react'
import { useAuth } from 'hooks/useAuth';
import { Container, BalanceText, BalanceState } from './Balance.styled';

export const Balance = () => {
  const { balance } = useAuth()
  

  return (
    <Container>
      <BalanceText>your blance</BalanceText>
      <BalanceState>{balance}</BalanceState>
    </Container>
    
  )
}
