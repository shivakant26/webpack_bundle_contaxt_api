import { useContext } from "react";
import { MyContext } from "../MyContaxt";

const Home = () => {
  const { theme, toggleTheme } = useContext(MyContext);
  const {data , setData} = useContext(MyContext)
  const editdata = (id) =>{
    console.log("Component A",id)
  }
  return (
    <>
      <div className={`child_component ${theme}`}>
        <h5>Home Componet</h5>
        <button onClick={toggleTheme}>Toggle Theme</button>
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

export default Home;
