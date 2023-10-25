import React, { useEffect } from 'react'
import { Projects } from '../../components'

const Project = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<>
			<Projects />
		</>
	)
}

export default Project
