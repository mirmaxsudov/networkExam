import { useMemo } from "react";
import PropTypes from "prop-types";

const CoffeeCard1 = ({
  className = "",
  coffee,
  expressoTradicional,
  r990,
  propDisplay,
  propMinWidth,
  propMinWidth1,
}) => {
  const expressoTradicionalStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const r990Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className={`self-stretch bg-base-card flex flex-row items-start justify-between py-2 px-1 gap-[20px] text-left text-base text-base-subtitle font-text-regular-m mq450:flex-wrap ${className}`}
    >
      <div className="flex flex-row items-center justify-start gap-[20px] mq450:flex-wrap">
        <img
          className="h-16 w-16 relative object-cover min-h-[64px]"
          loading="lazy"
          alt=""
          src={coffee}
        />
        <div className="flex flex-col items-start justify-start gap-[8px]">
          <div
            className="relative leading-[21px]"
            style={expressoTradicionalStyle}
          >
            {expressoTradicional}
          </div>
          <div className="flex flex-row items-center justify-start gap-[8px] text-center text-base-title">
            <div className="w-[72px] rounded-md bg-base-button flex flex-row items-center justify-center py-[5.5px] px-2 box-border gap-[4px]">
              <img
                className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/icon-6.svg"
              />
              <div className="flex-1 relative leading-[21px]">1</div>
              <img
                className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/icon-7.svg"
              />
            </div>
            <div className="rounded-md bg-base-button flex flex-row items-center justify-center py-[6.5px] px-2 gap-[4px] text-left text-xs text-base-text">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                alt=""
                src="/icon-9.svg"
              />
              <div className="relative leading-[160%] uppercase inline-block min-w-[48px]">
                Remove
              </div>
            </div>
          </div>
        </div>
      </div>
      <b
        className="relative leading-[21px] inline-block text-base-text text-right min-w-[45px] whitespace-nowrap"
        style={r990Style}
      >
        {r990}
      </b>
    </div>
  );
};

CoffeeCard1.propTypes = {
  className: PropTypes.string,
  coffee: PropTypes.string,
  expressoTradicional: PropTypes.string,
  r990: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default CoffeeCard1;
