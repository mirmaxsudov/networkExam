import { useMemo } from "react";
import PropTypes from "prop-types";

const CoffeeCard2 = ({
  className = "",
  propBackgroundColor,
  propBorder,
  propFlex,
  propFlex1,
}) => {
  const selectStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      border: propBorder,
    };
  }, [propBackgroundColor, propBorder]);

  const select1Style = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const select2Style = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  return (
    <div
      className={`self-stretch rounded-md bg-base-card flex flex-col items-start justify-start p-10 box-border gap-[32px] max-w-full text-left text-base text-base-subtitle font-text-regular-m mq700:gap-[16px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-[8px] max-w-full mq700:flex-wrap">
        <img
          className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/icon-31.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[2px] min-w-[344px] max-w-full mq700:min-w-full">
          <div className="self-stretch relative leading-[21px]">Payment</div>
          <div className="self-stretch relative text-sm leading-[21px] text-base-text">
            Payment is made upon delivery. Choose the payment method
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center gap-[12px] text-xs text-base-text mq700:flex-wrap">
        <div
          className="flex-1 rounded-md bg-base-button flex flex-row items-center justify-start py-4 pr-[60px] pl-4 box-border gap-[12px] min-w-[90px] whitespace-nowrap"
          style={selectStyle}
        >
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/icon-41.svg"
          />
          <div className="relative leading-[160%] uppercase inline-block min-w-[74px]">
            Credit card
          </div>
        </div>
        <div
          className="flex-[0.9318] rounded-md bg-base-button flex flex-row items-center justify-start py-4 pr-[67px] pl-4 box-border gap-[12px] min-w-[90px] whitespace-nowrap mq450:flex-1"
          style={select1Style}
        >
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/icon-51.svg"
          />
          <div className="relative leading-[160%] uppercase inline-block min-w-[67px]">
            Debit card
          </div>
        </div>
        <div
          className="flex-[0.591] rounded-md bg-base-button flex flex-row items-center justify-start py-4 pr-[102px] pl-4 box-border gap-[12px] min-w-[90px] mq450:flex-1"
          style={select2Style}
        >
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/icon-61.svg"
          />
          <div className="relative leading-[160%] uppercase inline-block min-w-[32px]">
            Cash
          </div>
        </div>
      </div>
    </div>
  );
};

CoffeeCard2.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propBorder: PropTypes.any,
  propFlex: PropTypes.any,
  propFlex1: PropTypes.any,
};

export default CoffeeCard2;
