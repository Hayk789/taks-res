export interface HomeParamsType {
  page: number;
  limit: number;
  category: number;
  data: {
    image: any;
    category: CategoryType[] | [];
  };
}

export type CategoryType = {
  name: string;
  id: number;
};
