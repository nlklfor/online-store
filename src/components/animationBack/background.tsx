import { Link } from 'react-router-dom';
import animation from '../../assets/anim.mp4';
import logo from '../../assets/M-white.png';
import { ReactNode } from 'react';

interface BackgroundProps {
    children: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => (
    <section className='background-section'>
        <video autoPlay loop muted playsInline className='anim-bg'>
            <source src={animation} type='video/mp4' />
        </video>
        <div className={'background-logo'}>
            <Link to={'/'}>
                <img alt='logo' width={1500} height={250} src={logo} />
            </Link>
        </div>
        <div className="header-container">
            {children}
        </div>
    </section>
);

export default Background;
