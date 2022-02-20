import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { experimental_sx as sx } from '@mui/system'

export default styled(Box)(
	sx({
		ml: 5,
		backgroundColor: 'paper.background',
		boxShadow: 4,
	}),
)
