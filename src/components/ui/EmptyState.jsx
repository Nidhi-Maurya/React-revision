import { createElement } from "react";
import { AlertIcon } from "./icons";

export default function EmptyState({
  icon: Icon = AlertIcon,
  title,
  text,
  compact = false,
}) {
  return (
    <div className={compact ? "cc-empty-state is-compact" : "cc-empty-state"}>
      <span>
        {createElement(Icon, { "aria-hidden": "true" })}
      </span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
