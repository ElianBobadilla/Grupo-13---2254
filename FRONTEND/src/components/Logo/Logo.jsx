import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LocalStorage } from '@/api/utilities';
import { SvgIcon } from '../SVGIcon';

export function Logo({ spin = false }) {
	const to = LocalStorage.hasSession() ? '/client/requests' : '/auth/sign-in';

	const spinClass = spin ? 'animate-spin-slow' : '';

	return (
		<Link to={to} className="flex mb-6 text-2xl font-semibold text-gray-900 ">
			<img src="https://cdn-icons-png.flaticon.com/512/3287/3287142.png" alt="" className={`w-10 h-10 mr-2 ${spinClass} `} />
			<span className="h-8">Insta Ya!</span>
		</Link>
	);
}

Logo.propTypes = {
	spin: PropTypes.bool,
};
