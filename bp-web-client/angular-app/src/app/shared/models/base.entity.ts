export interface BaseEntity {
  id: number;

  getId(): number;
  setId(id: number): void;

  transformKeys(): any;
}
