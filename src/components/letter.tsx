interface Props {
  value?: string;
}

export function Letter({ value = "" }: Props) {
  return (
    <div className="w-[3.37rem] h-[3.37rem] rounded-md bg-violet-100 flex items-center justify-center">
      <span className="uppercase font-bold text-2xl text-violet-900">
        {value}
      </span>
    </div>
  );
}
