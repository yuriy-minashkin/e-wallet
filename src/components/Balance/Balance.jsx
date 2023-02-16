import React from 'react'
import { useAuth } from 'hooks/useAuth';
import { Container, BalanceText, BalanceState, Span } from './Balance.styled';

export const Balance = () => {
  const { balance } = useAuth()
  const showBalance = new Intl.NumberFormat('en-US', { 
      minimumFractionDigits: 2
  });

  return (
    <Container>
      <BalanceText>your balance</BalanceText>
      <BalanceState><Span>&#8372;&#160;</Span>{showBalance.format(balance.toFixed(2))}</BalanceState>
    </Container>
    
  )
}
