export interface MenuItem {
  scope: string;
  id: string;
  app: string;
  status: string;
  name: string;
  type: string;
  parent: string;
  score: string;
  image: string;
  links: Array<string>;
  icon?: string;
  children?: Array<any>;
  active?: boolean,
  isLeaf?: boolean
}
