import React from 'react'
import { useParams } from 'react-router'
import PrivacyPolicy from '../data/privacyPolicy';
import Error from '../common/Error';
import parse from 'html-react-parser'

const ProductPrivacy = () => {
    const { productName } = useParams()

    const [privacyPolicy, setPrivacyPolicy] = React.useState<string | null>(null)
    React.useEffect(() => {
        setPrivacyPolicy(PrivacyPolicy.get(productName?.toUpperCase() ?? '') ?? '')
    }, [productName])

    const errorMessage = {
		main: `없는 페이지에요`,
		sub: `URL을 다시 확인해 주세요`,
	}

    if (privacyPolicy == null || privacyPolicy === '') {
        return <Error message={errorMessage} />
    }

    return <div className='container mt-5'>{parse(privacyPolicy)}</div>
}

export default ProductPrivacy