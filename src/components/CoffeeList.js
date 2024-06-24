import CoffeeCard1 from "./CoffeeCard1";
import CoffeeCard from "./CoffeeCard";
import PropTypes from "prop-types";

const CoffeeList = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-start justify-center gap-[32px] text-left text-3xs text-brand-yellow-dark font-text-regular-m mq800:gap-[16px] ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[40px] min-w-[236px] max-w-[256px] mq450:gap-[20px]">
        <div className="self-stretch h-[310px] relative">
          <CoffeeCard1 />
          <div className="absolute top-[112px] left-[88px] rounded-81xl bg-brand-yellow-light flex flex-row items-start justify-start py-1 px-2 z-[1]">
            <b className="relative leading-[130%] uppercase inline-block min-w-[64px]">
              Traditional
            </b>
          </div>
        </div>
        <CoffeeCard
          coffee="/coffee-1@2x.png"
          tradicional="Traditional"
          quente="milk"
          quente1="quente"
          name1="Coffee with milk"
          description="Half and half traditional espresso with steamed milk"
          showTag2
          tag3={false}
          showIcon
        />
        <CoffeeCard
          coffee="/coffee-2@2x.png"
          tradicional="Tradicional"
          quente="milk"
          quente1="quente"
          name1="Mocaccino"
          description="Espresso with chocolate syrup, little milk and foam"
          showTag2
          tag3={false}
          showIcon
          propFlex="unset"
          propFlex1="unset"
          propMinWidth="65px"
          propFlex2="unset"
          propDisplay="inline-block"
          propMinWidth1="24px"
          propDisplay1="unset"
          propMinWidth2="unset"
          propOverflowX="auto"
        />
        <CoffeeCard
          coffee="/coffee-3@2x.png"
          tradicional="especial"
          quente="quente"
          quente1="quente"
          name1="Arabic"
          description="Drink prepared with Arabic coffee beans and spices"
          showTag2={false}
          tag3={false}
          showIcon
          propFlex="unset"
          propFlex1="unset"
          propMinWidth="46px"
          propFlex2="unset"
          propDisplay="unset"
          propMinWidth1="unset"
          propDisplay1="unset"
          propMinWidth2="unset"
          propOverflowX="auto"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[40px] min-w-[236px] max-w-[256px] mq450:gap-[20px]">
        <CoffeeCard
          coffee="/coffee-4@2x.png"
          tradicional="Traditional"
          quente="quente"
          quente1="quente"
          name1="Espresso Americano"
          description="Diluted espresso, less intense than traditional"
          showTag2={false}
          tag3={false}
          showIcon
          propFlex="unset"
          propFlex1="unset"
          propMinWidth="64px"
          propFlex2="unset"
          propDisplay="unset"
          propMinWidth1="unset"
          propDisplay1="unset"
          propMinWidth2="unset"
          propOverflowX="auto"
        />
        <CoffeeCard
          coffee="/coffee-5@2x.png"
          tradicional="Traditional"
          quente="milk"
          quente1="quente"
          name1="Latte"
          description="A shot of espresso with double the milk and creamy foam"
          showTag2
          tag3={false}
          showIcon
          propFlex="unset"
          propFlex1="unset"
          propMinWidth="64px"
          propFlex2="unset"
          propDisplay="inline-block"
          propMinWidth1="24px"
          propDisplay1="unset"
          propMinWidth2="unset"
          propOverflowX="auto"
        />
        <CoffeeCard
          coffee="/coffee-6@2x.png"
          tradicional="especial"
          quente="milk"
          quente1="quente"
          name1="Hot chocolate"
          description="Drink made with chocolate dissolved in hot milk and coffee"
          showTag2
          tag3={false}
          showIcon
          propFlex="unset"
          propFlex1="unset"
          propMinWidth="46px"
          propFlex2="unset"
          propDisplay="inline-block"
          propMinWidth1="24px"
          propDisplay1="unset"
          propMinWidth2="unset"
          propOverflowX="auto"
        />
        <CoffeeCard
          coffee="/coffee-7@2x.png"
          tradicional="especial"
          quente="alcoólico"
          quente1="quente"
          name1="Irish"
          description="Coffee with Irish whiskey, sugar, and whipped cream"
          showTag2
          tag3={false}
          showIcon
          propFlex="unset"
          propFlex1="unset"
          propMinWidth="46px"
          propFlex2="unset"
          propDisplay="inline-block"
          propMinWidth1="54px"
          propDisplay1="unset"
          propMinWidth2="unset"
          propOverflowX="auto"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[40px] min-w-[236px] max-w-[256px] mq450:gap-[20px]">
        <CoffeeCard
          coffee="/coffee-8@2x.png"
          tradicional="Traditional"
          quente="quente"
          quente1="quente"
          name1="Creamy Espresso"
          description="Traditional espresso with creamy foam"
          showTag2={false}
          tag3={false}
          showIcon
          propFlex="unset"
          propFlex1="unset"
          propMinWidth="64px"
          propFlex2="unset"
          propDisplay="unset"
          propMinWidth1="unset"
          propDisplay1="unset"
          propMinWidth2="unset"
          propOverflowX="auto"
        />
        <CoffeeCard
          coffee="/coffee-9@2x.png"
          tradicional="Traditional"
          quente="milk"
          quente1="quente"
          name1="Capuccino"
          description="Cinnamon drink made from equal doses of coffee, milk and foam"
          showTag2
          tag3={false}
          showIcon
          propFlex="unset"
          propFlex1="unset"
          propMinWidth="64px"
          propFlex2="unset"
          propDisplay="inline-block"
          propMinWidth1="24px"
          propDisplay1="unset"
          propMinWidth2="unset"
          propOverflowX="auto"
        />
        <CoffeeCard
          coffee="/coffee-10@2x.png"
          tradicional="especial"
          quente="alcoólico"
          quente1="ICE"
          name1="Cubano"
          description="Iced espresso drink with rum, cream and mint"
          showTag2
          tag3
          showIcon
          propFlex="1"
          propFlex1="1"
          propMinWidth="46px"
          propFlex2="1"
          propDisplay="inline-block"
          propMinWidth1="54px"
          propDisplay1="inline-block"
          propMinWidth2="16px"
          propOverflowX="auto"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[40px] min-w-[236px] max-w-[256px] mq450:gap-[20px]">
        <CoffeeCard
          coffee="/coffee-11@2x.png"
          tradicional="Traditional"
          quente="ice "
          quente1="quente"
          name1="Iced Espresso"
          description="The drink is prepared with espresso and ice cubes"
          showTag2
          tag3={false}
          showIcon
          propFlex="unset"
          propFlex1="unset"
          propMinWidth="64px"
          propFlex2="unset"
          propDisplay="inline-block"
          propMinWidth1="16px"
          propDisplay1="unset"
          propMinWidth2="unset"
          propOverflowX="auto"
        />
        <CoffeeCard
          coffee="/coffee-12@2x.png"
          tradicional="Traditional"
          quente="milk"
          quente1="quente"
          name1="Macchiato"
          description="Espresso mixed with some hot milk and froth"
          showTag2
          tag3={false}
          showIcon
          propFlex="unset"
          propFlex1="unset"
          propMinWidth="64px"
          propFlex2="unset"
          propDisplay="inline-block"
          propMinWidth1="24px"
          propDisplay1="unset"
          propMinWidth2="unset"
          propOverflowX="auto"
        />
        <CoffeeCard
          coffee="/coffee-13@2x.png"
          tradicional="especial"
          quente="quente"
          quente1="quente"
          name1="Hawaiian"
          description="Sweet drink prepared with coffee and coconut milk"
          showTag2={false}
          tag3={false}
          showIcon={false}
          propFlex="unset"
          propFlex1="unset"
          propMinWidth="46px"
          propFlex2="unset"
          propDisplay="unset"
          propMinWidth1="unset"
          propDisplay1="unset"
          propMinWidth2="unset"
          propOverflowX="unset"
        />
      </div>
    </div>
  );
};

CoffeeList.propTypes = {
  className: PropTypes.string,
};

export default CoffeeList;
