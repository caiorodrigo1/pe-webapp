import { Routes } from '@angular/router';

import { ClienteComponent } from './container/cliente.component';
import { ClienteAtualizarComponent } from './components/cliente-atualizar/cliente-atualizar.component';

export const clienteRoute: Routes = [
  {
    path: '',
    component: ClienteComponent,
    data: { pageTitle: 'Cliente' },
  },
  {
    path: 'criar',
    component: ClienteAtualizarComponent,
    data: { pageTitle: 'Criar Cliente' },
  },
  {
    path: 'editar/:id',
    component: ClienteAtualizarComponent,
    data: { pageTitle: 'Editar Cliente' },
  },
];
