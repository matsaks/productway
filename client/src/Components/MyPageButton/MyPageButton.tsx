import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import './MyPageButton.css';

/*
 * This component is a button that navigates to the MyPage component.
 */
export default function MyPageButton() {
	const navigate = useNavigate();
	function handleNavShopping() {
		navigate('/myPage');
	}
	return (
		<div className="MyPageButton">
			<Button
				variant="contained"
				onClick={handleNavShopping}
				size="large"
				sx={{ background: '#287094' }}
			>
				Min side
			</Button>
		</div>
	);
}
