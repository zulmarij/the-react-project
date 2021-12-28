import { useEffect } from "react";

export default function Contact() {
    useEffect(() => {
        document.title = 'Contact';        
    }, []);

  return (
    <section className="section">
      <h1 className="section-title">Contact</h1>
      <p className="section-description">
        Kamu dapat menghubungi kami dibawah ini:
      </p>
      <ul>
        <li>WA: 081350887602</li>
        <li>Email: email@example.com</li>
      </ul>
      <p className="section-description">
        Atau kamu dapat melihat kami pansos di sosmed:
      </p>
      <ul>
        <li>
          <a href="https://facebook.com">Facebook</a>
        </li>
        <li>
          <a href="https://twitter.com">Twitter</a>
        </li>
      </ul>
    </section>
  );
}
