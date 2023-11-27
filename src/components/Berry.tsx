import useBerries from "../hooks/useBerries";
import { BerryList } from "./BerryList";
export const Berry = () => {
  const { berries } = useBerries();
  return <BerryList berries={berries}></BerryList>;
};
