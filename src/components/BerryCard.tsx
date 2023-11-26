import { IBerryList } from "../interfaces/berry.interface";

interface BerryCardProps {
  berry: IBerryList;
}

export const BerryCard = ({ berry }: BerryCardProps) => {
  return (
    <>
      <div>
        <img className="p-8 rounded-t-lg" src={berry.image} alt={berry.name} />
      </div>
      <div className="font-bold text-xl mb-2 capitalize">{berry.name}</div>
    </>
  );
};
