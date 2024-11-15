const Title = ({ smallText, title, text }) => {
  return (
    <div className="text-center">
      <span className="text-primaryColor text-sm uppercase">{smallText}</span>
      <h2 className="text-white xs:text-5xl text-3xl my-2 mb-3">{title}</h2>
      <p className="text-grayColor text-sm">{text}</p>
    </div>
  );
};

export default Title;
