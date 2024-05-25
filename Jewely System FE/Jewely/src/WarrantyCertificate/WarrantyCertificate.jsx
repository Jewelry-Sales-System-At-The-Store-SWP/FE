const WarrantyCertificate = () => {
    return (
      <div className="w-full relative bg-dimgray overflow-hidden flex flex-row items-start justify-start p-[26px] box-border leading-[normal] tracking-[normal]">
        <section className="flex-1 rounded-17xl bg-whitesmoke overflow-hidden flex flex-col items-start justify-start pt-10 px-[50px] pb-[49px] box-border gap-[59px] max-w-full text-center text-[75px] text-darkslategray font-cormorant mq725:gap-[29px] mq1000:pt-[26px] mq1000:pb-8 mq1000:box-border mq1050:pl-[25px] mq1050:pr-[25px] mq1050:box-border">
          <div className="w-[1071px] h-[742px] relative rounded-17xl bg-whitesmoke hidden max-w-full" />
          <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq725:gap-[20px]">
            <h1 className="m-0 relative text-inherit leading-[83px] font-bold font-inherit inline-block max-w-full z-[2] mq450:text-[45px] mq450:leading-[49px] mq1000:text-[60px] mq1000:leading-[66px]">
              Warranty Certificate
            </h1>
            <div className="self-stretch flex flex-row items-start justify-center gap-[85px] max-w-full text-left text-5xl font-open-sans mq725:gap-[21px] mq1000:flex-wrap mq1000:gap-[42px]">
              <div className="flex-1 flex flex-row items-start justify-center gap-[32px] min-w-[382px] max-w-full mq725:flex-wrap mq725:gap-[16px] mq725:min-w-full">
                <div className="h-[417px] flex flex-col items-start justify-start gap-[16px] min-w-[211px] mq725:flex-1">
                  <b className="relative z-[2] mq450:text-lgi">Customer name:</b>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
                    <b className="relative z-[2] mq450:text-lgi">
                      Date of purchase:
                    </b>
                    <b className="relative z-[2] mq450:text-lgi">Jewelry Name:</b>
                    <b className="relative z-[2] mq450:text-lgi">ID number:</b>
                    <b className="relative z-[2] mq450:text-lgi">
                      Warranty Period:
                    </b>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[4px] text-lg">
                    <b className="relative z-[2]">Lucas Bradshaw</b>
                    <div className="relative z-[2]">Insurer's representative</div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[224px] max-w-full">
                  <div className="relative z-[2] mq450:text-lgi">
                    Dylan Aldridge
                  </div>
                  <div className="relative inline-block min-w-[123px] z-[2] mq450:text-lgi">
                    12.02.2024
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-px">
                    <div className="relative z-[2] mq450:text-lgi">
                      Diamond Ring
                    </div>
                  </div>
                  <div className="relative z-[2] mq450:text-lgi">
                    185769504956
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5">
                    <div className="relative z-[2] mq450:text-lgi">
                      from 12.02.2024 to 12.02.2027
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-start gap-[134px] min-w-[299px] text-center text-xl text-lightgray font-lato mq450:gap-[67px] mq1000:flex-1">
                <div className="w-[229px] flex flex-row items-start justify-start pt-[87px] px-[43px] pb-[94px] box-border relative z-[2]">
                  <img
                    className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                    loading="lazy"
                    alt=""
                    src="src/assets/objects.svg"
                  />
                  <div className="flex-1 relative uppercase font-medium z-[1] mq450:text-base">
                    Quality assurance
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[4px] text-left text-lg text-darkslategray font-open-sans">
                  <b className="relative z-[2]">Your company name</b>
                  <div className="relative z-[2]">
                    Phone number: + 1 (555) 586 - 7594
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-left text-xl font-open-sans">
            <div className="flex-1 relative inline-block max-w-full z-[2] mq450:text-base">
              The warranty is valid only in the presence of this certificate, as
              well as: original purchase document (receipt, invoice), correctly
              and completely filled out warranty card.
            </div>
            <div className="h-[794px] w-[1123px] absolute !m-[0] top-[-665px] right-[-78px]">
              <img
                className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                alt=""
                src="src/assets/group.svg"
              />
              <img
                className="absolute top-[492px] left-[76px] w-[108px] h-[58px] z-[2]"
                loading="lazy"
                alt=""
                src="src/assets/group-1.svg"
              />
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default WarrantyCertificate;
  