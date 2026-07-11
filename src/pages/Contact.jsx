import { MailIcon, SendIcon, UserIcon } from "../components/ui/icons";

export default function Contact() {
  return (
    <main className="page-shell cart-page">
      <div className="menu-title-row">
        <div>
          <p className="eyebrow">Support</p>
          <h1>Contact Us Page</h1>
        </div>
      </div>

      <form className="toolbar-panel" onSubmit={(event) => event.preventDefault()}>
        <label className="search-field">
          <UserIcon />
          <input type="text" placeholder="Enter your name" />
        </label>
        <label className="search-field">
          <MailIcon />
          <input type="email" placeholder="Enter your email" />
        </label>
        <label className="search-field">
          <textarea
            placeholder="Type Your Message"
            className="contact-textarea"
          />
        </label>
        <button className="icon-button" type="submit">
          <SendIcon />
          Submit
        </button>
      </form>
    </main>
  );
}
