import {Observable} from 'rxjs';
import {PriorityDAO} from '../interface/priority-dao';
import {Priority} from '../../model/priority';

export class PriorityDAOImpl implements PriorityDAO {
  add(T): Observable<Priority> {
    return undefined;
  }

  delete(id: number): Observable<Priority> {
    return undefined;
  }

  get(id: number): Observable<Priority> {
    return undefined;
  }

  getAll(): Observable<Priority> {
    return undefined;
  }

  update(T): Observable<Priority> {
    return undefined;
  }
}
