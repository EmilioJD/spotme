import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type EagerTodo = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly isComplete: boolean;
}

type LazyTodo = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly isComplete: boolean;
}

export declare type Todo = LazyLoading extends LazyLoadingDisabled ? EagerTodo : LazyTodo

export declare const Todo: (new (init: ModelInit<Todo>) => Todo) & {
  copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}