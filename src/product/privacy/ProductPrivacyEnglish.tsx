import React from 'react'
import parser from 'html-react-parser'

interface Props {
    privacyText: string
}

const ProductPrivacyEnglish: React.FC<Props> = ({ privacyText }) => {
    React.useEffect(() => {
        document.title = `Privacy Policy`
    }, [])

    return <div className='container mt-5 mb-5'>{parser(privacyText)}</div>
}

export default ProductPrivacyEnglish