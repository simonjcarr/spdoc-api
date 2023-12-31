/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'ProjectsController.index')
  Route.post('/', 'ProjectsController.store')
  Route.get('/:id', 'ProjectsController.show')
  Route.put('/:id', 'ProjectsController.update')
  Route.delete('/:id', 'ProjectsController.destroy')
}).prefix('api/v1/projects')

Route.group(() => {
  Route.get('/', 'AdminController.index')
}).prefix('api/v1/admin')

Route.group(() => {
  Route.get('/', 'UsersController.index')
  Route.post('/', 'UsersController.store')
  Route.get('/:id', 'UsersController.show')
  Route.put('/:id', 'UsersController.update')
  Route.delete('/:id', 'UsersController.destroy')
}).prefix('api/v1/admin/users')
