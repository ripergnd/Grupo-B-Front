import { useEffect } from "react";

export default function useFavicon(icon, title) {
  useEffect(() => {
    let link = document.querySelector("link[rel='icon']");

    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }

    link.href = icon + "?v=" + Date.now();

    if (title) {
      document.title = title;
    }
  }, [icon, title]);
}