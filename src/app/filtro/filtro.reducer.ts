import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './filtro.actions';
import { filtrosValidos } from './filtro.actions';

export const initialState: filtrosValidos = 'todos' as filtrosValidos;

const _filtroReducer = createReducer(
  initialState,
  on(actions.setFiltro, (state, {filtro}) => filtro),
);

export function filtroReducer(state: any, action: Action) {
  return _filtroReducer(state, action);
}
