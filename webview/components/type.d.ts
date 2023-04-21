export interface IButtonProps {
  children: string | ReactNode;
  buttonType?: "button" | "submit" | "reset" | undefined;
  buttonStatus?: string;
  primary: boolean;
  handleButtonClick?: () => void;
}
export interface IButtonStyledProps {
  primary: boolean;
  type?: string;
}

export interface ICopyIconProps {
  handleClick: (value: string | undefined) => void;
  value: string | undefined;
}

export interface IDetailOptionProps {
  children: ReactNode;
  requestMenu?: boolean;
}

export interface IInformationProps {
  children: ReactNode;
  textColor: string;
}

export interface IInformationStyledProps {
  textColor: string;
}

export interface ICommonChildProps {
  children: ReactNode;
}

export interface ILoadButtonsBlockProps {
  optionsType: string;
}

export interface TMenuOptionProps {
  children: ReactElement;
  currentOption: string | null;
  menuOption: string;
}

export interface IMenuOptionStyledProps {
  primary: boolean;
}

export interface IMenuOptionStyledProps {
  primary?: boolean;
}

interface IMenuOptionProps {
  children: ReactElement;
  currentOption: string | null;
  menuOption: string;
}

export interface IMessageProps {
  children: ReactNode;
  primary?: boolean;
}

export interface IMessageStyledProps {
  primary?: boolean;
}

export interface ISelectWrapperProps {
  children: ReactNode;
  requestMenu?: boolean;
  primary?: boolean;
  secondary?: boolean;
}
export interface ISelectWrapperStyledProps {
  primary?: boolean;
  secondary?: boolean;
  border?: boolean;
}
