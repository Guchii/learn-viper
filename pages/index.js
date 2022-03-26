/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <main>
        <img
          src="/images/viper.png"
          alt="viper"
          className="viper"
          style={{ transform: `translate3d(0, -${offsetY * 0.5}px, 0)` }}
        />
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
                <img src="/images/toxic-screen.png" alt="toxicScreen" />
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
          </div>
        </div>
        <div className="right">
          <nav>
            <ul>
              <li>
                <Link href="/learn">LEARN</Link>
              </li>
              <li>
                <Link href="/lineups">LINEUPS</Link>
              </li>
              <li>
                <Link href="/about">ABOUT</Link>
              </li>
            </ul>
          </nav>
        </div>
      </main>
      <div className="roundedGreen toTop disNone">
        <span>TOP</span>
      </div>
      <footer>
        <a
          href="//github.com/guchii"
          rel="noreferrer"
          target="_blank"
          className="credits"
        >
          Designed & Built by Shivom Srivastava
        </a>
      </footer>
    </>
  );
}
