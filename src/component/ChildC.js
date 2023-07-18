import { useContext } from "react";
import { MyContext } from "../MyContaxt";

const ChildC = () => {
  const {data , setData} = useContext(MyContext);
  const editdata = (id) =>{
    console.log("Component A",id)
  }
    return (
      <>
        <div className="child_component">
          <h5>Child C</h5>
          {data?.map((item, index) => {
          return (
            <p key={index} style={{ color: "#ec6800" }}>
              {item} - <button onClick={() => editdata(index)}>Edit</button> -{" "}
              <button>Delete</button>
            </p>
          );
        })}
        </div>
      </>
    );
  };
  
  export default ChildC;