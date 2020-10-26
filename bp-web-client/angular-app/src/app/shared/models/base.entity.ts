export interface BaseEntity {
  getId(): number;
  setId(id: number): void;

  transformKeys(): any;
}
