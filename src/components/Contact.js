const Contact = (props) => {
  return (
    <>
      <div className="contact">
        {props.data.name}
        <br />
        {props.data.location}
        <br />
        {props.data.number}
      </div>
    </>
  );
};
export default Contact;
