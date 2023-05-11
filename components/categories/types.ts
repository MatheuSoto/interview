import { IMonth } from "../template/types";

export interface ICategory {
  name: string,
  id?: number,
  type: string,
  months?: IMonth[]
}