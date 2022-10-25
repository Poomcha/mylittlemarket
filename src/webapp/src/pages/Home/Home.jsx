import './Home.css'

import Button from '../../components/Button/Button'

export default function Home() {

    return (
        <div className='home'>
            <p className=''>
                Bienvenue sur MyLittleMarket! ...
            </p>
            <nav>
                <Button text={'Acheter'} path={'/buy'} />
                <Button text={'Vendre'} path={'/sell'} />
            </nav> 
        </div>
    )
}