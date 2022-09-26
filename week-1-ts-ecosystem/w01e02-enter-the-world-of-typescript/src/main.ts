import { root } from './shop/root.component.js';

const $app: HTMLBodyElement | null = document.querySelector('#app');

$app && $app.append(root());
