import React, { useState } from "react";
import BigButton from "../components/button/BigButton";
import BackCard from "../components/card/BackCard";
const FeedBackPage = () => {
  const [definite1, setDefinite1] = useState(false);
  const [definite2, setDefinite2] = useState(false);
  const [definite3, setDefinite3] = useState(false);
  const [definite4, setDefinite4] = useState(false);

  return (
    <>
      <div className="relative h-[calc(100vh-2.5vh)] w-full">
        <div className="m-4 grid grid-cols-10 gap-1">
          <div className="flex items-center justify-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                <div className=" h-12 w-12 bg-[url('./imgs/one.png')] bg-cover bg-no-repeat"></div>
              </div>
              <div className="w-16 rounded-lg bg-black text-center text-lg text-white">
                Allen
              </div>
            </div>
          </div>

          <div className="col-span-9 m-2 items-center justify-center rounded-lg bg-white p-4 text-lg font-medium text-black">
            哇賽新來的，你真的很幸運，今天剛好是開發B組的
            Retro，你也見識一下，看看Retro都該做些什麼吧~我們會在會議裡請團隊成員提出哪些是做得好的地方、哪些可以繼續改善的地方？並記錄再Confluence中。
          </div>

          <div className="col-start-2 col-end-11 m-2 content-center items-center rounded-lg bg-white p-4 text-xl text-black">
            請選擇適合 Retro的回饋卡！思考看看哪一張牌是『正面表述』呢？
          </div>
          <div className="col-start-2 col-end-6 m-2 rounded-lg p-4">
            <div className="text-center text-3xl text-white">做得好的地方</div>
            <div className="flex justify-center">
              <button onClick={() => setDefinite1(!definite1)}>
                <BackCard
                  value={"這次我幫了很多人救火耶"}
                  definite={definite1}
                />
              </button>
              <button onClick={() => setDefinite2(!definite2)}>
                <BackCard
                  value={
                    "大家在開發上都會互相 cover，讓任務都有準時在時間內完成。"
                  }
                  definite={definite2}
                />
              </button>
            </div>
          </div>
          <div className="col-start-7 col-end-11 m-2 rounded-lg p-4">
            <div className="text-center text-3xl text-white">
              有哪些可以做得更好？
            </div>
            <div className="flex justify-center">
              <button onClick={() => setDefinite3(!definite3)}>
                <BackCard
                  value={"可以記錄這次的開發時間，讓預估團隊點數可以更精準。"}
                  definite={definite3}
                />
              </button>
              <button onClick={() => setDefinite4(!definite4)}>
                <BackCard
                  value={"開發時間預估不準確，請後端下次改進，避免Delay到我。"}
                  definite={definite4}
                />
              </button>
            </div>
          </div>
        </div>

        <BigButton
          className="absolute bottom-[0.5%] right-[5%]"
          value={"我想我了解了"}
          to={"/f2e_week_3/finish"}
        ></BigButton>
      </div>
    </>
  );
};

export default FeedBackPage;
