import React from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
		<>
			<div className='aboutUs mt-[160px]'>
				<div className='container'>
					<div className='flex items-center w-full justify-between'>
						<h4 className=' text-5xl font-Mont font-bold uppercase text-gray'>
							О нас
						</h4>
						<Link to='/'>
							<button className='flex items-center gap-[10px] justify-center text-center font-CN text-lg font-bold text-gray'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='55'
									height='12'
									viewBox='0 0 55 12'
									fill='none'
								>
									<path
										d='M54.0527 5.99999L0.999511 6M0.999511 6L6.60954 11.61M0.999511 6L6.60953 0.389974'
										stroke='#E5E5E5'
									/>
								</svg>
								На главную
							</button>
						</Link>
					</div>
					<hr className='w-full h-[1px] bg-white_20 my-[60px]' />
                    <div className="">
                        
                    </div>
				</div>
			</div>
		</>
	)
}

export default AboutUs