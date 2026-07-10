import { FiAlertCircle } from "react-icons/fi";
import { createElement } from "react";

export default function EmptyState({
  icon: Icon = FiAlertCircle,
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
