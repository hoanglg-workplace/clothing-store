import React, { useEffect } from "react";
import "./PageNotFound.scss";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  function handleContextMenu(event) {
    event.preventDefault(); // Ngăn chặn hiển thị menu ngữ cảnh
  }

  return (
    <div className="ErrorPage_wrapper" onContextMenu={handleContextMenu}>
      <div className="c">
        <div className="_404">404</div>
        <hr />
        <br />
        <br />
        <div className="_1">TRANG</div>
        <br />
        <div className="_2">KHÔNG TÌM THẤY</div>
        <br />
        <a className="err_btn" href="/" target=""> 
          TRỞ VỀ TRANG CHỦ
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
