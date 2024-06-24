import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Content from "../components/Content";
import CoffeeList from "../components/CoffeeList";

const CoffeeDeliveryHome = () => {
  const navigate = useNavigate();

  const onCartContainerClick = useCallback(() => {
    navigate("/coffee-delivery-checkout");
  }, [navigate]);

  return (
    <div className="w-full relative bg-base-background overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-px box-border leading-[normal] tracking-[normal] text-left text-3xs text-brand-yellow-dark font-text-regular-m">
      <header className="self-stretch bg-base-background flex flex-row items-center justify-between py-8 px-40 top-[0] z-[99] sticky gap-[20px] text-left text-sm text-brand-purple-dark font-text-regular-m mq800:pl-20 mq800:pr-20 mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <img
          className="self-stretch w-[85px] relative max-h-full min-h-[40px]"
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
        <div className="flex flex-row items-center justify-end gap-[12px]">
          <div className="rounded-md bg-brand-purple-light flex flex-row items-center justify-center p-2 gap-[4px] whitespace-nowrap">
            <img
              className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/icon.svg"
            />
            <h3 className="m-0 relative text-inherit leading-[130%] font-normal font-inherit">
              Sergeli, PDP University
            </h3>
          </div>
          <div
            className="rounded-md bg-brand-yellow-light flex flex-row items-center justify-center p-2 cursor-pointer"
            onClick={onCartContainerClick}
          >
            <img
              className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
              alt=""
              src="/icon-1.svg"
            />
          </div>
        </div>
      </header>
      <div className="w-[54px] h-[21px] rounded-81xl bg-brand-yellow-light hidden" />
      <div className="w-[54px] h-[21px] rounded-81xl bg-brand-yellow-light hidden" />
      <div className="w-[407px] hidden flex-row flex-wrap items-center justify-start gap-[8px] max-w-full">
        <div className="flex-1 rounded-81xl box-border flex flex-row items-start justify-start py-1 px-[11px] min-w-[58px] border-[1px] border-solid border-brand-yellow">
          <b className="relative leading-[130%] uppercase">Tradicional</b>
        </div>
        <div className="rounded-81xl flex flex-row items-start justify-start py-1 px-[11px] border-[1px] border-solid border-brand-yellow">
          <b className="relative leading-[130%] uppercase">especial</b>
        </div>
        <div className="rounded-81xl flex flex-row items-start justify-start py-1 px-[11px] whitespace-nowrap border-[1px] border-solid border-brand-yellow">
          <b className="relative leading-[130%] uppercase">com leite</b>
        </div>
        <div className="rounded-81xl flex flex-row items-start justify-start py-1 px-[11px] border-[1px] border-solid border-brand-yellow">
          <b className="relative leading-[130%] uppercase">alcoólico</b>
        </div>
        <div className="rounded-81xl flex flex-row items-start justify-start py-1 px-[11px] border-[1px] border-solid border-brand-yellow">
          <b className="relative leading-[130%] uppercase">gelado</b>
        </div>
      </div>
      <Content />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[54px] box-border max-w-full text-left text-13xl text-base-subtitle font-title-title-s mq800:pb-[23px] mq800:box-border mq1325:pb-[35px] mq1325:box-border">
        <div className="w-[1120px] flex flex-col items-start justify-start gap-[54px] max-w-full mq800:gap-[27px]">
          <h1 className="m-0 relative text-inherit leading-[42px] font-extrabold font-inherit mq800:text-7xl mq800:leading-[33px] mq450:text-lgi mq450:leading-[25px]">
            Our caffees
          </h1>
          <CoffeeList />
        </div>
      </section>
      <footer className="self-stretch bg-dimgray overflow-hidden flex flex-row items-start justify-start pt-9 px-[402px] pb-[17px] gap-[18.7px] text-left text-sm text-base-white font-title-title-s mq800:pl-[100px] mq800:pr-[100px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1325:flex-wrap mq1325:justify-center mq1325:pl-[201px] mq1325:pr-[201px] mq1325:box-border">
        <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
          <h3 className="m-0 relative text-inherit leading-[130%] font-extrabold font-inherit whitespace-nowrap">
            info@coffeedelivery.com
          </h3>
        </div>
        <div className="h-[25px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
          <div className="w-0.5 h-[22px] relative box-border border-r-[2px] border-solid border-base-white" />
        </div>
        <div className="flex flex-col items-start justify-start gap-[13px] text-5xl">
          <div className="flex flex-row items-start justify-start gap-[20px]">
            <h1 className="m-0 relative text-inherit leading-[24px] font-extrabold font-inherit mq450:text-lgi mq450:leading-[25px]">
              Contact Information
            </h1>
            <div className="h-[25px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
              <div className="w-0.5 h-[22px] relative box-border border-r-[2px] border-solid border-base-white" />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[55px] text-xs text-goldenrod">
            <div className="relative leading-[11px] font-extrabold inline-block min-w-[114px]">
              Made “22-303 Group”
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
          <div className="relative leading-[130%] font-extrabold inline-block min-w-[122px]">
            +998 (90) 164-01-67
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CoffeeDeliveryHome;
