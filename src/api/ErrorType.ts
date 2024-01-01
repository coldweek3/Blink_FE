export const ErrorType = (code: string, goToSignIn: () => void) => {
  console.log("code: ", code);

  if (
    code === "NOT_LOGIN_USER" ||
    code === "USER_NOT_FOUND" ||
    code === "USERINFO_NOT_FOUND"
  ) {
    goToSignIn();
    alert("요청에 실패했습니다. 다시 로그인해주세요!");
  } else if (code === "MAKE_TEAM_FIRST") {
    alert("팀이 없습니다. 팀을 먼저 만들어주세요.");
  } else if (code === "ONLY_LEADER_CAN_DO") {
    alert("팀의 팀장만 팀을 삭제할 수 있습니다.");
  } else if (code === "BANNED_USER") {
    alert("신고로 인해 계정이 정지 처리 되었습니다.");
  } else if (code === "NICKNAME_NOT_FOUND") {
    alert("존재하지 않는 닉네임입니다.");
  } else if (code === "TEAM_NOT_FOUND") {
    alert("팀이 존재하지 않습니다.");
  } else if (code === "SIGNAL_NOT_FOUND") {
    alert("시그널이 존재하지 않습니다.");
  } else if (code === "CHAT_NOT_FOUND") {
    alert("유효하지 않은 채팅방입니다.");
  } else if (code === "BAR_NOT_FOUND") {
    alert("유효하지 않은 채팅방입니다.");
  } else {
    alert("에러가 발생했습니다!");
  }
};
/*
 * 나중에 서버 Error 코드랑 맞춰서 변경할 예정
 */
