import React, { useState } from "react";
import NavBarModal6 from "./NavBarModal6/NavBarModal6.jsx";
import NavBarModal7 from "./NavBarModal7/NavBarModal7.jsx";

const Navbar = () => {
  // 모달 표시 상태를 관리하는 state
  const [isModal6Visible, setIsModal6Visible] = useState(false);
  const [isModal7Visible, setIsModal7Visible] = useState(false);

  // AI제어 버튼 클릭 이벤트 핸들러
  const toggleModal6 = () => {
    if (isModal6Visible === false) {
      setIsModal6Visible(true);
    }
    if (isModal6Visible === true) {
      setIsModal6Visible(false);
    }
  };

  const toggleModal7 = () => {
    if (isModal7Visible === false) {
      setIsModal7Visible(true);
    }
    if (isModal7Visible === true) {
      setIsModal7Visible(false);
    }
  };

  return (
    <div className="relative whitespace-nowrap">
      <div className="bg-[#737165] h-[55px] flex items-center justify-between px-4">
        <div className="flex-1 flex row text-custom-color items-center space-x-4">
          {/* AI제어 버튼에 클릭 이벤트 핸들러를 바인딩합니다 */}
          <button onClick={toggleModal6} className="text-lg font-semibold">
            AI제어
          </button>
          <div className="text-lg font-semibold">활성</div>
          <button onClick={toggleModal7} className="text-lg font-semibold">
            장치상태
          </button>
        </div>
        {/* 왼쪽 영역 */}
        <div className="flex-1 text-center text-2xl font-semibold text-custom-color">
          통합 대시보드
        </div>
        {/* 중앙 타이틀 */}
        <div className="flex-1 flex justify-end items-center space-x-4 text-custom-color">
          {/* 오른쪽 영역 */}
          <div className="text-lg font-semibold">경기 이천시</div>
          <div className="text-lg font-semibold flex flex-row">
            <img
              className="w-[9px] h-[18px] mt-1 mr-2"
              src={`${process.env.PUBLIC_URL}/assets/images/Control/Vector.png`}
              alt=""
            />
            22 ℃
          </div>
          <div className="text-lg font-semibold flex flex-row">
            <img
              className="w-5 h-5 mt-1 mr-2"
              src={`${process.env.PUBLIC_URL}/assets/images/Control/Humidity.png`}
              alt=""
            />
            51%
          </div>
          <div className="text-lg font-semibold flex flex-row">
            <img
              className="w-5 h-5 mt-1 mr-2"
              src={`${process.env.PUBLIC_URL}/assets/images/Control/Humidity.png`}
              alt=""
            />
            629 w/m²
          </div>
          <button className="text-lg font-semibold">
            <img
              className="w-5 h-5 mt-1 mr-2"
              src={`${process.env.PUBLIC_URL}/assets/images/Control/Humidity.png`}
              alt=""
            />
          </button>
        </div>
        <div className="top-20 left-10 absolute flex-row flex">
          {isModal6Visible && <NavBarModal6 />}
          {isModal7Visible && <NavBarModal7 />}
        </div>
        {/* NavBar6 모달을 조건부로 렌더링합니다 */}
      </div>
    </div>
  );
};

export default Navbar;
