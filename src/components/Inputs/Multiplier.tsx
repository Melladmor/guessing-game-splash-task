import { useDispatch, useSelector } from "react-redux";
import NumberInput from "./NumberInput";
import {
  miunsMultiplier,
  plusMultiplier,
  selectMultiplierVlaue,
  updateMultiplierState,
} from "../../redux/slices/multiplierSlice";
import { gameState } from "../../redux/slices/gameSlice";

const Multiplier = () => {
  const dispatch = useDispatch();
  const isButtonDisabled = useSelector(gameState).animation;
  const multiplierValue = useSelector(selectMultiplierVlaue).value;
  return (
    <NumberInput
      title="Multiplier"
      value={multiplierValue}
      onChange={(value) => dispatch(updateMultiplierState(value))}
      plus={() => dispatch(plusMultiplier())}
      minus={() => dispatch(miunsMultiplier())}
      disabled={isButtonDisabled}
    />
  );
};

export default Multiplier;
