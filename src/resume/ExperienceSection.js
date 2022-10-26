import React from 'react';
import { Card } from 'react-bootstrap';

const ExperienceSection = ({ profile }) => {
    return (
        <Card className='mb-5'>
            <Card.Body>
                <div className='row justify-content-center'>
                    <h2 className='mb-4 mb-5'>경험</h2>

                    <div
                        className={
                            'row' +
                            (profile.experience.length % 3 === 0
                                ? ''
                                : ' justify-content-center')
                        }
                    >
                        {profile.experience.map((exp) => {
                            return (
                                <div className='col-xs-12 col-lg-4'>
                                    <Card className='mb-3'>
                                        <Card.Body>
                                            <h4>{exp.name}</h4>
                                            <h6 className='text-muted'>
                                                {`${exp.startDate} - ${exp.endDate}`}
                                            </h6>
                                            <div className='list-group'>
                                                {exp.descriptions.map((des) => {
                                                    return (
                                                        <div className='list-group-item'>
                                                            {des}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ExperienceSection;
