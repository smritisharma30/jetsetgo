export interface FilterModalProps {
  isVisible?: boolean;
  onClose?: () => void;
  onSelection?: (item: any) => void;
}

export interface FilterModalItem {
  item: FilterModalType;
}

export interface FilterModalType {
  airlineCode: string;
  airlineName: string;
}
