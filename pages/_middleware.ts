import { NextResponse } from "next/server";

export default function middleware(req: any) {
  const { token } = req.cookies;
  const url = req.page.name;
  console.log(url)
  if (token && url === "/connect") {
    return NextResponse.redirect("/");
  } else if (!token && url === "/") {
    return NextResponse.redirect("/connect");
  } else if (!token && url === "/category") {
    return NextResponse.redirect("/connect");
  } else if (!token && url === "/[users]") {
    return NextResponse.redirect("/connect");
  } else if (!token && url === "/trends") {
    return NextResponse.redirect("/connect");
  }
  else if (!token && url === "/content/[contentId]") {
    return NextResponse.redirect("/connect");
  } else if (!token && url === "/settings") {
    return NextResponse.redirect("/connect");
  }
  else if (!token && url === "/search") {
    return NextResponse.redirect("/connect");
  }
}
