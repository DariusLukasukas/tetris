import { Block, SHAPES } from "@/types/types";

interface Props {
  upcomingBlocks: Block[];
}

function UpcomingBlocks({ upcomingBlocks }: Props) {
  return (
    <>
      <div className="mb-4 flex w-full flex-row-reverse gap-8 md:flex-col-reverse">
        {upcomingBlocks.map((block, blockIndex) => {
          const shape = SHAPES[block].shape.filter((row) =>
            row.some((cell) => cell)
          );
          return (
            <div key={blockIndex}>
              {shape.map((row, rowIndex) => {
                return (
                  <div key={rowIndex} className="row">
                    {row.map((isSet, cellIndex) => {
                      const cellClass = isSet ? block : "";
                      return (
                        <div
                          key={`${blockIndex}-${rowIndex}-${cellIndex}`}
                          className={`cell w-8 rounded-lg xl:w-9 ${cellClass} rounded-lg`}
                        ></div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default UpcomingBlocks;
