import React from 'react';
import { Card, Table } from 'react-bootstrap';

const Language = () => {
    return (
        <Card className='mb-5'>
            <Card.Body>
                <h2 className='mt-4 mb-5'>외국어</h2>

                <Table hover className='mt-4'>
                    <thead>
                        <tr>
                            <th>언어</th>
                            <th>공인 성적</th>
                            <th>읽기</th>
                            <th>쓰기</th>
                            <th>말하기/듣기</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>🇺🇸 영어</td>
                            <td>TOEIC 970</td>
                            <td>독서 많이 해(22년 기준 78권) 수준급</td>
                            <td>
                                미국 대학 3년 재학 중 리포트 작성 경험 많아 쓰기
                                자유로움
                            </td>
                            <td>의사소통 자유로움</td>
                        </tr>

                        <tr>
                            <td>🇯🇵 일본어</td>
                            <td>JLPT N1</td>
                            <td>독서 많이 해(22년 기준 44권) 수준급</td>
                            <td>취미로 일기와 에세이 쓰고 있으나 부족함</td>
                            <td>특정 전문분야가 아니라면 어느정도 자유로움</td>
                        </tr>

                        <tr>
                            <td> 🇨🇳 중국어</td>
                            <td>HSK 3급 (기간 만료)</td>
                            <td>-</td>
                            <td>-</td>
                            <td>일상회화 가능</td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default Language;
