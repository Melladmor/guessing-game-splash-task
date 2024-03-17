import { useDispatch, useSelector } from "react-redux";
import NumberInput from "./NumberInput";
import {
  miunsPoint,
  plusPoints,
  selectPointsVlaue,
  updatePointsState,
} from "../../redux/slices/pointsSlice";
import { gameState } from "../../redux/slices/gameSlice";

const Points = () => {
  const dispatch = useDispatch();
  const isButtonDisabled = useSelector(gameState).animation;

  const pointsValue = useSelector(selectPointsVlaue).value;
  const userPoints = useSelector(gameState).points;

  return (
    <NumberInput
      title="Points"
      value={pointsValue}
      onChange={(value) => dispatch(updatePointsState(value))}
      plus={() => dispatch(plusPoints(userPoints))}
      minus={() => dispatch(miunsPoint())}
      disabled={isButtonDisabled}
    />
  );
};

export default Points;
