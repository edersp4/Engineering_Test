import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Defina suas rotas aqui
const routes: Routes = [
  // Exemplo de rotas
  // { path: '', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
