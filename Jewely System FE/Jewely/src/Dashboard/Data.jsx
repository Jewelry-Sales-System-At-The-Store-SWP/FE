import { useMemo } from "react";

const CardSalesAnalytics = ({
  icon,
  sales,
  prop,
  prop1,
  div,
  propWidth,
  propMinWidth,
  propMinWidth1,
  propWidth1,
  propColor,
  propHeight,
}) => {
  const cardSalesAnalyticsStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const salesStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const bStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const divStyle = useMemo(() => {
    return {
      width: propWidth1,
      color: propColor,
      height: propHeight,
    };
  }, [propWidth1, propColor, propHeight]);

  return (
    <div
      className="w-[253px] shrink-0 flex flex-row items-start justify-start py-7 px-6 box-border relative text-left text-xs text-greyscale-500 font-body-medium-bold"
      style={cardSalesAnalyticsStyle}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl bg-additional-white" />
      <div className="flex flex-row items-center justify-start gap-[16px] z-[1]">
        <img
          className="h-12 w-12 relative rounded-xl overflow-hidden shrink-0 min-h-[48px]"
          loading="lazy"
          alt=""
          src={icon}
        />
        <div className="flex flex-col items-start justify-start gap-[4px]">
          <div
            className="relative leading-[160%] font-medium inline-block min-w-[32px]"
            style={salesStyle}
          >
            {sales}
          </div>
          <div className="flex flex-row items-center justify-start gap-[8px] text-lg text-greyscale-900">
            <b
              className="relative tracking-[0.2px] leading-[140%] inline-block min-w-[92px] whitespace-nowrap"
              style={bStyle}
            >
              {prop}
            </b>
            {!div && (
              <div
                className="w-[31px] relative text-xs leading-[160%] font-medium text-secondary-algal-fuel-500-base hidden"
                style={divStyle}
              >
                {prop1}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSalesAnalytics;