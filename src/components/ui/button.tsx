import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 font-display",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-cockatoo-yellow to-cockatoo-orange text-foreground shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 rounded-full border-2 border-cockatoo-orange/30",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 rounded-2xl",
        outline:
          "border-3 border-primary bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground rounded-full",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 rounded-2xl",
        ghost: 
          "hover:bg-accent hover:text-accent-foreground rounded-2xl",
        link: 
          "text-primary underline-offset-4 hover:underline",
        hero:
          "bg-gradient-to-br from-cockatoo-yellow to-cockatoo-orange text-cockatoo-dark shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 rounded-full border-4 border-cockatoo-white/50 font-bold text-lg",
        heroOutline:
          "border-4 border-cockatoo-white bg-cockatoo-white/20 backdrop-blur-md text-cockatoo-dark hover:bg-cockatoo-white hover:text-cockatoo-dark rounded-full font-bold text-lg hover:scale-110 active:scale-95 transition-all",
        playful:
          "bg-cockatoo-pink text-cockatoo-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 rounded-full border-4 border-cockatoo-white/30",
        blue:
          "bg-cockatoo-blue text-cockatoo-dark shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 rounded-full border-4 border-cockatoo-white/50",
        green:
          "bg-cockatoo-green text-cockatoo-dark shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 rounded-full border-4 border-cockatoo-white/50",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 rounded-full px-4 text-sm",
        lg: "h-14 rounded-full px-10 text-lg",
        xl: "h-16 rounded-full px-12 text-xl",
        icon: "h-12 w-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
