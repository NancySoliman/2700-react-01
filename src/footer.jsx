import face from "./assets/face.png";
import whats from "./assets/whats.png";
import youtube from "./assets/youtube.png";
import instgrame from "./assets/instgram.jpg";
import style from "./css/footer.module.css";
export default function Footer() {
  return (
    <footer className={style.footer}>
      <h3 className={style.h3}>Follow us </h3>
      <div className={style.sosial}>
        <a href="">
          
          <img src={face} alt="" />
        </a>
        <a href="">
          
          <img src={whats} alt="" />
        </a>
        <a href="#">
          
          <img src={youtube} alt="" />
        </a>
        <a href="">
          
          <img src={instgrame} alt="" />
        </a>
      </div>
    </footer>
  );
}
