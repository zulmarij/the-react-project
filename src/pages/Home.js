import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        document.title = 'Home';        
    }, []);

  return (
    <section className="section">
      <h1 className="section-title">Selamat datang di website kami</h1>
      <p className="section-description">
        Halo semua, ini website baru kami. kamu bisa mendapatkan informasi
        seputar profile kami disini, salam kenal dari kami. Terimakasih!
      </p>
    </section>
  );
}
