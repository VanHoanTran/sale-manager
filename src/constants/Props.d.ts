import { ReactNode } from 'react';

export interface Props {
  children: ReactNode;
}
export interface IconButtonProps {
  icon: ReactNode;
  onClick: () => void;
}

interface Title {
  title: string;
  keySort: string;
}
export interface HeaderTableProps {
  titles: Title[];
}

export interface SortContextProps {
  sortField: string;
  sortType: string;
  setSortValue?: (value: string) => void;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  quantity: number;
  status: string;
  price: number;
}

export interface TableBodyProps {
  data: object[];
  render: (item) => ReactNode;
}

export interface TableHeaderProps {
  title: string;
  keySort: string;
}

export interface Transaction {
  id: number;
  date: number;
  customer: string;
  status: string;
  paymentMethod: string;
  paymentIdentifier: string;
  totalAmount: number;
}
