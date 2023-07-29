import Double from "../assets/double.png";
import Single from "../assets/single.png";
import Triple from "../assets/triple.png";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <Card
          title="Single User"
          image={Single}
          amount="149$"
          users="1"
          storage="500GB"
          send="2GB"
        />
        <Card
          title="Partnership"
          image={Double}
          amount="189$"
          users="3"
          storage="1TB"
          send="10GB"
          important
        />
        <Card
          title="Group Account"
          image={Triple}
          amount="249$"
          users="10"
          storage="5TB"
          send="20GB"
        />
      </div>
    </div>
  );
};
export default Cards;
