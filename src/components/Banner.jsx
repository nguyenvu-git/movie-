export default function Banner() {
  return (
    <>
      <div className="w-full bg-[url('/bgb3.png')] bg-center bg-cover lg:h-screen sm:h-[90%] h-[400px] bg-no- mt-22">
       <div className="flex w-full sm:w-[80%] mx-auto gap-7">
            <div className="w-[70%] sm:p-0 p-4 ">
              <p className="font-bold text-white sm:mt-10 text-[42px] lg:mt-20">Squid Game Concept</p>
              <div className="flex gap-1 w-4 mt-2">
                <img src="/star.svg" alt="" className="" />
                <img src="/star.svg" alt="" className="" />
                <img src="/star.svg" alt="" className="" />
                <img src="/star.svg" alt="" className="" />
                <img src="/star.svg" alt="" className="" />
              </div>
              <p className="text-white text-[18px] mt-6">224,767 votes</p>
              <p className="text-white  mt-6 sm:text-[16px] text-[12px] sm:block hidden">
                Squid Game (Korean: 오징어 게임; RR: Ojing-eo Geim) is a South
                Korean survival drama television series created by Hwang Dong-hyuk
                for Netflix. The series revolves around a contest in which 456
                players, drawn from different walks of life but each deeply in debt,
                play a series of children's games for the chance to win a ₩45.6
                billion[a] prize, with a deadly penalty if they lose. The name of
                the series draws from a similarly named Korean children's game. Its
                cast includes Lee Jung-jae, Park Hae-soo, Wi Ha-joon, Jung Ho-yeon,
                O Yeong-su, Heo Sung-tae, Anupam Tripathi, and Kim Joo-ryoung.
              </p>
              <div className="flex mt-6 gap-4 sm:pb-6 lg:pb-0">
                <button className="cursor-pointer bg-black text-white font-medium sm:px-6 sm:py-4 px-4 py-2 rounded-2xl text-[12px] sm:text-[16px]">Chi tiết</button>
                <button className="cursor-pointer bg-red-500 text-white font-medium sm:px-6 sm:py-4 px-4 py-2 rounded-2xl text-[12px] sm:text-[16px]">Xem phim</button>
              </div>
            </div>
            <div className="mt-20 w-[30%] h-[63%] lg:block hidden ">
              <img className="w-full h-full bg-cover bg-center" src="/banner3.png" alt="" />
            </div>
       </div>
      </div>
    </>
  );
}
