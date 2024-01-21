import React from "react";
import * as S from "./style";
import Logo from "../../../assets/image/nav/nav_logo.png";
import Search from "../../../assets/image/nav/search_icon.png";
import Community from "../../../assets/image/nav/community_icon.png";
import Notification from "../../../assets/image/nav/notification_icon.png";
import Expert from "../../../assets/image/nav/mypage_icon.png";
import Mypage from "../../../assets/image/nav/temp_profile.png";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <S.NavWrapper>
      <S.NavLogoImg onClick={() => navigate("")} src={Logo} alt="logo" />
      <S.NavLine />

      {/* 검색 페이지 제작시 수정 필요 */}
      <S.IconSection onClick={() => navigate("")}>
        <S.IconImg src={Search} alt="검색" />
        <S.NavTxt>검색</S.NavTxt>
      </S.IconSection>
      <S.IconSection onClick={() => navigate("community")}>
        <S.IconImg src={Community} alt="커뮤니티" />
        <S.NavTxt>커뮤니티</S.NavTxt>
      </S.IconSection>
      <S.IconSection onClick={() => navigate("notification")}>
        <S.IconImg src={Notification} alt="알림" />
        <S.NavTxt>알림</S.NavTxt>
      </S.IconSection>
      <S.IconSection onClick={() => navigate("expert")}>
        <S.IconImg src={Expert} alt="전문가" />
        <S.NavTxt>전문가</S.NavTxt>
      </S.IconSection>
      <S.IconSection onClick={() => navigate("mypage")}>
        <S.ProfileImg src={Mypage} alt="마이" />
        <S.NavTxt>마이</S.NavTxt>
      </S.IconSection>

      <S.SubBottom>
        <S.NavTxt>고객센터</S.NavTxt>
        <S.NavTxt>오류신고</S.NavTxt>
      </S.SubBottom>
    </S.NavWrapper>
  );
};

export default Nav;
