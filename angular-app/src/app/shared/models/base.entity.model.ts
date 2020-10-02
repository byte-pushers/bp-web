export class BaseEntityModel {
  private _id: number;

  constructor(private baseEntityModelConfig: BaseEntityModel){
    this.id = null;
  };

  get id(){
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }
}
