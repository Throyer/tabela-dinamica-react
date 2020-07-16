export default interface ColumnOptions<T> {
  title?: string;
  property?: keyof T;
  defaultValue?: string;
  render?: (row: T) => JSX.Element | string | undefined | null | number;
}
