import { Box, styled } from '@mui/material'
import { experimental_sx as sx } from '@mui/system'

export default styled(Box)(
	sx({
		backgroundColor: 'background.paper',
		border: `2px solid`,
		borderColor: 'primary.main',
		borderRadius: 4,
		padding: 2,
		boxShadow: 4,
	}),
)
