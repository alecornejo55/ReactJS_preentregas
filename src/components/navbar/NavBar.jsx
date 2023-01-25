import { Menubar } from 'primereact/menubar';
import logo from '../../logo.svg';
import { CartWidget } from '../';
import './NavBar.css';



export const NavBar = () => {
  const items = [
    {
      label: 'Categorías',
      items: [
        {
          label: 'Componentes de PC'
        },
        {
          label: 'Notebooks'
        },
        {
          label: 'Periféricos'
        },
        {
          label: 'Monitores'
        },
      ]
    },
    {
      label: 'Armá tu PC'
    },
    {
      label: 'PC Armadas'
    },
    {
      label: 'Hardware'
    }
  ];

  const start = <img alt="logo" src={ logo } height="40px" className='mr-2' />
  return (
    <>
      <Menubar model={ items } start={ start } end={ CartWidget }  />
    </>
  );
}