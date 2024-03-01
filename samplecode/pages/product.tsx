const Product = (props: any) => {
  const { updateCounter } = props;
  return (
    <>
      <button onClick={() => updateCounter(1)}>Update C ount</button>
      {/* <div>
        <h3>Example 1</h3>
        <p>John</p>
        <p>26</p>
      </div>
      <div>
        <h3>Example 333</h3>
        <p>Name= {props.name}</p>
        <p>Desc= {props.desc}</p>
        <p>{props.color}</p>
      </div> */}
    </>
  );
};

export default Product;
