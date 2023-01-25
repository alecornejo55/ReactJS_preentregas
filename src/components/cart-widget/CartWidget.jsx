import { Badge } from 'primereact/badge';

export const CartWidget = () => {

  return (
    <i className="pi pi-shopping-cart mr-4 p-text-secondary p-overlay-badge" >
      <Badge value="2"></Badge>
    </i>
  )
}