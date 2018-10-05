import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { from, empty, throwError } from 'rxjs'

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  const toDos = [1, 2, 3]

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set the todos property with the items returned from the server', () => {
    spyOn(service, 'getTodos').and.callFake(() => { return from([toDos]) })
    component.ngOnInit();
    expect(component.todos).toBe(toDos);
  });

  it('should call the add server when a new item is added', () => {
    const spy = spyOn(service, 'add').and.callFake((x) =>  empty());
    component.add();
    expect(spy).toHaveBeenCalled();
  });

  it('should update the #todos if the call to server is successful', () => {
    spyOn(service, 'add').and.returnValue(from([toDos]));
    component.add();
    expect(component.todos.indexOf(toDos)).toBeGreaterThan(-1);
  })

  it('should update the #message if the call to server failed', () => {
    const errorMsg = 'error from server';
    spyOn(service, 'add').and.returnValue(throwError(errorMsg));
    component.add();
    expect(component.message).toBe(errorMsg);
  });

})



