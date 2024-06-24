import PropTypes from "prop-types";

const Navbar = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch bg-base-background flex flex-row items-center justify-between py-8 px-40 top-[0] z-[99] sticky gap-[20px] text-left text-sm text-brand-purple-dark font-text-regular-m mq450:pl-5 mq450:pr-5 mq450:box-border mq700:pl-20 mq700:pr-20 mq700:box-border ${className}`}
    >
      <img
        className="self-stretch w-[85px] relative max-h-full min-h-[40px]"
        loading="lazy"
        alt=""
        src="/logo.svg"
      />
      <div className="h-[38px] flex flex-row items-center justify-end gap-[12px]">
        <div className="rounded-md bg-brand-purple-light flex flex-row items-center justify-center p-2 gap-[4px] whitespace-nowrap">
          <img
            className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/icon.svg"
          />
          <div className="relative leading-[130%] whitespace-nowrap">
            Sergeli, PDP University
          </div>
        </div>
        <div className="self-stretch w-[38px] rounded-md bg-brand-yellow-light flex flex-row items-center justify-center pt-0 pb-2 pr-0 pl-2 box-border relative gap-[4px] text-center text-xs text-base-white">
          <img
            className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/icon-1.svg"
          />
          <div className="w-5 !m-[0] absolute top-[-8px] right-[-8.3px] rounded-981xl bg-brand-yellow-dark flex flex-row items-center justify-center py-0.5 px-0 box-border z-[1]">
            <b className="flex-1 relative tracking-[-0.06em] leading-[16px]">
              3
            </b>
          </div>
        </div>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
