import React from 'react';

export default class AdComponent extends React.Component {
	componentDidMount () {
		(window.adsbygoogle = window.adsbygoogle || []).push({});
	}

	render () {
		return (
			<ins className='adsbygoogle'
					 style={{ display: 'block' }}
					 data-ad-client='ca-pub-9174460073573127'
					 data-ad-slot='9818341548'
					 data-ad-format='rspv'/>
		);
	}
}