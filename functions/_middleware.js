export async function onRequest(context) {
  const url = new URL(context.request.url);
  
  // 만약 접속한 주소에 pages.dev가 포함되어 있다면?
  if (url.hostname.includes("pages.dev")) {
    // 호스트 주소를 내 진짜 도메인으로 바꿈
    url.hostname = "somunnanjejag.com";
    
    // 서버 단에서 즉시 HTTP 301(영구 이동) 신호와 함께 튕겨냄!
    return Response.redirect(url.toString(), 301);
  }
  
  // 내 도메인으로 정상 접속했다면 그대로 화면을 보여줌
  return context.next();
}
