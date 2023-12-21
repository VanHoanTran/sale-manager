import { ReactNode } from 'react';
import { FieldValues } from 'react-hook-form';

export interface Props {
  children: ReactNode;
}

interface ButtonProps extends Props {
  disable?: boolean;
  active?: boolean;
  onClick: () => void;
}

export interface IconButtonProps {
  icon: ReactNode;
  onClick: () => void;
}

interface Title {
  title: string;
  keySort: string;
}

export interface SortContextProps {
  sortField: string;
  sortType: string;
  setSortValue?: (value: string) => void;
}

export interface Product {
  id: string;
  productName: string;
  category: string;
  quantity: number;
  status: string;
  price: number;
  desc: string;
  sku: string;
  wholesaleDiscount: number;
  taxRate: number;
  brand: string;
  vendor: string;
  images: string[];
}

export interface ProductPurchase {
  id: string;
  quantity: number;
  price: number;
}
export interface Address {
  unit?: string;
  street: string;
  city: string;
  province: string;
  country: string;
  postalCode: string;
}

export interface Customer {
  id: string;
  email: string;
  phone: string;
  photo: string;
  name: string;
  billingAddress: Address;
  shippingAddress: Address;
}
export interface Order {
  id: string;
  item: ProductPurchase[];
  customer: Customer;
}

export interface TableBodyProps {
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

export interface PaginationProps {
  siblingPage?: number;
  boundaryPage?: number;
  selections?: number[];
}

interface TableContextProps {
  data: [];
  titles: [];
  numOfColumns: number;
  totalPage: number;
  currentPage: number;
  rowsPerPage: number;
  setCurrentPage?: (value: React.SetStateAction<number>) => void;
  setRowsPerPage?: (value: React.SetStateAction<number>) => void;
}

type Photo = {
  name: string;
  url: string;
};
export interface FormValues extends FieldValues {
  productName: string;
  code: string;
  desc: string;
  sku: string;
  price: number;
  wholesaleDiscount: number;
  taxRate: number;
  category: string;
  tags?: string[] | string;
  brand: string;
  vendor: string;
  images: Photo[];
}
