export default function SectionHeader({ action, eyebrow, title, text }) {
  return (
    <div className="cc-section-header">
      <div>
        {eyebrow && <p className="cc-eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
      {action && <div className="cc-section-action">{action}</div>}
    </div>
  );
}
