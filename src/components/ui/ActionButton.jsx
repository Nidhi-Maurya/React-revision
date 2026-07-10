export default function ActionButton({
  children,
  className = "",
  icon: Icon,
  isActive = false,
  type = "button",
  variant = "soft",
  ...props
}) {
  return (
    <button
      className={`cc-button cc-button-${variant} ${isActive ? "is-active" : ""} ${className}`}
      type={type}
      {...props}
    >
      {Icon && <Icon aria-hidden="true" />}
      <span>{children}</span>
    </button>
  );
}
