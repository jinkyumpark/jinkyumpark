import React from 'react'
import parser from 'html-react-parser'

interface Props {
    privacyText: string
}

const ProductPrivacyKorean: React.FC<Props> = ({ privacyText }) => {
    React.useEffect(() => {
        document.title = `개인정보처리방침`
    }, [])

    return <div className='container mt-5 mb-5'>{parser(privacyText)}</div>
}

export default ProductPrivacyKorean