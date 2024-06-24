import { useCallback } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import CoffeeCard2 from "../components/CoffeeCard2";
import CoffeeCard1 from "../components/CoffeeCard1";

const CoffeeDeliveryCheckout = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/coffee-delivery-checkout-filled");
  }, [navigate]);

  return (
    <div className="w-full relative bg-base-background overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-60 box-border gap-[40px] leading-[normal] tracking-[normal] mq925:gap-[20px]">
      <Navbar />
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-lg text-base-subtitle font-title-title-s">
        <div className="w-[1120px] flex flex-col items-start justify-start gap-[15px] max-w-full">
          <div className="w-[808px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
            <b className="relative leading-[130%]">Complete your order</b>
            <b className="relative leading-[130%]">Selected coffees</b>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[32px] max-w-full text-base font-text-regular-m mq700:gap-[16px] mq925:flex-wrap">
            <div
              className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[416px] max-w-full cursor-pointer mq700:min-w-full"
              onClick={onFrameContainerClick}
            >
              <div className="self-stretch rounded-md bg-base-card flex flex-col items-start justify-start p-10 box-border gap-[32px] max-w-full mq450:pt-[26px] mq450:pb-[26px] mq450:box-border mq700:gap-[16px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[8px] max-w-full mq700:flex-wrap">
                  <img
                    className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/icon-21.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[2px] min-w-[344px] max-w-full mq700:min-w-full">
                    <div className="self-stretch relative leading-[21px]">
                      Delivery address
                    </div>
                    <div className="self-stretch relative text-sm leading-[21px] text-base-text">
                      Enter the address where you would like to receive your
                      order
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-sm text-base-label">
                  <div className="w-[200px] rounded bg-base-input box-border flex flex-row items-center justify-start py-2.5 px-[11px] gap-[4px] border-[1px] border-solid border-base-button">
                    <div className="flex-1 relative leading-[130%]">
                      Phone Number
                    </div>
                    <i className="w-[46px] relative text-xs leading-[130%] hidden">
                      Opcional
                    </i>
                  </div>
                  <div className="self-stretch rounded bg-base-input box-border flex flex-row items-center justify-start py-2.5 px-[11px] gap-[4px] max-w-full border-[1px] border-solid border-base-button">
                    <div className="flex-1 relative leading-[130%] inline-block max-w-full">
                      Street
                    </div>
                    <i className="w-[46px] relative text-xs leading-[130%] hidden">
                      Opcional
                    </i>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[12px] max-w-full mq700:flex-wrap">
                    <div className="w-[200px] rounded bg-base-input box-border flex flex-row items-center justify-start py-2.5 px-[11px] gap-[4px] border-[1px] border-solid border-base-button">
                      <div className="flex-1 relative leading-[130%]">
                        Home Number
                      </div>
                      <i className="w-[46px] relative text-xs leading-[130%] hidden">
                        Opcional
                      </i>
                    </div>
                    <div className="flex-1 rounded bg-base-input box-border flex flex-row items-center justify-start py-2.5 px-[11px] gap-[4px] min-w-[226px] max-w-full border-[1px] border-solid border-base-button mq450:flex-wrap">
                      <div className="flex-1 relative leading-[130%] inline-block min-w-[58px]">
                        Additionally
                      </div>
                      <i className="relative text-xs leading-[16px] inline-block min-w-[44px]">
                        Optional
                      </i>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[12px] max-w-full mq700:flex-wrap">
                    <div className="flex-1 rounded bg-base-input box-border flex flex-row items-center justify-start py-2.5 px-[11px] gap-[4px] min-w-[317px] max-w-full border-[1px] border-solid border-base-button">
                      <div className="flex-1 relative leading-[130%] inline-block max-w-full">
                        Region
                      </div>
                      <i className="w-[46px] relative text-xs leading-[130%] hidden">
                        Opcional
                      </i>
                    </div>
                    <div className="w-[60px] rounded bg-base-input box-border flex flex-row items-center justify-start py-2.5 px-[11px] gap-[4px] border-[1px] border-solid border-base-button">
                      <div className="flex-1 relative leading-[130%]">St</div>
                      <i className="w-[46px] relative text-xs leading-[130%] hidden">
                        Opcional
                      </i>
                    </div>
                  </div>
                </div>
              </div>
              <CoffeeCard2 />
            </div>
            <div className="w-[448px] rounded-tl-md rounded-tr-25xl rounded-br-md rounded-bl-25xl bg-base-card flex flex-col items-start justify-start p-10 box-border gap-[24px] min-w-[448px] max-w-full text-right text-sm text-base-text mq700:pt-[26px] mq700:pb-[26px] mq700:box-border mq700:min-w-full mq925:flex-1">
              <CoffeeCard1
                coffee="/coffee1@2x.png"
                expressoTradicional="Espresso Traditional"
                r990="$ 9,90"
              />
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full"
                loading="lazy"
                alt=""
                src="/divider.svg"
              />
              <CoffeeCard1
                coffee="/coffee-14@2x.png"
                expressoTradicional="Latte"
                r990="$ 19,80"
                propDisplay="inline-block"
                propMinWidth="37px"
                propMinWidth1="54px"
              />
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full"
                loading="lazy"
                alt=""
                src="/divider.svg"
              />
              <div className="self-stretch flex flex-col items-start justify-center gap-[12px]">
                <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                  <div className="relative leading-[130%] inline-block min-w-[70px]">
                    Total items
                  </div>
                  <div className="relative text-base leading-[21px] inline-block min-w-[53px] whitespace-nowrap">
                    $ 29,70
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                  <div className="w-[50px] relative leading-[130%] flex items-center min-w-[50px]">
                    Delivery
                  </div>
                  <div className="relative text-base leading-[21px] inline-block min-w-[44px] whitespace-nowrap">
                    $ 3,50
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-xl text-base-subtitle mq450:flex-wrap">
                  <h3 className="m-0 relative text-inherit leading-[130%] font-bold font-inherit inline-block min-w-[45px] mq450:text-base mq450:leading-[21px]">
                    Total
                  </h3>
                  <b className="relative leading-[130%] inline-block min-w-[68px] whitespace-nowrap mq450:text-base mq450:leading-[21px]">
                    $ 33,20
                  </b>
                </div>
              </div>
              <div className="self-stretch rounded-md bg-brand-yellow flex flex-row items-center justify-center py-3 px-5 whitespace-nowrap text-left text-base-white">
                <b className="relative leading-[160%] uppercase inline-block min-w-[110px]">
                  Confirm order
                </b>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoffeeDeliveryCheckout;
