import { Filter } from '@loopback/repository';
import { Todo } from '../models';
import { TodoRepository } from '../repositories';
import { GeocoderService } from '../services';
export declare class TodoController {
    protected todoRepo: TodoRepository;
    protected geoService: GeocoderService;
    constructor(todoRepo: TodoRepository, geoService: GeocoderService);
    createTodo(todo: Todo): Promise<Todo>;
    findTodoById(id: number, items?: boolean): Promise<Todo>;
    findTodos(filter?: Filter): Promise<Todo[]>;
    replaceTodo(id: number, todo: Todo): Promise<void>;
    updateTodo(id: number, todo: Todo): Promise<void>;
    deleteTodo(id: number): Promise<void>;
}
