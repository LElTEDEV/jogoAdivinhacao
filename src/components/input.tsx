import type { ComponentProps } from "react";

interface Props extends ComponentProps<"input"> {}

export function Input({ ...rest }: Props) {
  return (
    <input
      className="w-[2.87rem] h-[2.87rem] outline-0 rounded-md bg-violet-100 border-2 border-violet-400 uppercase text-center font-bold font-sans text-violet-900 focus:border-violet-700"
      type="text"
      {...rest}
    />
  );
}
