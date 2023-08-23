interface ButtonProps {
  label?: string;
  isActive?: boolean;
  onClick?: () => void;
}

interface ButtonGroupProps {
  children: React.ReactNode;
}

export type { ButtonProps, ButtonGroupProps };