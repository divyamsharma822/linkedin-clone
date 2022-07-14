import { KeyboardArrowDown } from '@mui/icons-material';
import React from 'react';
import './Tag.scss';

const Tag = ({title, Icon}) => {
  return (
    <div className='tag'>{title} {Icon && <Icon />}</div>
  )
}

export default Tag;