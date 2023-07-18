import { useContext, useEffect, useState } from "react";
import { MyContext } from "../MyContaxt";

const SubChildB = () => {
  const { data, setData, editableData, id, setId } = useContext(MyContext);
  const [quote, setQuote] = useState("");
  console.log(123, editableData);
  const handleChange = (e) => {
    setQuote(e.target.value);
  };

  const handleText = () => {
    if (id) {
      data.splice(id - 1, 1, quote);
    } else {
      setData([...data, quote]);
    }
    setQuote("");
    setId("");
  };

  useEffect(() => {
    if (editableData) {
      setQuote(editableData);
    }
  }, [editableData]);

  return (
    <>
      <div className="child_component">
        <h5>Sub Child B</h5>
        <input
          type="text"
          placeholder="Enter Your Text"
          onChange={handleChange}
          value={quote}
        />
        <button onClick={handleText}>{id ? "Update" : "add"}</button>
      </div>
    </>
  );
};

export default SubChildB;
