type Props = {}
export default function HowWeWork(props: Props) {

  return ( 
      <div className="container text-white mt-200px">
          <h3 className="font-transformer text-white lg:text-72px text-32px leading-55px ">How we work</h3>
          <div className="flex flex-col justify-center items-center">
            <div className="flex w-3/4">
                <div className="p-30px">
                    <span className="text-white text-36px leading-40px font-saira">invest</span>
                    <span className="text-white text-36px leading-40px font-saira">&</span>
                    <span className="text-white text-36px leading-40px font-saira">rent NFT</span>
                    <span></span>
                </div>
                <div>
                    <span className="text-white text-36px leading-40px font-saira">training</span>
                    <span className="text-white text-36px leading-40px font-saira">&</span>
                    <span className="text-white text-36px leading-40px font-saira">allocate resource</span>
                </div>
            </div>
            <div className="flex">
                <div>
                    <span className="text-white text-45px leading-50px font-saira font-black">Investor</span>
                </div>
                <div>
                    <span className="text-white text-45px leading-50px font-saira font-black">Lucid <br /> platform</span>
                </div>
                <div>
                    <span className="text-white text-45px leading-50px font-saira font-black">Scholar</span>
                </div>
            </div>
            <div className="flex">
                <div>
                    <span className="text-white text-36px leading-40px font-saira">share profit</span>
                </div>
                <div>
                    <span className="text-white text-36px leading-40px font-saira">Earn</span>
                    <span className="text-white text-36px leading-40px font-saira">&</span>
                    <span className="text-white text-36px leading-40px font-saira">sharing profit</span>
                </div>
            </div>
          </div>
      </div>
  )
 }