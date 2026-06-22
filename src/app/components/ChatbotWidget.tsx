import { useEffect, useRef } from "react";

export default function ChatbotWidget() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadWidget() {
      try {
        const res = await fetch("/chat-widget.html");
        if (!res.ok) return;
        const html = await res.text();
        if (!mounted) return;

        // create a container appended to document.body so provider can position fixed elements
        let container = document.getElementById("chatbot-widget-container");
        if (!container) {
          container = document.createElement("div");
          container.id = "chatbot-widget-container";
          document.body.appendChild(container);
        }

        // set HTML inside container
        container.innerHTML = html;

        // Re-execute scripts so external and inline scripts run in document context
        const scripts = Array.from(container.querySelectorAll("script"));
        for (const oldScript of scripts) {
          const newScript = document.createElement("script");
          if (oldScript.src) {
            newScript.src = oldScript.src;
            newScript.async = oldScript.async;
          } else {
            newScript.textContent = oldScript.textContent;
          }
          // copy attributes
          for (let i = 0; i < oldScript.attributes.length; i++) {
            const attr = oldScript.attributes[i];
            newScript.setAttribute(attr.name, attr.value);
          }
          oldScript.parentNode?.removeChild(oldScript);
          container.appendChild(newScript);
        }
      } catch (err) {
        // ignore
      }
    }

    loadWidget();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div
      id="chatbot-widget-root"
      aria-hidden="false"
      ref={ref}
      style={{ position: "relative", zIndex: 9999 }}
    />
  );
}
