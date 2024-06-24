import PropTypes from "prop-types";

const Content = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-8 box-border max-w-full text-left text-29xl text-base-title font-title-title-s ${className}`}
    >
      <div className="flex-1 overflow-hidden flex flex-row items-start justify-start py-[92px] px-40 box-border relative gap-[56px] max-w-full mq800:py-[60px] mq800:px-10 mq800:box-border mq1325:flex-wrap mq1325:gap-[28px] mq1325:pl-20 mq1325:pr-20 mq1325:box-border">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full max-h-full flex items-center justify-center z-[0]">
          <img
            className="h-full w-full overflow-hidden object-contain absolute left-[0px] top-[0px] [transform:scale(1.588)]"
            alt=""
            src="/background.svg"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[382px] max-w-full mq800:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[66px] max-w-full mq800:gap-[33px] mq450:gap-[16px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-extrabold font-inherit z-[1] mq800:text-19xl mq800:leading-[50px] mq450:text-10xl mq450:leading-[37px]">
                Find the perfect coffee for any time of day
              </h1>
              <h1 className="m-0 self-stretch relative text-xl leading-[130%] font-normal font-text-regular-m text-base-subtitle z-[1] mq450:text-base mq450:leading-[21px]">
                With Coffee Delivery you receive your coffee wherever you are,
                anytime
              </h1>
            </div>
            <div className="w-[565px] flex flex-col items-start justify-start gap-[20px] max-w-full text-base text-base-text font-text-regular-m">
              <div className="self-stretch flex flex-row items-start justify-start gap-[40px] mq800:flex-wrap mq800:gap-[20px]">
                <div className="flex flex-row items-start justify-start gap-[12px]">
                  <div className="h-8 w-8 rounded-981xl bg-brand-yellow-dark flex flex-row items-center justify-center p-2 box-border z-[1]">
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/icon-2.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0">
                    <h2 className="m-0 relative text-inherit leading-[21px] font-normal font-inherit z-[1]">
                      Easy and safe purchase
                    </h2>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-start justify-start gap-[12px] min-w-[191px]">
                  <div className="h-8 w-8 rounded-981xl bg-base-text flex flex-row items-center justify-center p-2 box-border z-[1]">
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/icon-3.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0">
                    <h2 className="m-0 relative text-inherit leading-[21px] font-normal font-inherit z-[1]">
                      Packaging keeps the coffee intact
                    </h2>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[40px] mq800:flex-wrap mq800:gap-[20px]">
                <div className="flex flex-row items-start justify-start gap-[12px]">
                  <div className="h-8 w-8 rounded-981xl bg-brand-yellow flex flex-row items-center justify-center p-2 box-border z-[1]">
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/icon-4.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0">
                    <h2 className="m-0 relative text-inherit leading-[21px] font-normal font-inherit z-[1]">
                      Fast and tracked delivery
                    </h2>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-start justify-start gap-[12px] min-w-[191px]">
                  <div className="h-8 w-8 rounded-981xl bg-brand-purple flex flex-row items-center justify-center p-2 box-border z-[1]">
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/icon-5.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0">
                    <h2 className="m-0 relative text-inherit leading-[21px] font-normal font-inherit z-[1]">
                      The coffee arrives fresh to you
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-[476px] relative max-h-full object-contain max-w-full z-[1] mq1325:flex-1"
          loading="lazy"
          alt=""
          src="/imagem@2x.png"
        />
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
