/*
  ### Question
  
  Implement the built-in Pick<T, K> generic without using it.
  
  Constructs a type by picking the set of properties K from T
  
  For example:
  
 
ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }
  
  type TodoPreview = MyPick<Todo, 'title' | 'completed'>
  
  const todo: TodoPreview = {
      title: 'Clean room',
      completed: false,
  }
  
*/

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type T = keyof Todo;

const arr: T = "title";

// ============= Solution ==============
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
type PickA = Pick<Todo, "title">;
// ============= Test Cases =============
type MyPickTodoTitle = MyPick<Todo, "title">;
type MyPickTodoCompleted = MyPick<Todo, "completed">;
type MyPickTodoDescription = MyPick<Todo, "description">;

export type cases = [
  MyPick<Todo, "title">,
  MyPick<Todo, "title" | "completed">,

  // @ts-ignores
  MyPick<Todo, "title" | "completed" | "invalid">
];

const MyPickTodoTitle: MyPickTodoTitle[] = [
  {
    title: "Pick me",
    /**
     * Will throw error:
     *
     * Type '{ title: string; description: string; }' is not assignable to type 'MyPickTodoTitle'.
     * Object literal may only specify known properties, and 'description' does not exist in type 'MyPickTodoTitle'.
     */
    // description: "Pick me",
  },
];

const MyPickTodoCompleted: MyPickTodoCompleted = {
  completed: true,
  /**
   * Will throw error:
   *
   * Type '{ completed: true; title: string; }' is not assignable to type 'MyPickTodoCompleted'.
   * Object literal may only specify known properties, and 'title' does not exist in type 'MyPickTodoCompleted'.
   */
  // title: "Pick me",
};

const MyPickTodoDescription: MyPickTodoDescription = {
  description: "Pick me",
  /**
   * Wii throw error:
   *
   * Type '{ description: string; title: string; }' is not assignable to type 'MyPickTodoDescription'.
   * Object literal may only specify known properties, and 'title' does not exist in type 'MyPickTodoDescription'.
   */
  // title: "Pick me",
};

