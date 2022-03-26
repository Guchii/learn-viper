export default function Home() {
  return (
    <>
      <main>
        <img src="/images/viper.png" alt="viper" className="viper" />
        <div className="left">
          <h1 className="mainHeading">VIPER</h1>
          <div className="abilities">
            <div>
              <div className="roundedGreen image">
                <img src="/images/snakebite.png" alt="snakeBite" />
              </div>
              <p>
                <strong>Equip</strong> a chemical launcher.
                <strong>Fire</strong> to launch a canister that shatters upon
                hitting the floor, creating a lingering chemical zone that
                damages agents and inflicts the <strong>Vulnerable</strong>{' '}
                debuff for 2s, making them receive 200% damage from other
                sources.
              </p>
            </div>
            <div>
              <div className="roundedGreen image">
                <img src="/images/poison-cloud.png" alt="" />
              </div>
              <p>
                Sign up to our newsletter and we’ll keep you up to date with the
                latest arrivals and sales. Won't be overdoing it, we hate spam
                mails as much as
              </p>
            </div>
            <div>
              <div className="roundedGreen image">
                <img src="/images/toxic-screen.png" alt="" />
              </div>
              <p>
                Sign up to our newsletter and we’ll keep you up to date with the
                latest arrivals and sales. Won't be overdoing it, we hate spam
                mails as much as
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <nav>
            <ul>
              <li>
                <a href="/">LEARN</a>
              </li>
              <li>
                <a href="/">LINEUPS</a>
              </li>
              <li>
                <a href="/">ABOUT</a>
              </li>
            </ul>
          </nav>
        </div>
      </main>
      <div className="roundedGreen toTop">
        <span>TOP</span>
      </div>
    </>
  );
}
