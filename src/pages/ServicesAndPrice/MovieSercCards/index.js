import React from 'react'
import { Link } from 'react-router-dom'

const MovieSercCard = ({ titles, button }) => {
	return (
		<>
			<div className='movieSercCard'>
				<div className='flex w-[780px] items-center justify-between'>
					<h4 className='w-[360px] text-gray text-2xl font-Mont font-medium leading-8'>
						{titles}
					</h4>
					<div className='flex items-center gap-5 relative'>
						<Link to={`/ServicePage`}>
							<button
								className='
							 text-sm font-bold font-CN uppercase underline text-yellow'
							>
								{button}
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default MovieSercCard
