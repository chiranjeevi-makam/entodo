const Button = (props) => { 
    const{class,text}=props;
  return <button className={class}>{text}</button>
   
};

const element =(
    <div className="background">
      <h1 className="head">Social Buttons</h1>
      <div className="buttons">
        <Button class="like" text="like"/>
        <Button class="comment" text="comment"/> 
        <Button class="share" text="share"/>
      </div>
    </div>
);

ReactDOM.render(element, document.getElementById("root"));
