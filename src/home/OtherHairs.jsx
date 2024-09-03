import React, { useEffect } from 'react'
import HairCards from '../components/HairCards';

const OtherHairs = () => {
    const [hairs, setHairs] = React.useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/all-hairs")
        .then((res) => res.json())
        .then((data) => setHairs(data.slice(4, 15)));
    }, []);
    return (
      <div className='object-cover'>
        <HairCards hairs={hairs} headline={<span className="text-blue-500">Other Hairs</span>} />
      </div>
    );
}

export default OtherHairs