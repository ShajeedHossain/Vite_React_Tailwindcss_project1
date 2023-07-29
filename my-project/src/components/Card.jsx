/* eslint-disable react/prop-types */
const Card = (props) => {
  const {
    image,
    title,
    storage,
    users,
    send,
    amount,
    important = false,
  } = props;

  let container = important
    ? "w-full shadow-xl flex flex-col p-4 bg-gray-100 my-8 md:my-0 rounded-lg hover:scale-105 duration-300"
    : "w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300";

  let button = important
    ? "bg-black text-[#00df9a] w-[200px] mx-auto rounded-md font-medium my-6 px-6 py-3"
    : "bg-[#00df9a] w-[200px] mx-auto rounded-md font-medium my-6 px-6 py-3";

  return (
    <div className={container}>
      <img
        className="w-20 mx-auto mt-[-3rem] bg-white"
        src={image}
        alt={image}
      />
      <h2 className="text-2xl font-bold text-center py-8">{title}</h2>
      <p className="text-center text-4xl font-bold">{amount}</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 mt-8">{storage} Storage</p>
        <p className="py-2 border-b mx-8">{users} Granted User/s</p>
        <p className="py-2 border-b mx-8">Send up to {send}</p>
      </div>
      <button className={button}>Start Trial</button>
    </div>
  );
};
export default Card;
