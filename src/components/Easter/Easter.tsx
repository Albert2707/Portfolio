import Confetti from "react-confetti";
import { useWindowSize } from 'usehooks-ts'

const Easter = () => {
    const { width, height } = useWindowSize();
    return (
      <div>
        <Confetti width={width} height={height}/>
      </div>
    );
}

export default Easter