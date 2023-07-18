import Home from "./component/Home";
import "./App.css";
import ChildB from "./component/ChildB";
import ChildC from "./component/ChildC";
import { MyContext } from "./MyContaxt";
import { useEffect, useState } from "react";
const App = () => {
  const [data, setData] = useState([]);
  const [editableData, setEditableData] = useState();
  const [id, setId] = useState();
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");
  const [translations, setTranslations] = useState({});

  const editdata = (id) => {
    console.log(555555555555, id);
    const object = data[id - 1];
    setEditableData(object);
    setId(id);
  };

  const deldata = (id) => {
    data.splice(id - 1, 1);
    setData([...data]);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div className={`App ${theme}`}>
      <MyContext.Provider
        value={{
          data,
          setData,
          editableData,
          id,
          setId,
          theme,
          toggleTheme,
          language,
          translations,
        }}
      >
        <h1>Parent component</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <h4 style={{ color: "#00b2e2" }}>An Example of Context Api</h4>
        {data?.map((item, index) => {
          return (
            <p key={index} style={{ color: "#ec6800" }}>
              {item} - <button onClick={() => editdata(index + 1)}>Edit</button>{" "}
              - <button onClick={() => deldata(index + 1)}>Delete</button>
            </p>
          );
        })}
        <div className="parent">
          <Home />
          <ChildB />
          <ChildC />
        </div>
      </MyContext.Provider>
    </div>
  );
};
export default App;
