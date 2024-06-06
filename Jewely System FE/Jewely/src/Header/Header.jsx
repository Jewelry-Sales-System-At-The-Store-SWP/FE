
const Header = () => {
    return (
            <button className="cursor-pointer [border:none] py-[13px] pr-[22px] pl-6 bg-cornflowerblue shadow-[0px_6.3px_37.5px_rgba(226,_236,_249,_0.5)] rounded-[18.75px] flex flex-row items-start justify-start whitespace-nowrap hover:bg-royalblue-200">
                <img
                    className="h-[39px] w-[153px] relative rounded-[18.75px] hidden"
                    alt=""
                    src="/rectangle-30.svg"
                />
                <div className="relative text-xs tracking-[0.5px] leading-[13px] font-poppins text-darkslategray-100 text-left inline-block min-w-[106.2px] z-[1]">{`Delicious Burger `}</div>
            </button>
    );
};

export default Header;