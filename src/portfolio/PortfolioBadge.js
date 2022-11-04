import React from 'react';
import { Badge } from 'react-bootstrap';

const PortfolioBadge = ({ portfolio }) => {
    return (
        <h3>
            <Badge
                bg={portfolio.status.style}
                style={{
                    position: 'absolute',
                    right: '-5%',
                    top: '-3%',
                }}
            >
                {portfolio.status.name}
            </Badge>
        </h3>
    );
};

export default PortfolioBadge;
