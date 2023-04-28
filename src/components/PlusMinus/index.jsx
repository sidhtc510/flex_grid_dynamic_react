import React from 'react'
import Button from '@mui/material/Button';

export default function PlusMinus({minusItem, plusItem}) {
  return (
    <div className='plusMinus'>
      <Button onClick={minusItem} variant="contained">-</Button>
      <Button onClick={plusItem} variant="contained">+</Button>
    </div>
  )
}
