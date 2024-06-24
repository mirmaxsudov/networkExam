import Content1 from "../components/Content1";

const CoffeeDeliverySuccess = () => {
  return (
    <div className="w-full relative bg-base-background overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[436px] box-border gap-[80px] leading-[normal] tracking-[normal] mq725:gap-[40px] mq450:gap-[20px]">
      <header className="self-stretch bg-base-background flex flex-row items-center justify-between py-8 px-40 top-[0] z-[99] sticky gap-[20px] text-left text-sm text-brand-purple-dark font-text-regular-m mq725:pl-20 mq725:pr-20 mq725:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
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
            <div className="relative leading-[130%]">
              Sergeli, PDP University
            </div>
          </div>
          <div className="rounded-md bg-brand-yellow-light flex flex-row items-center justify-center p-2">
            <img
              className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/icon-1.svg"
            />
          </div>
        </div>
      </header>
      <Content1 />
    </div>
  );
};

export default CoffeeDeliverySuccess;
