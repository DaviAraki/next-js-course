import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/Davi.jpg" alt="ME" width={300} height={300} />
      </div>
      <h1>Hi, I'm Davi</h1>
      <p>I blog about game design and development</p>
    </section>
  );
}

export default Hero;
