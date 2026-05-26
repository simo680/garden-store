export type SelectOption = {
  value: string | number;
  label: string;
};

export type SelectProps = {
  titleLabel: string;
  options: SelectOption[];
  value?: string | number;
  onChange?: (value: string | number) => void;
};
