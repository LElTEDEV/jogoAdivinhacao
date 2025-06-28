import type { ComponentProps } from "react";

interface Props extends ComponentProps<"button"> {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <button
      type="button"
      className="h-[2.87rem] rounded-md border-2 bg-violet-500 border-violet-700 text-violet-100 px-3.5 font-bold cursor-pointer hover:bg-violet-600 transition ease-in"
      {...rest}
    >
      {title}
    </button>
  );
}
