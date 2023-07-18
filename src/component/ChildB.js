import SubChildA from "./SubChildA";
import SubChildB from "./SubChildB";

const ChildB = () => {
  return (
    <>
      <div className="child_component">
        <h5>Child B</h5>
        <SubChildA />
        <SubChildB />
      </div>
    </>
  );
};

export default ChildB;
