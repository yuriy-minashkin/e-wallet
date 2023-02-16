import { Button } from './Navigation.styled';
import { Link } from 'react-router-dom';
export const Navigation = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="diagram">Statistics</Link>
    </>
    
  )
}
