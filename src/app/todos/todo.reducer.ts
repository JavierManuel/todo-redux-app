import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { borrar, crear, editar, limpiarCompletado, toggle, toggleAll } from './todo.actions';

export const estadoInicial: Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Salvar al mundo2'),
    new Todo('Salvar al mundo3'),
    new Todo('Salvar al mundo4'),
];

const _todoReducer = createReducer(
    estadoInicial,
  on(crear, (state, {texto}) => [...state, new Todo( texto )]),

  on(toggle, (state, {id}) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        }
      } else {
        return todo;
      }
      
    })
  }),


on(editar, (state, {id, texto}) => {
  return state.map(todo => {
    if (todo.id === id) {
      return {
        ...todo,
        texto: texto
      }
    } else {
      return todo;
    }
    
  })
}),

on( borrar, (state, {id}) => state.filter(todo => todo.id !== id)),

on(toggleAll, (state, {completado}) => state.map(todo => {
      return {
        ...todo,
        completado: completado
      }
}) ),

on(limpiarCompletado, (state) => state.map(todo => {
  if (todo.completado) {
    return {
      ...todo,
      completado: !todo.completado
    }
  } else {
    return todo;
  }
}) ),

);

export function todoReducer(state: any, action: Action) {
  return _todoReducer(state, action);
}