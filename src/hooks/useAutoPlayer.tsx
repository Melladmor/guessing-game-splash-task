import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRanking } from "../redux/slices/gameSlice";

type ArgsAutoPlayerHook = {
  setState: (value: Player[]) => void;
};
const useAutoPlayer = (args: ArgsAutoPlayerHook) => {
  const { setState } = args;
  const dispatch = useDispatch();
  useEffect(() => {
    let autoPlayer: Player[] = [];

    let data: Player;
    for (let i = 1; i <= 5; i++) {
      data = {
        id: i,
        name: i === 1 ? "You" : `CPU ${i}`,
        point: "-",
        multiplier: "-",
        score: 0,
      };
      autoPlayer.push(data);
    }
    setState(autoPlayer);
    dispatch(setRanking(autoPlayer));
  }, []);
};

export default useAutoPlayer;
