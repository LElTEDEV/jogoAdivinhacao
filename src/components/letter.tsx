import { cva, type VariantProps } from "class-variance-authority";

const letterVariants = cva(
  "flex items-center justify-center uppercase font-bold text-2xl",
  {
    variants: {
      variant: {
        normal: "w-[3.37rem] h-[3.37rem] rounded-md ",
        small: "w-11 h-11 rounded-sm",
      },

      status: {
        normal: "bg-violet-100 text-violet-950",
        accepted: "bg-emerald-100 border-2 border-emerald-500 text-emerald-500",
        wrong: "bg-amber-100 border-2 border-amber-500 text-amber-500",
      },
    },

    defaultVariants: {
      variant: "normal",
      status: "normal",
    },
  }
);

interface Props extends VariantProps<typeof letterVariants> {
  value?: string;
}

export function Letter({ value = "", variant, status }: Props) {
  return (
    <div className={letterVariants({ variant, status })}>
      <span>{value}</span>
    </div>
  );
}
