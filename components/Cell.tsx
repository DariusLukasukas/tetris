import { CellOptions } from "@/types/types";

interface Props {
  type: CellOptions;
}

function Cell({ type }: Props) {
  return <div className={`${type} cell w-8 rounded-lg xl:w-9`} />;
}

export default Cell;
