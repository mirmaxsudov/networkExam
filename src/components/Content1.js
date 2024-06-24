import PropTypes from "prop-types";

const Content1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-13xl text-brand-yellow-dark font-title-title-s ${className}`}
    >
      <div className="w-[1120px] flex flex-col items-start justify-start gap-[28px] max-w-full">
        <div className="w-[552px] flex flex-col items-start justify-start gap-[4px] max-w-full">
          <h1 className="m-0 relative text-inherit leading-[42px] font-extrabold font-inherit mq450:text-lgi mq450:leading-[25px] mq1000:text-7xl mq1000:leading-[33px]">
            Uhu! Confirmed order
          </h1>
          <div className="self-stretch relative text-xl leading-[130%] font-text-regular-m text-base-subtitle mq450:text-base mq450:leading-[21px]">
            Now just wait and the coffee will reach you soon )
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] text-base text-base-text font-text-regular-m mq1050:flex-wrap">
          <div className="w-[526px] flex flex-col items-start justify-end pt-0 px-0 pb-[11px] box-border min-w-[526px] max-w-full mq1050:flex-1 mq725:min-w-full">
            <div className="self-stretch rounded-tl-md rounded-tr-17xl rounded-br-md rounded-bl-17xl flex flex-col items-start justify-start py-[38px] pr-[217px] pl-[39px] gap-[32px] border-[1px] border-solid border-brand-yellow mq725:gap-[16px] mq725:pr-[108px] mq725:box-border mq450:pr-5 mq450:box-border">
              <div className="self-stretch flex flex-row items-center justify-start gap-[12px] mq450:flex-wrap">
                <div className="h-8 w-8 rounded-981xl bg-brand-purple flex flex-row items-center justify-center p-2 box-border">
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/icon-22.svg"
                  />
                </div>
                <div className="relative leading-[130%]">
                  <p className="m-0">
                    <span className="font-text-regular-m">{`Entrega em `}</span>
                    <b>Shota Rustaveli, 87</b>
                  </p>
                  <p className="m-0">Yakkasaroy Region</p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <div className="h-8 w-8 rounded-981xl bg-brand-yellow flex flex-row items-center justify-center p-2 box-border">
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/icon-4.svg"
                  />
                </div>
                <div className="relative leading-[130%]">
                  <p className="m-0">Delivery time</p>
                  <p className="m-0">
                    <b>{`20 min - 30 min `}</b>
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <div className="h-8 w-8 rounded-981xl bg-brand-yellow-dark flex flex-row items-center justify-center p-2 box-border">
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/icon-42.svg"
                  />
                </div>
                <div className="relative leading-[130%]">
                  <p className="m-0">Pay on delivery</p>
                  <p className="m-0">
                    <b>Credit card</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            className="w-[492px] relative max-h-full overflow-hidden shrink-0 max-w-full mq1050:flex-1"
            loading="lazy"
            alt=""
            src="/illustration.svg"
          />
        </div>
      </div>
    </section>
  );
};

Content1.propTypes = {
  className: PropTypes.string,
};

export default Content1;
