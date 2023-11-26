import { IBerryList } from "../interfaces/berry.interface";
import { BerryCard } from "./BerryCard";

interface BerryCardProps {
  berries: IBerryList[];
}

export const BerryList = ({ berries }: BerryCardProps) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 m-4">
        {berries.length > 0
          ? berries.map((b) => {
              return (
                <>
                  <div className="max-w-full rounded overflow-hidden shadow-lg hover:bg-gray-200 ">
                    <div className="font-bold text-xl mb-2 flex flex-col items-center justify-center font-mono px-6 py-4 ">
                      <BerryCard key={b.berryId} berry={b} />
                    </div>
                  </div>
                </>
              );
            })
          : null}
      </div>
    </>
  );
};
