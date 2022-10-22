import React from 'react';

const TechnologyCard = ({ technology }) => {
    return (
        <div className='card mt-3 mb-3'>
            <div className='row justify-content-center'>
                <div className='col-6'>
                    <img
                        className='card-img-top img-fluid pt-4'
                        src={technology.icon}
                        alt={`${technology.name}-icon`}
                    />
                </div>
            </div>
            <div className='card-body'>
                <div className='card-title'>
                    <h4>{technology.name}</h4>
                </div>
            </div>

            <div className='list-group list-group-flush'>
                {technology.features.map((feature) => {
                    return <li className='list-group-item'>{feature}</li>;
                })}
            </div>
        </div>
    );
};

export default TechnologyCard;
