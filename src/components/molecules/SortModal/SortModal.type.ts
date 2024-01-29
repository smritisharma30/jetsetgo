export interface SortModalProps {
    isVisible?: boolean;
    onClose?: () => void;
    onSelection?: (item: any) => void;
  }
  
  export interface SortModalItem {
    item: SortModalType;
  }
  
  export interface SortModalType {
    label: string;
  }
  