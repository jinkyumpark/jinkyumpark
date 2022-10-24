import React from 'react';
import { Card, Table } from 'react-bootstrap';
import { profile } from '../data/profile';

const Profile = () => {
    return (
        <Card className='mb-5'>
            <Card.Body>
                <div className='row'>
                    <div className=' col-xs-12 col-lg-3'>
                        <img
                            src={profile.image}
                            alt={`${profile.koreanName} profile`}
                            className='img-fluid rounded'
                        />
                    </div>
                    <div className='col-xs-12 col-lg-9 '>
                        <h2 className='text-start mt-3'>
                            {profile.koreanName}
                            <small className='text-muted'>
                                {profile.englishName}{' '}
                            </small>
                        </h2>

                        <TableView />
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

const TableView = () => {
    return (
        <Table hover className='mt-4'>
            <tbody>
                <tr>
                    <td>🎉</td>
                    <td>{profile.birthDate}</td>

                    <td>🎓</td>
                    <td>{profile.university}</td>
                </tr>

                <tr>
                    <td>🏡</td>
                    <td>{profile.address}</td>

                    <td>✏️</td>
                    <td>{profile.education}</td>
                </tr>

                <tr>
                    <td> 📞</td>
                    <td>{profile.phone}</td>
                </tr>

                <tr>
                    <td>✉️</td>
                    <td>{profile.email}</td>
                </tr>
            </tbody>
        </Table>
    );
};

export default Profile;
