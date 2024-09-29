import { w } from "windstitch";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: any;
  color?: "green" | "outline" | "white";
}

const ButtonW = w.button(
  `
    font-medium 
    text-normal
    rounded-tr 
    rounded-tl-3xl 
    rounded-bl 
    rounded-br-3xl
  `,
  {
    variants: {
      color: {
        green: `
        bg-green-500 
        hover:bg-green-600 
        transition-colors
        text-white 
        shadow-xl
        shadow-green-100
        `,
        outline: `
        bg-transparent
        border-2
        transition-colors
        text-green-500
        hover:text-green-600
        border-green-500
        hover:border-green-600
        `,
        white: `
        bg-transparent
        border-2
        transition-colors
        text-white
        hover:text-gray-50
        border-white
        hover:border-gray-50
        `,
      },
      size: {
        base: "h-14 px-4 py-1 w-40",
      },
    },
    defaultVariants: {
      size: "base",
      color: "green",
    },
  }
);

ButtonW.displayName = "Custom Button";

export default function Button({
  children = "Button",
  color = "green",
  ...props
}: ButtonProps) {
  return (
    <ButtonW color={color} {...props}>
      {children}
    </ButtonW>
  );
}
