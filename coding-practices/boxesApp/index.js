const Box = (props) => {
  const{class,text}=props;
  return <div className={class}>
  <p>{text}</p>

  </div>
};

const element = (
  
      <h1>Komal</h1>

  
);

ReactDOM.render(element, document.getElementById("root"));
