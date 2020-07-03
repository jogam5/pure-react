import React from 'react';

function Reddit({ subreddit }) {
	// Initialize state to hold the posts
	const [posts, setPosts] = React.useState([]);
	const [errorMessage, setErrorMessage] = React.useState('');

	React.useEffect( () => {
		console.log('fecth posts');
		// Fetch the data when the component mounts
		fetch(`http://localhost:8010/proxy/r/${subreddit}.json`)
			.then(res => {
				setErrorMessage('');
				return res.json()
			})
			.then(json =>
				// Save the posts into state
				setPosts(json.data.children.map(c => c.data))
			)
			.then(
			)
			.catch( err => {
				console.log('error triggered');
				setErrorMessage('No found results, try again please!');			
			})
	}, [subreddit, setPosts]); // <-- we didn't pass the 2nd arg. what will happen?

	// Render as usual
	return (
		<>
			<p>{errorMessage}</p>
			<ul>
				{posts.map(post => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</>
	);
}

export default Reddit;
