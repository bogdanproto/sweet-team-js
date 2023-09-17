import { refs } from '../../refs/refs';
import { onShowOrderForm } from '../../partials/order-now';
import { toggleMenu } from '../../partials/burger-menu';

export function onSwitchHeroListners() {
  refs.heroBtn.addEventListener('click', onShowOrderForm);
}

export function onSwitchHeaderListners() {
  refs.headerOrder.addEventListener('click', onShowOrderForm);
  refs.openMenuBtn.addEventListener('click', toggleMenu);
}
