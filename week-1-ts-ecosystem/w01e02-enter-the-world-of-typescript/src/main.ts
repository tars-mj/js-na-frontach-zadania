import { root } from './shop/root.component';

const $app: HTMLBodyElement | null = document.querySelector('#app');

$app && $app.append(root());
