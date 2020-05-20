import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import Time from './Time';
import FileIcon from './FileIcon';

const FileList = ({ files }) => (
	<table className="file-list">
		<tbody>
			{files.map(file => (
				/* using FileListItem here */	
				<FileListItem key={file.id} file={file}/>
			))}
		</tbody>
	</table>
);

FileList.propTypes = {
	files: PropTypes.array
};

const FileListItem = ({ file }) => (
		<tr className="file-list-item">
			<td className="icon-td"><FileIcon file={file}/></td>
			<td><FileName file={file}/></td>
			<td><CommitMessage commit={file.latestCommit}/></td>
			<td className="age"><Time time={file.updated_at}/></td>
		</tr>
);

FileListItem.propTypes = {
	file: PropTypes.object.isRequired
};

const FileName = ({ file }) => {
	return (
		<>
			<span className="file-name">
				{file.name}
			</span>
		</>
	);
}

FileName.propTypes = {
	name: PropTypes.object.isRequired
};

const CommitMessage = ({ commit }) => {
	return (
		<span className="commit-message">
			{commit.message}
		</span>
	);
}

CommitMessage.propTypes = {
	commit: PropTypes.object.isRequired
};

const testFiles = [
	{
		id: 1,
		name: 'src',
		type: 'folder',
		updated_at: "2009-09-11 21:23:56",
		latestCommit: {
			message: 'Initial commit'
		}
	},
	{
		id: 2,
		name: 'tests',
		type: 'folder',
		updated_at: "2019-09-11 21:23:56",
		latestCommit: {
			message: 'Initial commit'
		}
	},
	{
		id: 3,
		name: 'README',
		type: 'file',
		updated_at: "2013-09-11 21:23:56",
		latestCommit: {
			message: 'Added a readme'
		}
	},
	{
		id: 4,
		name: 'src',
		type: 'folder',
		updated_at: "2009-09-11 21:23:56",
		latestCommit: {
			message: 'Initial commit'
		}
	},
	{
		id: 5,
		name: 'tests',
		type: 'folder',
		updated_at: "2019-09-11 21:23:56",
		latestCommit: {
			message: 'Initial commit'
		}
	},
	{
		id: 6,
		name: 'README',
		type: 'file',
		updated_at: "2013-09-11 21:23:56",
		latestCommit: {
			message: 'Added a readme'
		}
	},
	{
		id: 7,
		name: 'src',
		type: 'folder',
		updated_at: "2009-09-11 21:23:56",
		latestCommit: {
			message: 'Initial commit'
		}
	},
	{
		id: 8,
		name: 'new tests',
		type: 'folder',
		updated_at: "2020-09-11 21:23:56",
		latestCommit: {
			message: 'Initial commit'
		}
	},
	{
		id: 9,
		name: 'README',
		type: 'file',
		updated_at: "2013-09-11 21:23:56",
		latestCommit: {
			message: 'Added a readme'
		}
	},

];

ReactDOM.render(<FileList files={testFiles}/>,
	document.querySelector('#root'));
