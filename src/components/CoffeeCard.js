import { useMemo } from "react";
import PropTypes from "prop-types";

const CoffeeCard = ({
  className = "",
  coffee,
  tradicional,
  quente,
  quente1,
  name1,
  description,
  showTag2,
  tag3,
  showIcon,
  propFlex,
  propFlex1,
  propMinWidth,
  propFlex2,
  propDisplay,
  propMinWidth1,
  propDisplay1,
  propMinWidth2,
  propOverflowX,
}) => {
  const tagsStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const tag1Style = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  const tradicionalStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const tag2Style = useMemo(() => {
    return {
      flex: propFlex2,
    };
  }, [propFlex2]);

  const quenteStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propDisplay, propMinWidth1]);

  const quente1Style = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth2,
    };
  }, [propDisplay1, propMinWidth2]);

  const counterStyle = useMemo(() => {
    return {
      overflowX: propOverflowX,
    };
  }, [propOverflowX]);

  return (
    <div
      className={`self-stretch rounded-tl-md rounded-tr-17xl rounded-br-md rounded-bl-17xl bg-base-card flex flex-col items-start justify-start pt-28 px-5 pb-5 relative gap-[33px] text-left text-3xs text-brand-yellow-dark font-text-regular-m mq450:gap-[16px] ${className}`}
    >
      <img
        className="w-[120px] h-[120px] absolute !m-[0] top-[-20px] left-[calc(50%_-_60px)] object-contain"
        alt=""
        src={coffee}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[46px]">
          <div
            className="flex flex-row items-start justify-start gap-[4px]"
            style={tagsStyle}
          >
            <div
              className="rounded-81xl bg-brand-yellow-light flex flex-row items-start justify-start py-1 px-2"
              style={tag1Style}
            >
              <b
                className="relative leading-[130%] uppercase inline-block min-w-[64px]"
                style={tradicionalStyle}
              >
                {tradicional}
              </b>
            </div>
            {showTag2 && (
              <div
                className="rounded-81xl bg-brand-yellow-light flex flex-row items-start justify-start py-1 px-2"
                style={tag2Style}
              >
                <b
                  className="relative leading-[130%] uppercase inline-block min-w-[24px]"
                  style={quenteStyle}
                >
                  {quente}
                </b>
              </div>
            )}
            {!tag3 && (
              <div className="rounded-81xl bg-brand-yellow-light hidden flex-row items-center justify-center py-1 px-2">
                <b
                  className="relative leading-[130%] uppercase"
                  style={quente1Style}
                >
                  {quente1}
                </b>
              </div>
            )}
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-center text-xl text-base-subtitle font-title-title-s">
          <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-inherit mq450:text-base mq450:leading-[21px]">
            {name1}
          </h1>
          <h3 className="m-0 self-stretch relative text-sm leading-[130%] font-normal font-text-regular-m text-base-label">
            {description}
          </h3>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-1 text-right text-sm text-base-text">
        <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
          <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
            <div className="relative leading-[130%] inline-block min-w-[58px] whitespace-nowrap">
              <span>{`$ `}</span>
              <span className="text-5xl font-extrabold font-title-title-s">
                9,90
              </span>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[8px] text-center text-base text-base-title">
            <div
              className="self-stretch rounded-md bg-base-button overflow-x-auto hidden flex-row items-center justify-center p-2 gap-[4px]"
              style={counterStyle}
            >
              {showIcon && (
                <img
                  className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon-6.svg"
                />
              )}
              <div className="h-[21px] w-5 relative leading-[130%] inline-block shrink-0">
                1
              </div>
              <img
                className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                alt=""
                src="/icon-7.svg"
              />
            </div>
            <div className="rounded-md bg-brand-purple-dark flex flex-row items-center justify-center p-2">
              <img
                className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
                alt=""
                src="/shoppingcartsimple.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  className: PropTypes.string,
  coffee: PropTypes.string,
  tradicional: PropTypes.string,
  quente: PropTypes.string,
  quente1: PropTypes.string,
  name1: PropTypes.string,
  description: PropTypes.string,
  showTag2: PropTypes.bool,
  tag3: PropTypes.bool,
  showIcon: PropTypes.bool,

  /** Style props */
  propFlex: PropTypes.any,
  propFlex1: PropTypes.any,
  propMinWidth: PropTypes.any,
  propFlex2: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propDisplay1: PropTypes.any,
  propMinWidth2: PropTypes.any,
  propOverflowX: PropTypes.any,
};

export default CoffeeCard;
