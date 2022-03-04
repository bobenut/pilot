import React, { Component } from 'react';
import { List, Avatar, Button, Skeleton } from 'antd';
import './index.css';
import reqwest from 'reqwest';


class TaskList extends Component {
	state = { 
		initLoading: true,
		loading: false,
		data: [],
		list: [],
	}

	componentDidMount() {
		this.getData(res => {
			this.setState({
			  initLoading: false,
			  data: res,
			  list: res,
			});
		});
	}

	getData = callback => {
		reqwest({
		  url: window.backendBaseUrl + '/tasks',
		  type: 'json',
		  method: 'get',
		  contentType: 'application/json',
		  success: res => {
			callback(res);
		  },
		});
	};

	onLoadMore = () => {
		this.setState({
		  loading: true,
		  list: this.state.data.concat([...new Array(3)].map(() => ({ 
			  loading: true, 
			  title: '',
		      content: '',
		      start: 0,
		      end: 0,
		      process: 0,
		      stage: '' 
			}))),
		});
		this.getData(res => {
		  const data = this.state.data.concat(res);
		  this.setState(
			{
			  data,
			  list: data,
			  loading: false,
			},
			() => {
			  // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
			  // In real scene, you can using public method of react-virtualized:
			  // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
			  window.dispatchEvent(new Event('resize'));
			},
		  );
		});
	};

	render() {
		const { initLoading, loading, list } = this.state;
		const loadMore =
		!initLoading && !loading ? (
			<div
			style={{
				textAlign: 'center',
				marginTop: 12,
				height: 32,
				lineHeight: '32px',
			}}
			>
			<Button onClick={this.onLoadMore}>更多</Button>
			</div>
		) : null;

		return (
			<List
				className="dloadmore-list"
				loading={initLoading}
				itemLayout="horizontal"
				loadMore={loadMore}
				dataSource={list}
				renderItem={item => (
					<List.Item
						actions={[<a key="loadmore-list-item-edit">edit</a>, <a key="loadmore-list-more">more</a>]}
					>
						<Skeleton avatar title={false} loading={item.loading} active>
							<List.Item.Meta
								avatar={
								<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
								}
								title={<a href="https://ant.design">{item.title}</a>}
								description={item.content}
							/>
							<div>{item.start}</div>
							<div>{item.end}</div>
							<div>{item.process}</div>
							<div>{item.stage}</div>
						</Skeleton>
					</List.Item>
					)}
			/>
		);
	}
}

export default TaskList
