import classes from "./Page3.module.css";
// импорт картинки для элементов второй страницы




const Page3 = (props) => {
  return (
    <div className={classes.page3}>
      <p>{ props.text }</p>
    </div>
  );
};

export default Page3;