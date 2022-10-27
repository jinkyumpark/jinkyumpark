import React from 'react';
import { Card, Table } from 'react-bootstrap';

const Language = ({ profile }) => {
    return (
        <Card className='mb-5'>
            <Card.Body className='overflow-x-auto'>
                <h2 className='mt-4 mb-5'>외국어</h2>

                <Table responsive hover>
                    <thead>
                        <tr>
                            <th>언어</th>
                            <th>공인 성적</th>
                            <th>읽기</th>
                            <th>쓰기</th>
                            <th>회화</th>
                        </tr>
                    </thead>

                    <tbody>
                        {profile.language.map((lang) => {
                            return (
                                <tr>
                                    <td>{lang.name}</td>
                                    <td>{lang.score}</td>
                                    <td>{lang.reading}</td>
                                    <td>{lang.writing}</td>
                                    <td>{lang.talking}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default Language;
