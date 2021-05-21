import React from 'react'
import LeftCard from './LeftCard'
import RightCard from './RightCard';

interface MainPageProps {

}

const MainPage: React.FC<MainPageProps> = ({}) => {
        return (
            <div className='main-page' >
                <LeftCard />
                <RightCard />
            </div>
        );
}


export default MainPage