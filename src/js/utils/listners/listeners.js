import { refs } from '../../refs/refs';
import { onShowOrderForm } from '../../partials/order-now';

export function onSwitchHomeListners() {
  refs.heroBtn.addEventListener('click', onShowOrderForm);
}
