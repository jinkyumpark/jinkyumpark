import React from 'react';
import { Card, Table } from 'react-bootstrap';

import profileImage from '../images/main-profile.jpg';

const Profile = () => {
    return (
        <Card className='mb-5'>
            {/* <Card.Header>박진겸</Card.Header> */}

            <Card.Body>
                <div className='row'>
                    <div className=' col-xs-12 col-lg-3'>
                        <img
                            src={profileImage}
                            alt='jinkyumpark profile image'
                            className='img-fluid rounded'
                        />
                    </div>
                    <div className='col-xs-12 col-lg-9 '>
                        <h2 className='text-start mt-3'>
                            박진겸
                            <small className='text-muted'>Jinkyum Park </small>
                        </h2>

                        <TableView className='' />
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
                    <td>1999년 10월 25일</td>

                    <td>🎓</td>
                    <td>뉴욕주립대 스토니브룩 수학과 휴학 (4학년)</td>
                </tr>

                <tr>
                    <td>🏡</td>
                    <td>서울특별시 영등포구</td>

                    <td>✏️</td>
                    <td>국비지원학원 자바 웹개발자 과정수료 (7개월)</td>
                </tr>

                <tr>
                    <td> 📞</td>
                    <td>010-4539-8503</td>
                </tr>

                <tr>
                    <td>✉️</td>
                    <td>jinpark1025@gmail.com</td>
                </tr>
            </tbody>
        </Table>
    );
};

export default Profile;
