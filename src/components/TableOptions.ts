import ColumnOptions from "./ColumnOptions";

export default interface TableOptions<T> {
  data: T[];
  columns: ColumnOptions<T>[];
}
