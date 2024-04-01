export interface IContactInformationItem {
  id: number;
  image: string;
  link: string;
  text: string;
  title: string;
  class: string;
}

export interface IContact {
  contact: IContactInformationItem;
}
