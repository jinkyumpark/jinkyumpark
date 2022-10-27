import React from 'react';
import { Card } from 'react-bootstrap';
import Error from '../common/Error';
import parser from 'html-react-parser';

const SelfIntroductionSection = ({ introductions }) => {
    return (
        <Card className='mb-5'>
            <Card.Body>
                <h2 className='mt-4 mb-5'>소개</h2>

                {introductions.length === 0 ? (
                    <>
                        <Error mainErrorMessage='아직 자기소개가 없어요' />
                    </>
                ) : (
                    <div className='row row-eq-height'>
                        {introductions.map((intro) => {
                            return (
                                <div className='col-xs-12 col-6 mb-4'>
                                    <Card className='h-100 text-start'>
                                        <Card.Body className='lead'>
                                            {parser(intro)}
                                        </Card.Body>
                                    </Card>
                                </div>
                            );
                        })}
                    </div>
                )}
            </Card.Body>
        </Card>
    );
};

export default SelfIntroductionSection;
