import React from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

function Billboard() {
	return (
		<div className='container'>
			<div className='billboard'>
				<div className='billboard-pc'>
					<img src='./img/billboard.jpg' alt='' />
				</div>
				<div className='billboard-mobile'>
					<img src='./img/billboard-mobile.jpg' alt='' />
				</div>
				<div className='billboard-content'>
					<h1>Perfect yourself, today</h1>
					<p>
						It's the last day to learn skills for your future from
						US $ 11.99
					</p>
					<div className='billboard-content__input'>
						<input
							type='text'
							placeholder='What do you want to learn ?'
						/>
						<button>
							<SearchOutlinedIcon className='billboard-icon' />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Billboard;
