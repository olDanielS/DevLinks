import React from 'react';
import './error.css'
import {Logo} from '../../Components/Logo'
import { Link } from 'react-router-dom';

export default function Error() {
 return (
   <div className='error'>
        <Logo/>
        <h1> Pagina não encontrada</h1>
        <p>Está pagina que você está procurando não existe!</p>
        <Link to={'/'} className='link'>
          Voltar para Home</Link>
   </div>
 );
}