import React from 'react'
import { resumeUrl } from '../data/url'

const ResumeSection = () => {
	const resumeTitle = `이력서로 보고 싶으세요?`
	const resumeSubtitle = `제 이력서가 궁금하시다면 여기서 보실 수 있습니다.`
	const buttonText = `이력서 보러 가기`

	const backgroundStyle = {
		backgroundColor: `rgb(255, 255, 255)`,
	}

	return (
		<section class='text-center text-black pt-5 pb-5' style={backgroundStyle}>
			<div className='container'>
				<h1>{resumeTitle}</h1>

				<div className='row justify-content-center'>
					<div className='col-12 col-xl-6 mt-3'>
						<div className='row text-center'>
							<div className='col-xs-12 col-lg-9'>
								<h5 className='mt-2 '>{resumeSubtitle}</h5>
							</div>
							<div className='col-xs-12 col-lg-3 mt-3 mt-lg-0'>
								<a href={resumeUrl} className='text-decoration-none text-black'>
									<div className='btn btn-dark'>{buttonText}</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ResumeSection
